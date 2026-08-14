game.sprites.playButton.init = function() {
    
    // Init sprite properties
    this.width = 300
    this.height = 100
    this.x = 500
    this.y = 300
    // Create 2D paths
    this.svgBox = new Path2D('M0 0L300 0L300 100L0 100 L0 0')
    this.svgTriangle = new Path2D('M120 20L120 80L180 50')
}

game.sprites.playButton.update = function () {
    // If clicked, then change scene
    if (this.isClicked) {
        mge.game.changeScene(game.scenes.main)
    }
}

game.sprites.playButton.drawFunction = function (ctx) {
    // Draw Button Box
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 4
    ctx.fillStyle = 'white'
    ctx.fill(this.svgBox)
    ctx.stroke(this.svgBox)

    // Draw Button Triangle
    ctx.fillStyle = 'black'
    ctx.fill(this.svgTriangle)

}