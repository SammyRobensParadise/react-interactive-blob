import { coordinate2D } from './blob.types'

export const DEFAULT_NUMBER_POINTS: number = 32
export const DEFAULT_RADIUS: number = 128
export const DEFAULT_CENTER: coordinate2D = {
  x: 0.5,
  y: 0.5
}
export const DEFAULT_COLOR: string = '#2f4acf'
export const DEFAULT_INITIAL_ACCELERATION: number = -1 + Math.random() * 2
export const DEFAULT_INITIAL_POINT_ACCELERATION: number =
  -1 + Math.random() * 0.1
export const DEFAULT_SPEED: number = 0.5
export const DEFAULT_RADIAL_EFFECT: number = 0.1
export const DEFAULT_ELASTICITY: number = 0.001
export const DEFAULT_FRICTION_COEFFICIENT: number = 0.0095
export const DEFAULT_SENSITIVITY: number = 0.5
