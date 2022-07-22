export default class BlobInstance {
  points: Array<Point>
  ctx: CanvasRenderingContext2D | undefined | null
  _color: string
  _mousePos: { x: number; y: number }
  _canvas: HTMLCanvasElement | undefined
  _points: number
  _radius: number
  _position: { x: number; y: number }
  _running: boolean

  constructor() {
    this.points = []
    this._color = ''
    this._mousePos = { x: 0.5, y: 0.5 }
    this._points = 32
    this._radius = 128
    this._position = { x: 0.5, y: 0.5 }
    this._running = false
  }

  init() {
    for (let i = 0; i < this.numPoints; i++) {
      let point = new Point(this.divisional * (i + 1), this)
      // point.acceleration = -1 + Math.random() * 2;
      this.push(point)
    }
  }

  render() {
    let canvas = this.canvas
    let ctx = this.ctx
    let position = this.position
    let pointsArray = this.points
    let radius = this.radius
    let points = this.numPoints
    let divisional = this.divisional
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
      ctx?.quadraticCurveTo(p1.x, p1.y, xc, yc)
      //ctx?.lineTo(p2.x, p2.y)

      if (ctx) {
        ctx.fillStyle = this.color
        // ctx.fillRect(p1.x-2.5, p1.y-2.5, 5, 5);
      }

      p1 = p2
    }

    var xc = (p1.x + _p2.x) / 2
    var yc = (p1.y + _p2.y) / 2

    ctx?.quadraticCurveTo(p1.x, p1.y, xc, yc)

    if (ctx) {
      ctx.fillStyle = this.color
      ctx.fill()
      ctx.strokeStyle = this.color
    }

    /*
    if(this.mousePos) {
      let angle = Math.atan2(this.mousePos.y, this.mousePos.x) + Math.PI;
      ctx.fillRect(center.x + Math.cos(angle) * this.radius, center.y + Math.sin(angle) * this.radius, 5, 5);
    }
*/
    requestAnimationFrame(this.render.bind(this))
  }

  push(item: Point) {
    if (item instanceof Point) {
      this.points.push(item)
    }
  }

  set color(value) {
    this._color = value
  }
  get color() {
    return this._color
  }

  set mousePos(value) {
    this._mousePos = value
  }
  get mousePos() {
    return this._mousePos
  }

  set canvas(value) {
    if (
      value instanceof HTMLElement &&
      value.tagName.toLowerCase() === 'canvas'
    ) {
      this._canvas = value
      this.ctx = this._canvas.getContext('2d')
    }
  }
  get canvas() {
    return this._canvas
  }

  set numPoints(value) {
    if (value > 2) {
      this._points = value
    }
  }
  get numPoints() {
    return this._points || 32
  }

  set radius(value) {
    if (value > 0) {
      this._radius = value
    }
  }
  get radius() {
    return this._radius
  }

  set position(value) {
    if (typeof value == 'object' && value.x && value.y) {
      this._position = value
    }
  }
  get position() {
    debugger
    return this._position
  }

  get divisional() {
    return (Math.PI * 2) / this.numPoints
  }

  get center() {
    return this.canvas
      ? {
          x: this.canvas.width * this.position.x,
          y: this.canvas.height * this.position.y
        }
      : { x: 0, y: 0 }
  }

  set running(value) {
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
    this._acceleration = -0.3 + Math.random() * 0.1
    this._speed = 100
    this._radialEffect = 10
    this._elasticity = 0.001
    this._friction = 0.0085
  }

  solveWith(leftPoint: Point, rightPoint: Point) {
    this.acceleration =
      (-0.3 * this.radialEffect +
        (leftPoint.radialEffect - this.radialEffect) +
        (rightPoint.radialEffect - this.radialEffect)) *
        this.elasticity -
      this.speed * this.friction
  }

  set acceleration(value) {
    if (typeof value == 'number') {
      this._acceleration = value
      this.speed += this._acceleration * 2
    }
  }
  get acceleration() {
    return this._acceleration || 0
  }

  set speed(value) {
    if (typeof value == 'number') {
      this._speed = value
      this.radialEffect += this._speed * 5
    }
  }
  get speed() {
    return this._speed || 0
  }

  set radialEffect(value) {
    if (typeof value == 'number') {
      this._radialEffect = value
    }
  }
  get radialEffect() {
    return this._radialEffect || 0
  }

  get position() {
    return {
      x:
        this.parent.center.x +
        this.components.x * (this.parent.radius + this.radialEffect),
      y:
        this.parent.center.y +
        this.components.y * (this.parent.radius + this.radialEffect)
    }
  }

  get components(): { x: number; y: number } {
    return this._components
  }

  set elasticity(value) {
    if (typeof value === 'number') {
      this._elasticity = value
    }
  }
  get elasticity(): number {
    return this._elasticity
  }
  set friction(value) {
    if (typeof value === 'number') {
      this._friction = value
    }
  }
  get friction(): number {
    return this._friction
  }
}
