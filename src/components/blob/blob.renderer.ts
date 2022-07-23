import {
  DEFAULT_CENTER,
  DEFAULT_COLOR,
  DEFAULT_ELASTICITY,
  DEFAULT_FRICTION_COEFFICIENT,
  DEFAULT_INITIAL_ACCELERATION,
  DEFAULT_INITIAL_POINT_ACCELERATION,
  DEFAULT_NUMBER_POINTS,
  DEFAULT_RADIAL_EFFECT,
  DEFAULT_RADIUS,
  DEFAULT_SPEED
} from './blob.config'
import { coordinate2D } from './blob.types'

export default class BlobInstance {
  points: Array<Point>
  ctx: CanvasRenderingContext2D | undefined | null
  _color: string
  _mousePos: coordinate2D
  _canvas: HTMLCanvasElement | undefined
  _points: number
  _radius: number
  _position: coordinate2D
  _running: boolean
  _smoothing: boolean
  _markers: boolean
  _showMousePosition: boolean
  _speed: number
  _friction: number
  _elasticity: number
  _acceleration: number
  _radial: number

  constructor(
    initColor?: string,
    numPoints?: number,
    smooth?: boolean,
    marks?: boolean,
    initShowMousePosition?: boolean,
    initSpeed?: number,
    initFriction?: number,
    initElasticity?: number,
    initAcceleration?: number,
    initRadial?: number
  ) {
    this.points = []
    this._color = initColor ?? DEFAULT_COLOR
    this._mousePos = DEFAULT_CENTER
    this._points =
      numPoints && numPoints > 2 ? numPoints : DEFAULT_NUMBER_POINTS
    this._radius = DEFAULT_RADIUS
    this._position = DEFAULT_CENTER
    this._running = false
    this._smoothing = typeof smooth === 'boolean' ? smooth : true
    this._markers = typeof marks === 'boolean' ? marks : false
    this._showMousePosition =
      typeof initShowMousePosition === 'boolean' ? initShowMousePosition : false
    this._speed = initSpeed ?? DEFAULT_SPEED
    this._friction = initFriction ?? DEFAULT_FRICTION_COEFFICIENT
    this._elasticity = initElasticity ?? DEFAULT_ELASTICITY
    this._acceleration = initAcceleration ?? DEFAULT_INITIAL_POINT_ACCELERATION
    this._radial = initRadial ?? DEFAULT_RADIAL_EFFECT
  }

  init(): void {
    for (let i = 0; i < this.numPoints; i++) {
      let point = new Point(this.divisional * (i + 1), this)
      point.acceleration = DEFAULT_INITIAL_ACCELERATION
      this.push(point)
    }
  }

