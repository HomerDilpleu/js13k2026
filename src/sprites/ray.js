game.sprites.ray.init = function() {
    this.width = mge.game.width
    this.height = mge.game.height
    this.x = mge.game.width / 2
    this.y = mge.game.height / 2
    this.isVisible = false
}

game.sprites.ray.initClone = function (_startCell,_endCell,_color) {
    // Create the clone with given information
    let clone = this.cloneCreate()
    this.isVisible = true
    clone.startCell = _startCell
    clone.endCell = _endCell
    clone.color = _color
    // Calculate hColor
    clone.hColor = game.CONST.hColors.get(_color)
    // Calculate start and end points
    let _start = game.tools.gridToCoordinate(_startCell[0],_startCell[1])
    clone.startX = _start.x
    clone.startY = _start.y
    let _end = game.tools.gridToCoordinate(_endCell[0],_endCell[1])
    clone.endX = _end.x
    clone.endY = _end.y
    // Various
    clone.isAlive = true
    clone.deadTimer = mge.game.createTimer(200 ,'X')
}

game.sprites.ray.update = function () {
    // If clone is alive, reset timer
    if(this.isAlive) {
        this.deadTimer.start()
    } else {
        // Delete the clone if needed
        this.deadTimer.update()
        if (this.deadTimer.progress == 1) {this.cloneDelete()}
    }
    // By default ray is not alive
    this.isAlive = false
}

game.sprites.ray.drawFunction = function (ctx) {
    ctx.save()
    //
    ctx.lineCap = 'round'
    ctx.lineWidth = 8
    ctx.strokeStyle = game.tools.hsla(this.hColor,100,50,100)
    // Path
    ctx.beginPath()
    ctx.moveTo(this.startX, this.startY)
    ctx.lineTo(this.endX, this.endY)
    ctx.stroke()
    ctx.lineWidth = 20
    ctx.strokeStyle = game.tools.hsla(this.hColor,100,50,20)
    // Path
    ctx.beginPath()
    ctx.moveTo(this.startX, this.startY)
    ctx.lineTo(this.endX, this.endY)
    ctx.stroke()
    //
    ctx.restore()
}