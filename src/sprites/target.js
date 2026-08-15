game.sprites.target.init = function() {
    
    // Init sprite properties
    this.width = game.CONST.gridCellSize
    this.height = game.CONST.gridCellSize
    this.isConnected = false
    this.isVisible = false
}

game.sprites.target.initClone = function (_config) {
    let clone = this.cloneCreate()
    clone.isVisible = true
    // Get COnfig
    clone.col = _config.col
    clone.line = _config.line
    clone.color = _config.color
    // Calculations
    let _coord = game.tools.gridToCoordinate(_config.col,_config.line)
    clone.x = _coord.x
    clone.y = _coord.y
    clone.hColor = game.CONST.hColors.get(_config.color)
}

game.sprites.target.update = function () {
}

game.sprites.target.drawFunction = function (ctx) {
    // Draw Box
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 2
    if (this.isConnected) {
        ctx.fillStyle = game.tools.hsla(this.hColor,100,50,100)
    } else {
        ctx.fillStyle = game.tools.hsla(this.hColor,30,50,100)
    }
    ctx.fillRect(0,0,this.width,this.height)
    ctx.strokeRect(0,0,this.width,this.height)
}