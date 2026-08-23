game.sprites.background.init = function() {
    this.width = mge.game.width
    this.height = mge.game.height
    this.x = mge.game.width / 2
    this.y = mge.game.height / 2
    // Config
    this.maxLength  = 100
    this.lineWidth = 2
    this.isVisible = true
    ////////////////////////////
    // LEVEL 1
    ////////////////////////////
    //
    this.L1Sky01 = this.shapeToPath(this.splitShape([[[0,169],[189,335],[0,384]]]))
    this.L1Sky02 = this.shapeToPath(this.splitShape([[[105,357],[189,335],[192,368]]]))
    this.L1Sky03 = this.shapeToPath(this.splitShape([[[0,0],[0,74],[151,0]]]))
    this.L1Sky04 = this.shapeToPath(this.splitShape([[[252,0],[408,221],[658,107],[572,0]]]))
    this.L1Sky05 = this.shapeToPath(this.splitShape([[[150,0],[113,20],[283,44],[252,0]]]))
    this.L1Sky06 = this.shapeToPath(this.splitShape([[[357,149],[408,221],[387,367],[310,382],[298,268]]]))
    this.L1Sky07 = this.shapeToPath(this.splitShape([[[298,268],[310,382],[255,375],[245,322]]]))
    this.L1Sky08 = this.shapeToPath(this.splitShape([[[536,314],[599,316],[568,297]]]))
    this.L1Sky09 = this.shapeToPath(this.splitShape([[[536,314],[524,355],[564,359],[564,315]]]))
    this.L1Sky10 = this.shapeToPath(this.splitShape([[[565,315],[599,316],[620,365],[572,360]]]))
    this.L1Sky11 = this.shapeToPath(this.splitShape([[[1280,0],[1280,47],[1112,139],[945,0]]]))
    this.L1Sky12 = this.shapeToPath(this.splitShape([[[1112,139],[1090,301],[1023,315],[1002,226],[1062,97]]]))
    this.L1Sky13 = this.shapeToPath(this.splitShape([[[1098,249],[1091,302],[1157,320]]]))
    this.L1Sky14 = this.shapeToPath(this.splitShape([[[752,59],[997,43],[946,0],[778,0]]]))
    this.L1Sky15 = this.shapeToPath(this.splitShape([[[571,0],[707,167],[779,0]]]))
    this.L1Sky16 = this.shapeToPath(this.splitShape([[[739,257],[918,195],[942,333],[773,405]]]))
    this.L1Sky17 = this.shapeToPath(this.splitShape([[[942,333],[771,405],[811,416]]]))
    this.L1Sky18 = this.shapeToPath(this.splitShape([[[932,280],[972,268],[988,323],[942,333]]]))
    this.L1Sky19 = this.shapeToPath(this.splitShape([[[918,195],[966,243],[972,268],[933,280]]]))
    this.L1Sky20 = this.shapeToPath(this.splitShape([[[918,195],[720,135],[687,221],[740,257]]]))
    this.L1Sky21 = this.shapeToPath(this.splitShape([[[658,107],[707,166],[687,221],[575,145]]]))
    this.L1Sky22 = this.shapeToPath(this.splitShape([[[754,59],[864,52],[805,119],[720,135]]]))
    this.L1Sky23 = this.shapeToPath(this.splitShape([[[720,135],[806,118],[835,170]]]))
    //
    this.L1TreeLeft01 = this.shapeToPath(this.splitShape([[[205,469],[188,334],[245,322],[271,462]]]))
    this.L1TreeLeft02 = this.shapeToPath(this.splitShape([[[188,334],[245,322],[196,281],[170,296]]]))
    this.L1TreeLeft03 = this.shapeToPath(this.splitShape([[[148,239],[156,228],[196,281],[171,295]]]))
    this.L1TreeLeft04 = this.shapeToPath(this.splitShape([[[75,189],[156,227],[148,240]]]))
    this.L1TreeLeft05 = this.shapeToPath(this.splitShape([[[130,147],[156,227],[139,218]]]))
    this.L1TreeLeft06 = this.shapeToPath(this.splitShape([[[196,281],[259,202],[219,301]]]))
    this.L1TreeLeft07 = this.shapeToPath(this.splitShape([[[293,212],[242,245],[249,228]]]))
    //
    this.L1TreeLeft08 = this.shapeToPath(this.splitShape([[[112,19],[283,44],[260,200],[130,148]]]))
    this.L1TreeLeft09 = this.shapeToPath(this.splitShape([[[196,281],[155,227],[131,148],[260,200]]]))
    this.L1TreeLeft10 = this.shapeToPath(this.splitShape([[[0,74],[0,170],[137,205],[113,19]]]))
    this.L1TreeLeft11 = this.shapeToPath(this.splitShape([[[76,189],[139,219],[137,205]]]))
    this.L1TreeLeft12 = this.shapeToPath(this.splitShape([[[0,170],[75,189],[149,241],[127,281]]]))
    this.L1TreeLeft13 = this.shapeToPath(this.splitShape([[[148,241],[187,334],[126,280]]]))
    this.L1TreeLeft14 = this.shapeToPath(this.splitShape([[[283,44],[260,201],[323,217],[357,147]]]))
    this.L1TreeLeft15 = this.shapeToPath(this.splitShape([[[250,227],[295,210],[259,201]]]))
    this.L1TreeLeft16 = this.shapeToPath(this.splitShape([[[295,210],[323,217],[297,270],[242,245]]]))
    this.L1TreeLeft17 = this.shapeToPath(this.splitShape([[[242,245],[297,270],[245,321],[219,300]]]))



    
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

game.sprites.background.drawL1 = function(ctx) {
    // SKY
    let h = 200
    let s = 65
    let l = 70     
    this.drawShape(ctx,this.L1Sky01,h,s,l,this.lineWidth,'cyan')
    this.drawShape(ctx,this.L1Sky02,h,s,l,this.lineWidth,'cyan')
    this.drawShape(ctx,this.L1Sky03,h,s,l,this.lineWidth,'cyan')
    this.drawShape(ctx,this.L1Sky04,h,s,l,this.lineWidth,'cyan')
    this.drawShape(ctx,this.L1Sky05,h,s,l,this.lineWidth,'cyan')
    this.drawShape(ctx,this.L1Sky06,h,s,l,this.lineWidth,'cyan')
    this.drawShape(ctx,this.L1Sky07,h,s,l,this.lineWidth,'cyan')
    this.drawShape(ctx,this.L1Sky08,h,s,l,this.lineWidth,'cyan')
    this.drawShape(ctx,this.L1Sky09,h,s,l,this.lineWidth,'cyan')
    this.drawShape(ctx,this.L1Sky10,h,s,l,this.lineWidth,'cyan')
    this.drawShape(ctx,this.L1Sky11,h,s,l,this.lineWidth,'cyan')
    this.drawShape(ctx,this.L1Sky12,h,s,l,this.lineWidth,'cyan')
    this.drawShape(ctx,this.L1Sky13,h,s,l,this.lineWidth,'cyan')
    this.drawShape(ctx,this.L1Sky14,h,s,l,this.lineWidth,'cyan')
    this.drawShape(ctx,this.L1Sky15,h,s,l,this.lineWidth,'cyan')
    this.drawShape(ctx,this.L1Sky16,h,s,l,this.lineWidth,'cyan')
    this.drawShape(ctx,this.L1Sky17,h,s,l,this.lineWidth,'cyan')
    this.drawShape(ctx,this.L1Sky18,h,s,l,this.lineWidth,'cyan')
    this.drawShape(ctx,this.L1Sky19,h,s,l,this.lineWidth,'cyan')
    this.drawShape(ctx,this.L1Sky20,h,s,l,this.lineWidth,'cyan')
    this.drawShape(ctx,this.L1Sky21,h,s,l,this.lineWidth,'cyan')
    this.drawShape(ctx,this.L1Sky22,h,s,l,this.lineWidth,'cyan')
    this.drawShape(ctx,this.L1Sky23,h,s,l,this.lineWidth,'cyan')
    // TREE LEFT
    h = 30
    s = 30
    l = 60
    this.drawShape(ctx,this.L1TreeLeft01,h,s,l,this.lineWidth,'oran')
    this.drawShape(ctx,this.L1TreeLeft02,h,s,l,this.lineWidth,'oran')
    this.drawShape(ctx,this.L1TreeLeft03,h,s,l,this.lineWidth,'oran')
    this.drawShape(ctx,this.L1TreeLeft04,h,s,l,this.lineWidth,'oran')
    this.drawShape(ctx,this.L1TreeLeft05,h,s,l,this.lineWidth,'oran')
    this.drawShape(ctx,this.L1TreeLeft06,h,s,l,this.lineWidth,'oran')
    this.drawShape(ctx,this.L1TreeLeft07,h,s,l,this.lineWidth,'oran')
    h = 115
    s = 50
    l = 50 
    this.drawShape(ctx,this.L1TreeLeft08,h,s,l,this.lineWidth,'gree')
    this.drawShape(ctx,this.L1TreeLeft09,h,s,l,this.lineWidth,'gree')
    this.drawShape(ctx,this.L1TreeLeft10,h,s,l,this.lineWidth,'gree')
    this.drawShape(ctx,this.L1TreeLeft11,h,s,l,this.lineWidth,'gree')
    this.drawShape(ctx,this.L1TreeLeft12,h,s,l,this.lineWidth,'gree')
    this.drawShape(ctx,this.L1TreeLeft13,h,s,l,this.lineWidth,'gree')
    this.drawShape(ctx,this.L1TreeLeft14,h,s,l,this.lineWidth,'gree')
    this.drawShape(ctx,this.L1TreeLeft15,h,s,l,this.lineWidth,'gree')
    this.drawShape(ctx,this.L1TreeLeft16,h,s,l,this.lineWidth,'gree')
    this.drawShape(ctx,this.L1TreeLeft17,h,s,l,this.lineWidth,'gree')
    
}





game.sprites.background.drawFunction = function (ctx) {
    
    this.drawL1(ctx)

}

