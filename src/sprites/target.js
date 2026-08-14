game.sprites.target.init = function() {
    
    // Init sprite properties
    this.width = game.CONST.caseSize
    this.height = game.CONST.caseSize
    this.isVisible = false
}

game.sprites.target.initClone = function (_config) {
    let clone = this.cloneCreate()
    clone.isVisible = true
    clone.x = _config.x
    clone.y = _config.y
    clone.color = _config.color
    
}

game.sprites.target.update = function () {
}

game.sprites.target.drawFunction = function (ctx) {
    // Draw Box
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 2
    ctx.fillStyle = this.color
    ctx.fillRect(0,0,this.width,this.height)
    ctx.strokeRect(0,0,this.width,this.height)
    
}