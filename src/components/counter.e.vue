

<template>
  <canvas ref='myCanvas' width='200' height='200' style='border:1px solid #d3d3d3'>
  Your browser does not support the HTML5 canvas tag.</canvas>
</template>

<script>

export default {
  name: 'counter',
  mounted () {
    console.info(this)
    let update = drawCanvas(this.$refs.myCanvas)
    update()
  }

}

function drawCanvas (c) {
  var ctx = c.getContext('2d')
  var start = Date.now()
  var duration = 10000 // ms
  var startPoint = 1.5

  return function update () {
    window.requestAnimationFrame(() => {
      var elapsed = Date.now() - start

      var delta = elapsed / duration
      var stopPoint = delta * 2 + startPoint

      ctx.clearRect(0, 0, c.width, c.height)
      ctx.beginPath()
      ctx.arc(100, 100, 50, startPoint * Math.PI, stopPoint * Math.PI)
      ctx.lineWidth = 20
      ctx.textAlign = 'center'
      ctx.stroke()

      ctx.font = '30px Arial'
      ctx.fillText(((duration - elapsed) / 100).toFixed() | 0, 100, 110)

      if (elapsed > duration) return
      update()
    })
  }
}

</script>
