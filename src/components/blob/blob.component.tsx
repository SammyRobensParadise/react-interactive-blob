import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  forwardRef
} from 'react'
import {
  DEFAULT_COLOR,
  DEFAULT_ELASTICITY,
  DEFAULT_FRICTION_COEFFICIENT,
  DEFAULT_INITIAL_POINT_ACCELERATION,
  DEFAULT_NUMBER_POINTS,
  DEFAULT_RADIAL_EFFECT,
  DEFAULT_RADIUS,
  DEFAULT_SENSITIVITY,
  DEFAULT_SPEED
} from './blob.config'

import BlobInstance, { Point } from './blob.renderer'
import { BlobInterface, coordinate2D } from './blob.types'

const Blob = forwardRef((props: BlobInterface, forwardRef): JSX.Element => {
  const {
    color = DEFAULT_COLOR,
    radius = DEFAULT_RADIUS,
    sensitivity = DEFAULT_SENSITIVITY,
    points = DEFAULT_NUMBER_POINTS,
    speed = DEFAULT_SPEED,
    smoothing = true,
    markers = true,
    showMousePosition = false,
    friction = DEFAULT_FRICTION_COEFFICIENT,
    elasticity = DEFAULT_ELASTICITY,
    acceleration = DEFAULT_INITIAL_POINT_ACCELERATION,
    radial = DEFAULT_RADIAL_EFFECT,
    height = window.innerHeight
  } = props

  const [blob, setBlob] = useState<BlobInstance | null>(null)
  const localRef = useRef<HTMLCanvasElement | null>(null)
  const [staleMousePoint] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0
  })

  const handleResize = useCallback((): void => {
    if (localRef.current && localRef.current.parentElement) {
      localRef.current.width = localRef.current.parentElement.clientWidth
      localRef.current.height = height
      forwardRef = localRef
      if (blob) {
        blob.color = color
      }
    }
  }, [blob, color, height])

  const resize = useCallback((): void => {
    handleResize()
  }, [handleResize])

  useEffect((): void => {
    handleResize()
  }, [handleResize])

  const mouseMove = useCallback(
    (mouseMoveEvent: MouseEvent): void => {
      if (blob) {
        const pos = blob.center
        const diff = {
          x: mouseMoveEvent.clientX - pos.x,
          y: mouseMoveEvent.clientY - pos.y
        }
        const dist = Math.sqrt(diff.x * diff.x + diff.y * diff.y)
        let angle: null | number = null

        blob.mousePos = {
          x: pos.x - mouseMoveEvent.clientX,
          y: pos.y - mouseMoveEvent.clientY
        }

        if (dist < blob.radius) {
          const vector = {
            x: mouseMoveEvent.clientX + pos.x,
            y: mouseMoveEvent.clientY + pos.y
          }
          angle = Math.atan2(vector.y, vector.x) + Math.random()
        } else if (dist > blob.radius) {
          const vector = {
            x: mouseMoveEvent.clientX - pos.x,
            y: mouseMoveEvent.clientY - pos.y
          }
          angle = Math.atan2(vector.y, vector.x) + Math.random()
        }

        if (typeof angle === 'number') {
          let nearestPoint: null | Point = null
          let distanceFromPoint = 1

          blob.points.forEach((point: Point) => {
            if (angle) {
              if (Math.abs(angle - point.azimuth) < distanceFromPoint) {
                nearestPoint = point
                distanceFromPoint = Math.abs(angle - point.azimuth)
              }
            }
          })

          if (nearestPoint) {
            let strength: coordinate2D | number = {
              x: staleMousePoint.x - mouseMoveEvent.clientX,
              y: staleMousePoint.y - mouseMoveEvent.clientY
            }
            strength =
              Math.sqrt(strength.x * strength.x + strength.y * strength.y) *
              sensitivity
            nearestPoint = nearestPoint as Point
            nearestPoint.acceleration = strength / 100
          }
        }

        staleMousePoint.x = mouseMoveEvent.clientX
        staleMousePoint.y = mouseMoveEvent.clientY
      }
    },
    [blob, staleMousePoint, sensitivity]
  )

  useEffect(() => {
    setBlob(
      new BlobInstance(
        color,
        points,
        smoothing,
        markers,
        showMousePosition,
        speed,
        friction,
        elasticity,
        acceleration,
        radial
      )
    )
  }, [setBlob])

  useEffect(() => {
    if (blob) {
      if (localRef.current) {
        blob.canvas = localRef.current
        blob.radius = radius
        blob.color = color
        forwardRef = localRef
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

  return <canvas touch-action="none" ref={localRef} height={height} />
})

export default Blob
