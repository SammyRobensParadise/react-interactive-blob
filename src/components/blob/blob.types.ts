export interface BlobInterface {
  // color of the blob
  color?: string
  // outer radius of the blob component.
  radius?: number
  // sensitivity of blob to mouse jitter
  sensitivity?: number
  // the number of points used to construct the blob
  points?: number
  //the height of the blob canvas
  height: number
}

export type coordinate2D = { x: number; y: number }
