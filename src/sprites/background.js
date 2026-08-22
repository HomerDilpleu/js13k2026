game.sprites.background.init = function() {
    this.width = mge.game.width
    this.height = mge.game.height
    this.x = mge.game.width / 2
    this.y = mge.game.height / 2
    // Config
    this.maxLength  = 100
    this.lineWidth = 4
    this.isVisible = true
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
    let i = 0
    _piecesList.forEach((_piece) => {
        this.drawPiece(ctx, _piece, h, s+i%20, l+i%20, _lineWidth, _affinity)
        i+=4
       } 
    )
}

game.sprites.background.pieceToPath = function (_piece) {
    let _piecePath = new Path2D()
    let i=0
    _piece.forEach((_point) => {
        if(i==0){
            _piecePath.moveTo(_point[0],_point[1])
        } else {
            _piecePath.lineTo(_point[0],_point[1])
        }
        i+=1
       } 
    )
    _piecePath.closePath()  
    return _piecePath
}

game.sprites.background.shapeToPath = function (_shape) {
    let result = []
    _shape.forEach((_piece) => {
        result.push(this.pieceToPath(_piece))
    } 
    )
    return result
}

game.sprites.background.splitPiece = function(_piece) {
    let maxLength2 = this.maxLength * this.maxLength 
    let _result = []
    // Triangle
    if (_piece.length == 3) {
        // Calculate characteristics of the triangle
        let Ax = _piece[0][0]
        let Ay = _piece[0][1]
        let Bx = _piece[1][0]
        let By = _piece[1][1]
        let Cx = _piece[2][0]
        let Cy = _piece[2][1]
        let AB = (Bx-Ax)*(Bx-Ax)+(By-Ay)*(By-Ay)
        let AC = (Cx-Ax)*(Cx-Ax)+(Cy-Ay)*(Cy-Ay)
        let BC = (Cx-Bx)*(Cx-Bx)+(Cy-By)*(Cy-By)
        // If small triangle
        if (AB <= maxLength2 && AC <= maxLength2 && BC <= maxLength2) {
            _result.push(_piece)
        } else {
            if (AB >= AC && AB >= BC) {
                _result.push([[(2*Bx+Ax)/3,(2*By+Ay)/3],_piece[1],_piece[2]])
                _result.push([[(2*Bx+Ax)/3,(2*By+Ay)/3],_piece[2],_piece[0]])
            } else if (AC >= AB && AC >= BC) {
                _result.push([[(2*Cx+Ax)/3,(2*Cy+Ay)/3],_piece[0],_piece[1]])
                _result.push([[(2*Cx+Ax)/3,(2*Cy+Ay)/3],_piece[2],_piece[1]])
            } else {
                _result.push([[(2*Cx+Bx)/3,(2*Cy+By)/3],_piece[0],_piece[2]])
                _result.push([[(2*Cx+Bx)/3,(2*Cy+By)/3],_piece[0],_piece[1]])
            }
        }
    } else {
        _result.push([_piece[1],_piece[2],_piece[3]])
        _result.push([_piece[1],_piece[3],..._piece.slice(4),_piece[0]])
    }
    return _result
}

game.sprites.background.splitShape = function(_shape) {
    let _newShape = []
    _shape.forEach((_piece) => {
        _newShape.push(...this.splitPiece(_piece))
    } 
    )
    if(_newShape.length == _shape.length) {
        return _newShape
    } else {
        return game.sprites.background.splitShape (_newShape)
    }
}





game.sprites.background.drawFunction = function (ctx) {
    ctx.lineWidth = 2
    ctx.strokeStyle = "black"

    let h = 200
    let s = 65
    let l = 70  

    // A mettre dans le init
    let testShape = [[[100,100],[200,50],[500,100],[600,300],[500,500],[300,600],[100,500],[10,300]]]
    let testSplitShape = this.splitShape(testShape)
    let testSplitShapePaths = this.shapeToPath(testSplitShape)

    // Render
    this.drawShape(ctx,testSplitShapePaths,h,s,l,this.lineWidth,'gree')


}

