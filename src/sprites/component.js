game.sprites.component.init = function() {
    this.width = game.CONST.gridCellSize
    this.height = game.CONST.gridCellSize
    this.isVisible = false
}

game.sprites.component.initClone = function (_type,_col,_line,_config) {
    ////////////////////////////////
    // For all types of component
    ////////////////////////////////
    let clone = this.cloneCreate()
    clone.isVisible = true
    clone.type = _type
    let _coord = game.tools.gridToCoordinate(_col,_line)
    clone.x = _coord.x
    clone.y = _coord.y
    game.variables.grid[_col][_line] = clone
    ////////////////////////////////
    // Targets only
    ////////////////////////////////
    if (_type == 'target') {
        clone.isConnected = false
        clone.color = _config.color
        clone.hColor = game.CONST.hColors.get(_config.color)
    }
}

game.sprites.component.update = function () {
}

game.sprites.component.drawFunction = function (ctx) {
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