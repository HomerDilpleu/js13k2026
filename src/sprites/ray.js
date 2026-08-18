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
    // Timer for life duration
    clone.lifeTimer = mge.game.createTimer(600,'X')
}

game.sprites.ray.update = function () {
    // Update life timer
    this.lifeTimer.update()
    // If timer finished, delete the clone
    if (this.lifeTimer.progress == 1){this.cloneDelete()}
}

game.sprites.ray.drawFunction = function (ctx) {
    ctx.save()
    // Display
    //let alpha = 0
    if (this.lifeTimer.progress < 0.5) {
        alpha = this.lifeTimer.progress*100
    } else {
        alpha = 10*(1-this.lifeTimer.progress)
    }
    ctx.lineWidth = 8
    ctx.strokeStyle = game.tools.hsla(this.hColor,100,50,alpha)
    // Path
    ctx.beginPath()
    ctx.moveTo(this.startX, this.startY)
    ctx.lineTo(this.endX, this.endY)
    ctx.stroke()
    //
    ctx.lineWidth = 2
    ctx.strokeStyle = game.tools.hsla(this.hColor,100,95,alpha)
    ctx.beginPath()
    ctx.moveTo(this.startX, this.startY)
    ctx.lineTo(this.endX, this.endY)
    ctx.stroke()
    //
    ctx.restore()
}