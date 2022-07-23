import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  DEFAULT_COLOR,
  DEFAULT_NUMBER_POINTS,
  DEFAULT_RADIUS,
  DEFAULT_SENSITIVITY
} from './blob.config'

import BlobInstance, { Point } from './blob.renderer'
import { BlobInterface } from './blob.types'

const Blob = ({
  color = DEFAULT_COLOR,
  radius = DEFAULT_RADIUS,
  sensitivity = DEFAULT_SENSITIVITY,
  points = DEFAULT_NUMBER_POINTS,
  smoothing = true,
  height = window.innerHeight
}: BlobInterface): JSX.Element => {
  const [blob, setBlob] = useState<BlobInstance | null>(null)
  const canvas = useRef<HTMLCanvasElement | null>(null)
  const [hover, updateHover] = useState<boolean>(false)
  const [oldMousePoint] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0
  })

  const handleResize = useCallback(() => {
    if (canvas.current && canvas.current.parentElement) {
      canvas.current.width = canvas.current.parentElement.clientWidth
      canvas.current.height = height
      if (blob) {
        blob.color = color
      }
    }
  }, [blob, color, height])

  const resize = useCallback((): void => {
    handleResize()
  }, [handleResize])

  useEffect(() => {
    handleResize()
  }, [handleResize])

  const mouseMove = useCallback(
    (e: MouseEvent) => {
      if (blob) {
        const pos = blob.center
        const diff = { x: e.clientX - pos.x, y: e.clientY - pos.y }
        const dist = Math.sqrt(diff.x * diff.x + diff.y * diff.y)
        let angle: null | number = null

        blob.mousePos = { x: pos.x - e.clientX, y: pos.y - e.clientY }

        if (dist < blob.radius) {
          const vector = { x: e.clientX - pos.x, y: e.clientY - pos.y }
          angle = Math.atan2(vector.y, vector.x) + Math.random()
          updateHover(true)
        } else if (dist > blob.radius) {
          const vector = { x: e.clientX - pos.x, y: e.clientY - pos.y }
          angle = Math.atan2(vector.y, vector.x) + Math.random()
          updateHover(false)
          blob.color = ''
        }

        if (typeof angle === 'number') {
          let nearestPoint: null | Point = null
          let distanceFromPoint = 100

          blob.points.forEach((point: Point) => {
            if (angle) {
              if (Math.abs(angle - point.azimuth) < distanceFromPoint) {
                nearestPoint = point
                distanceFromPoint = Math.abs(angle - point.azimuth)
              }
            }
          })

          if (nearestPoint) {
            let strength: { x: number; y: number } | number = {
              x: oldMousePoint.x - e.clientX,
              y: oldMousePoint.y - e.clientY
            }
            strength =
              Math.sqrt(strength.x * strength.x + strength.y * strength.y) *
              sensitivity
            if (strength > 100) strength = 100
            nearestPoint = nearestPoint as Point
            nearestPoint.acceleration = (strength / 100) * (hover ? -1 : 1)
          }
        }

        oldMousePoint.x = e.clientX
        oldMousePoint.y = e.clientY
      }
    },
    [blob, hover, oldMousePoint, sensitivity]
  )

  useEffect(() => {
    setBlob(new BlobInstance(color, points, smoothing))
  }, [setBlob])

  useEffect(() => {
    if (blob) {
      if (canvas.current) {
        blob.canvas = canvas.current
        blob.radius = radius
        blob.color = color
      }
    }
  }, [blob, color, radius])

  useEffect(() => {
    if (blob?.canvas) {
      blob?.init()
      blob.render()
    }
  }, [blob])

  useEffect(() => {
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [resize])
  useEffect(() => {
    document.addEventListener('mousemove', mouseMove)
    return () => {
      document.removeEventListener('mousemove', mouseMove)
    }
  }, [mouseMove])

  return <canvas touch-action="none" ref={canvas} height={height} />
}

export default Blob
