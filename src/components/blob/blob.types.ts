export interface BlobInterface {
  // color of the blob
  color?: string
  // outer radius of the blob component.
  radius?: number
  // sensitivity of blob to mouse jitter
  sensitivity?: number
  height: number
}

export type coordinate2D = { x: number; y: number }
