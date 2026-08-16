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
    // MIRROR
    if (this.type == 'mirror') {
        // If has no input
        if (this.inputFlows.length <1) {
            this.outputFlows = []
        } else {
            // Calculate output flow for each input
            this.inputFlows.forEach((_flow) => {
                let _flowDirection = 'x'
                // Input flow going left
                if (_flow.direction == 0 && this.rotation == 180) {_flowDirection = 90}
                if (_flow.direction == 0 && this.rotation == 270) {_flowDirection = 270}
                // Input flow going down
                if (_flow.direction == 90 && this.rotation == 0) {_flowDirection = 0}
                if (_flow.direction == 90 && this.rotation == 270) {_flowDirection = 180}
                // Input flow going right
                if (_flow.direction == 180 && this.rotation == 0) {_flowDirection = 270}
                if (_flow.direction == 180 && this.rotation == 90) {_flowDirection = 90}
                // Input flow going up
                if (_flow.direction == 270 && this.rotation == 90) {_flowDirection = 0}
                if (_flow.direction == 270 && this.rotation == 180) {_flowDirection = 180}
                // Add the flow if has a valid direction
                if (_flowDirection != 'x') {
                    this.outputFlows.push({startCell:this.cell,color:_flow.color,direction:_flowDirection})
                }
            })
        }
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
    // MIRROR
    if (this.type == 'mirror') {
        ctx.strokeStyle = 'black'
        ctx.fillStyle = 'grey'
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(0,0)
        ctx.lineTo(40,40)
        ctx.lineTo(0,40)
        ctx.closePath()
        ctx.stroke()
        ctx.fill()
    }
    ctx.restore()

}