import 'imports-loader?this=>window!createjs/builds/1.0.0/createjs.min'

// createjs.CSSPlugin.install();
let Fireworks
let GRAVITY
let K
let SPEED

GRAVITY = 1

K = 0.9

SPEED = 200

function ToRadian (degree) {
  return degree * Math.PI / 180.0
}

Fireworks = (function () {
  function Fireworks (stage, sx, sy, particles) {
    var circle, i, j, rad, ref, speed
    this.stage = stage
    this.sx = sx != null ? sx : 100
    this.sy = sy != null ? sy : 100
    this.particles = particles != null ? particles : 70
    this.sky = new createjs.Container()
    this.r = 0
    this.h = Math.random() * 360 | 0
    this.s = 100
    this.l = 50
    this.size = 3
    for (i = j = 0, ref = this.particles; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      speed = Math.random() * 12 + 2
      circle = new createjs.Shape()
      circle.graphics.f('hsla(' + this.h + ', ' + this.s + '%, ' + this.l + '%, 1)').dc(0, 0, this.size)
      circle.snapToPixel = true
      circle.compositeOperation = 'lighter'
      rad = ToRadian(Math.random() * 360 | 0)
      circle.set({
        x: this.sx,
        y: this.sy,
        vx: Math.cos(rad) * speed,
        vy: Math.sin(rad) * speed,
        rad: rad
      })
      this.sky.addChild(circle)
    }
    stage.addChild(this.sky)
  }

  Fireworks.prototype.explode = function () {
    var circle, j, p, ref
    if (this.sky) {
      ++this.h
      for (p = j = 0, ref = this.sky.children.length; 0 <= ref ? j < ref : j > ref; p = 0 <= ref ? ++j : --j) {
        circle = this.sky.getChildAt(p)
        circle.vx = circle.vx * K
        circle.vy = circle.vy * K
        circle.x += circle.vx
        circle.y += circle.vy + GRAVITY
        this.l = Math.random() * 100
        this.size = this.size - 0.001
        if (this.size > 0) {
          circle.graphics.c().f('hsla(' + this.h + ', 100%, ' + this.l + '%, 1)').dc(0, 0, this.size)
        }
      }
      if (this.sky.alpha > 0.4) {
        this.sky.alpha -= K / 50
      }
      else {
        this.stage.removeChild(this.sky)
        this.sky = null
      }
    } else {

    }
  }

  return Fireworks

})()

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

createjs.Ticker._setInterval(1000/25)


export default function createFirework (x, y) {
  const canvas = createCanvas(x, y)
  const stage = new createjs.Stage(canvas)
  const ctx = canvas.getContext('2d')
  const fireBoss = []

  stage.autoClear = false

  ctx.fillStyle = 'rgba(0, 0, 0, 0)'

  ctx.fillRect(0, 0, canvas.width, canvas.height)


  createjs.Touch.enable(stage)

  stage.update()

  const listener = createjs.Ticker.on('tick', repeat)

  const offset = 30
  for (let i = 0; i < 3; i++) {
    fireBoss.push(new Fireworks(
      stage,
      canvas.width/2 + getRandomInt(-1 * offset, offset),
      canvas.width/2 + getRandomInt(-1 * offset, offset)
    ))
  }

  function repeat () {
    if (fireBoss.length) {
      for (let fireworks = 0; fireworks < fireBoss.length; fireworks++) {
        if (fireBoss[fireworks].sky) {
          fireBoss[fireworks].explode()
        }
        else {
          fireBoss.splice(fireworks, 1)
        }
      }
    }
    else {
      if (canvas.style.opacity > 0.1) {
        canvas.style.opacity -= 0.05
      } else {
        createjs.Ticker.off('tick', listener)
        document.body.removeChild(canvas)
      }
    }

    stage.update()
  }
}

function createCanvas (x, y) {
  const canvas = document.createElement('canvas')

  const width = 400
  const height = 400
  canvas.width = width
  canvas.height = height
  canvas.style.cssText = `pointer-events: none; position: absolute; opacity: 1; left: ${x - width/2}px; top: ${y - height/2}px;`
  document.body.appendChild(canvas)

  return canvas
}




