game.sprites.component.init = function() {
    this.width = game.CONST.gridCellSize
    this.height = game.CONST.gridCellSize
    this.isVisible = false
    this.drawBoundaries = true
}

game.sprites.component.initClone = function (_type,_col,_line,_config) {
    // Create the clone with basic information
    let clone = this.cloneCreate()
    clone.isVisible = true
    clone.type = _type
    // Get the cell
    clone.cell = [_col,_line]
    // Calculate clone location 
    let _coord = game.tools.gridToCoordinate(_col,_line)
    clone.x = _coord.x
    clone.y = _coord.y
    // Insert clone in the grid
    game.variables.grid[_col][_line] = clone
    // Get color (used only be target and source)
    clone.color = _config.color || 'NC'
    clone.hColor = game.CONST.hColors.get(_config.color)
    // Initialise flag is Reached (used only by target)
    clone.isReached = false
    // Get orientation (not used by target)
    clone.rotation = _config.rotation || 0
    // Create input and output flows
    clone.inputFlows = []
    clone.outputFlows = []
}

game.sprites.component.update = function () {
    if (this.isClicked && this.type != 'target') {
        // Manage rotation
        this.rotation += 90
        if (this.rotation >= 360) {this.rotation = 0}
        // Ask to update system
        game.variables.needToUpdateSystem = true
    }
}

game.sprites.component.updateSystem = function () {
    // SOURCE
    if (this.type == 'source') {
        this.outputFlows = [{startCell:this.cell,color:this.color,direction:this.rotation}]
    }
    // TARGET
    if (this.type == 'target') {
        // No output flows
        this.outputFlows = []
        // Update isReached flag
        this.inputFlows.forEach((_flow) => {
            if(_flow.color == this.color) {this.isReached = true}
        })
    }
    // Return the outputs
    return this.outputFlows
}


game.sprites.component.drawFunction = function (ctx) {
    ctx.save()
    // Manage rotation
    ctx.translate(20, 20)
    ctx.rotate((this.rotation * Math.PI) / 180)
    ctx.translate(-20, -20)
    // TARGET
    if (this.type == 'target') {
        ctx.strokeStyle = 'black'
        ctx.lineWidth = 2
        if (this.isReached) {
            ctx.fillStyle = game.tools.hsla(this.hColor,100,50,100)
        } else {
            ctx.fillStyle = game.tools.hsla(this.hColor,30,50,100)
        }
        ctx.fillRect(0,0,this.width,this.height)
        ctx.strokeRect(0,0,this.width,this.height)
    }
    // SOURCE
    if (this.type == 'source') {
        ctx.strokeStyle = 'black'
        ctx.fillStyle = game.tools.hsla(this.hColor,100,50,100)
        ctx.lineWidth = 2
        ctx.fillRect(0,0,this.width,this.height)
        ctx.strokeRect(0,0,this.width,this.height)
        ctx.strokeRect(25,15,10,10)
    }
    ctx.restore()

}