  render(): void {
    let canvas = this.canvas
    let ctx = this.ctx
    let pointsArray = this.points
    let points = this.numPoints
    let center = this.center
    if (ctx != undefined && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    pointsArray[0].solveWith(pointsArray[points - 1], pointsArray[1])

    let p0 = pointsArray[points - 1].position
    let p1 = pointsArray[0].position
    let _p2 = p1

    if (ctx) {
      ctx.beginPath()
      ctx.moveTo(center.x, center.y)
      ctx.moveTo((p0.x + p1.x) / 2, (p0.y + p1.y) / 2)
    }

    for (let i = 1; i < points; i++) {
      pointsArray[i].solveWith(
        pointsArray[i - 1],
        pointsArray[i + 1] || pointsArray[0]
      )

      let p2 = pointsArray[i].position

      var xc = (p1.x + p2.x) / 2
      var yc = (p1.y + p2.y) / 2

      if (this.smoothing) {
        ctx?.quadraticCurveTo(p1.x, p1.y, xc, yc)
      }

      if (ctx) {
        if (!this.smoothing) {
          ctx?.lineTo(p2.x, p2.y)
        }

        ctx.fillStyle = this.color
        if (this.markers) {
          ctx.fillRect(p1.x - 5, p1.y - 5, 10, 10)
        }
      }
      p1 = p2
    }

    var xc = (p1.x + _p2.x) / 2
    var yc = (p1.y + _p2.y) / 2

    if (ctx) {
      ctx.fillStyle = this.color
      ctx.fill()
      ctx.strokeStyle = this.color
    }

    if (this.showMousePosition) {
      let angle = Math.atan2(this.mousePos.y, this.mousePos.x) + Math.PI
      ctx?.fillRect(
        center.x + Math.cos(angle) * this.radius,
        center.y + Math.sin(angle) * this.radius,
        10,
        10
      )
    }
    requestAnimationFrame(this.render.bind(this))
  }

  push(item: Point) {
    if (item instanceof Point) {
      this.points.push(item)
    }
  }

  set color(value: string) {
    this._color = value
  }
  get color(): string {
    return this._color
  }

  set smoothing(value: boolean) {
    this._smoothing = value
  }

  get smoothing(): boolean {
    return this._smoothing
  }

  get friction(): number {
    return this._friction
  }

  get elasticity(): number {
    return this._elasticity
  }

  get acceleration(): number {
    return this._acceleration
  }

  get radial(): number {
    return this._radial
  }

  set markers(value: boolean) {
    this._markers = value
  }

  get markers(): boolean {
    return this._markers
  }

  get speed(): number {
    return this._speed
  }

  set showMousePosition(value: boolean) {
    this._showMousePosition = value
  }

  get showMousePosition(): boolean {
    return this._showMousePosition
  }

  set mousePos(value) {
    this._mousePos = value
  }
  get mousePos() {
    return this._mousePos
  }

  set canvas(value: HTMLCanvasElement | undefined) {
    if (
      value instanceof HTMLElement &&
      value.tagName.toLowerCase() === 'canvas'
    ) {
      this._canvas = value
      this.ctx = this._canvas.getContext('2d')
    }
  }
  get canvas(): HTMLCanvasElement | undefined {
    return this._canvas
  }

  set numPoints(value: number) {
    if (value > 2) {
      this._points = value
    }
  }
  get numPoints(): number {
    return this._points
  }

  set radius(value: number) {
    if (value > 0) {
      this._radius = value
    }
  }
  get radius() {
    return this._radius
  }

  set position(value: coordinate2D) {
    if (typeof value == 'object' && value.x && value.y) {
      this._position = value
    }
  }
  get position(): coordinate2D {
    return this._position
  }

  get divisional(): number {
    return (Math.PI * 2) / this.numPoints
  }

  get center(): coordinate2D {
    return this.canvas
      ? {
          x: this.canvas.width * this.position.x,
          y: this.canvas.height * this.position.y
        }
      : DEFAULT_CENTER
  }

  set running(value: boolean) {
    this._running = value === true
  }
  get running(): boolean {
    return this.running !== false
  }
}

export class Point {
  parent: BlobInstance
  azimuth: number
  _acceleration: number
  _components: { x: number; y: number }
  _speed: number
  _radialEffect: number
  _elasticity: number
  _friction: number

  constructor(azimuth: number, parent: BlobInstance) {
    this.parent = parent
    this.azimuth = Math.PI - azimuth
    this._components = {
      x: Math.cos(this.azimuth),
      y: Math.sin(this.azimuth)
    }
    this._acceleration = parent.acceleration
    this._speed = parent.speed
    this._radialEffect = parent.radial
    this._elasticity = parent.elasticity
    this._friction = parent.friction
  }

  solveWith(leftPoint: Point, rightPoint: Point) {
    this.acceleration =
      (-0.3 * this.radialEffect +
        (leftPoint.radialEffect - this.radialEffect) +
        (rightPoint.radialEffect - this.radialEffect)) *
        this.elasticity -
      this.speed * this.friction
  }

  set acceleration(value: number) {
    if (typeof value == 'number') {
      this._acceleration = value
      this.speed += this._acceleration * 2
    }
  }

  get acceleration() {
    return this._acceleration
  }

  set speed(value: number) {
    if (typeof value == 'number') {
      this._speed = value
      this.radialEffect += this._speed * 5
    }
  }
  get speed() {
    return this._speed
  }

  set radialEffect(value: number) {
    if (typeof value == 'number') {
      this._radialEffect = value
    }
  }

  get radialEffect(): number {
    return this._radialEffect
  }

  get position(): coordinate2D {
    return {
      x:
        this.parent.center.x +
        this.components.x * (this.parent.radius + this.radialEffect),
      y:
        this.parent.center.y +
        this.components.y * (this.parent.radius + this.radialEffect)
    }
  }

  get components(): coordinate2D {
    return this._components
  }

  set elasticity(value: number) {
    if (typeof value === 'number') {
      this._elasticity = value
    }
  }

  get elasticity(): number {
    return this._elasticity
  }

  set friction(value: number) {
    if (typeof value === 'number') {
      this._friction = value
    }
  }

  get friction(): number {
    return this._friction
  }
}
