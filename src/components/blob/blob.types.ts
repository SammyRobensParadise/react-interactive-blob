export interface BlobInterface {
  // color of the blob
  color?: string
  // outer radius of the blob component.
  radius?: number
  // sensitivity of blob to mouse jitter
  sensitivity?: number
  // the number of points used to construct the blob
  points?: number
  // speed of continuious point motion
  speed?: number
  // smoothing between points
  smoothing?: boolean
  // coefficient of friction
  friction?: number
  // elasticity of the blob
  elasticity?: number
  // the acceleration of each point
  acceleration?: number
  // radial effect constant
  radial?: number
  // show markers at each point
  markers?: boolean
  // show the position of the mouse relative to the blob
  showMousePosition?: boolean
  //the height of the blob canvas
  height: number
}

export type coordinate2D = { x: number; y: number }
