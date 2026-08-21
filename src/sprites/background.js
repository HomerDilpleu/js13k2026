game.sprites.background.init = function() {
    this.width = mge.game.width
    this.height = mge.game.height
    this.x = mge.game.width / 2
    this.y = mge.game.height / 2
    this.lineWidth = 4
    this.isVisible = true
    // Tree
    this.bottomTree1a = [[50,200],[61,177],[77,166],[91,200]]
    this.bottomTree1b = [[61,177],[62,134],[50,114],[81,113],[77,166]]
    this.upTree1 = [[50,114],[30,85],[62,97],[93,60],[81,113]]
    this.leavesTree1a = [[52,118],[28,115],[5,67],[35,38],[63,69]]
    this.leavesTree1b = [[35,38],[63,69],[52,118],[107,110],[115,71],[101,42],[74,31]]
    // Bkg
    this.bkg1 = [[0,0],[0,357],[325,255],[279,0]]
    this.bkg2 = [[0,357],[324,255],[280,0],[594,101],[631,430],[320,478]]
    this.bkg3 = [[279,0],[594,102],[631,429],[876,190],[764,0]]
    this.bkg4 = [[764,0],[1200,0],[1200,497],[630,430],[875,189]]
    this.bkg5 = [[0,356],[320,478],[632,430],[464,612],[495,720],[0,720]]
    this.bkg6 = [[631,430],[463,612],[495,720],[1200,720],[1200,497]]
}

game.sprites.background.createStainedGlass = function (points, cx, cy) {
    let _totalPoints = points.length
    let _pieces = []
    for (let i = 0; i < _totalPoints; i++) {
        let _piecePath = new Path2D()
        // Current point and next point
        let p1 = points[i]
        let p2 = points[(i + 1) % _totalPoints]
        // Triangle
        _piecePath.moveTo(cx, cy)
        _piecePath.lineTo(p1[0], p1[1])
        _piecePath.lineTo(p2[0], p2[1])
        _piecePath.closePath()
        _pieces.push(_piecePath)
    }
    return _pieces
}

game.sprites.background.drawPiece = function (ctx, _path, h, s, l, _lineWidth, _affinity) {
    // Get the progress of the timer of the affinity
    let _timerProgress = game.timers[_affinity].progress
    // Calculate color depending of timer progress
    if (_timerProgress == 0) {
        // grey
        ctx.fillStyle = game.tools.hsla(0,0,90,100)
        ctx.strokeStyle = game.tools.hsla(0,0,50,100)
    } else if ((_timerProgress <= 0.2)) {
        ctx.fillStyle = game.tools.hsla(0,0,Math.min(100,80 + 200*_timerProgress),100)
        ctx.strokeStyle = game.tools.hsla(0,0,80,100)
    } else if ((_timerProgress <= 1)) {
        ctx.fillStyle = game.tools.hsla(h,s*_timerProgress,l+(100-l)*(1-_timerProgress),100)
        ctx.strokeStyle = game.tools.hsla(0,0,0,100)
    }
    // Draw
    ctx.lineWidth = _lineWidth
    ctx.lineJoin = 'round'
    ctx.fill(_path)
    ctx.stroke(_path)
}

game.sprites.background.drawShape = function (ctx, _piecesList, h, s, l, _lineWidth, _affinity) {
    i = 0
    _piecesList.forEach((_piece) => {
        this.drawPiece(ctx, _piece, h, s+i, l+i, _lineWidth, _affinity)
        i+=4
       } 
    )
}

game.sprites.background.drawTree = function (ctx, x, y, _xScale, _yScale) {
    ctx.save()
    ctx.translate(x,y)
    ctx.scale(_xScale,_yScale)
    // Leaves
    let h = 115
    let s = 50
    let l = 50 
    this.drawShape(ctx, this.createStainedGlass(this.leavesTree1a,30,85), h, s, l, this.lineWidth / Math.abs(_xScale),'gree')
    this.drawShape(ctx, this.createStainedGlass(this.leavesTree1b,93,60), h, s, l, this.lineWidth / Math.abs(_xScale),'gree')
    // Branches
    h = 30
    s = 30
    l = 60 
    this.drawShape(ctx, this.createStainedGlass(this.bottomTree1a,70,180), h, s, l, this.lineWidth / Math.abs(_xScale),'oran')
    this.drawShape(ctx, this.createStainedGlass(this.bottomTree1b,70,130), h, s, l, this.lineWidth / Math.abs(_xScale),'oran')
    this.drawShape(ctx, this.createStainedGlass(this.upTree1,65,105), h, s, l, this.lineWidth / Math.abs(_xScale),'oran')
    ctx.restore()
}

game.sprites.background.drawSky = function (ctx, x, y, _xScale, _yScale) {
    ctx.save()
    ctx.translate(x,y)
    ctx.scale(_xScale,_yScale)
    let h = 200
    let s = 65
    let l = 70  
    this.drawShape(ctx, this.createStainedGlass(this.bkg1,150,150), h, s, l, this.lineWidth / Math.abs(_xScale),'cyan')
    this.drawShape(ctx, this.createStainedGlass(this.bkg2,450,300), h, s, l, this.lineWidth / Math.abs(_xScale),'cyan')
    this.drawShape(ctx, this.createStainedGlass(this.bkg3,730,150), h, s, l, this.lineWidth / Math.abs(_xScale),'cyan')
    this.drawShape(ctx, this.createStainedGlass(this.bkg4,1050,220), h, s, l, this.lineWidth / Math.abs(_xScale),'cyan')
    this.drawShape(ctx, this.createStainedGlass(this.bkg5,240,580), h, s, l, this.lineWidth / Math.abs(_xScale),'cyan')
    this.drawShape(ctx, this.createStainedGlass(this.bkg6,900,600), h, s, l, this.lineWidth / Math.abs(_xScale),'cyan')
    ctx.restore()
}

game.sprites.background.drawFunction = function (ctx) {
    this.drawSky(ctx,0,0,1,1)
    this.drawTree(ctx,0,0,3,3)
    this.drawTree(ctx,1200,0,-3,3)
}

