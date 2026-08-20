game.sprites.background.init = function() {
    this.width = mge.game.width
    this.height = mge.game.height
    this.x = mge.game.width / 2
    this.y = mge.game.height / 2
    this.isVisible = true

    this.bottomTree1a = [[50,200],[61,177],[77,166],[91,200]]
    this.bottomTree1b = [[61,177],[62,134],[50,114],[81,113],[77,166]]

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

game.sprites.background.drawPiece = function (ctx, _path, _color, _lineWidth) {
    ctx.fillStyle = _color
    ctx.strokeStyle = 'black'
    ctx.lineWidth = _lineWidth
    ctx.lineJoin = 'round'
    ctx.fill(_path)
    ctx.stroke(_path)
}

game.sprites.background.drawShape = function (ctx, _piecesList, _color, _lineWidth) {
    _piecesList.forEach((_piece) => {
        this.drawPiece(ctx, _piece, _color, _lineWidth)
       } 
    )
}

game.sprites.background.drawTree = function (ctx, x, y, _xScale, _yScale) {
    let _lineWidth = 5
    ctx.save()
    ctx.translate(x,y)
    ctx.scale(_xScale,_yScale)
    this.drawShape(ctx, this.createStainedGlass(this.bottomTree1a,70,180), 'hsl(30,30%,40%)', _lineWidth / Math.abs(_xScale))
    this.drawShape(ctx, this.createStainedGlass(this.bottomTree1b,70,130), 'hsl(30,30%,40%)', _lineWidth / Math.abs(_xScale))
    ctx.restore()
}

game.sprites.background.drawFunction = function (ctx) {
    this.drawTree(ctx,0,0,3,3)
    this.drawTree(ctx,600,100,-2,2)
}



/*
TREE 1
{"format":"mge-pathdrawer-project","version":2,"width":300,"height":400,"frames":[{"paths":[{"points":[{"type":"M","x":126,"y":400},{"type":"L","x":98,"y":215},{"type":"L","x":50,"y":168},{"type":"L","x":23,"y":161},{"type":"L","x":27,"y":156},{"type":"L","x":46,"y":160},{"type":"L","x":46,"y":138},{"type":"L","x":52,"y":138},{"type":"L","x":55,"y":162},{"type":"L","x":97,"y":204},{"type":"L","x":88,"y":109},{"type":"L","x":70,"y":87},{"type":"L","x":76,"y":82},{"type":"L","x":87,"y":97},{"type":"L","x":92,"y":70},{"type":"L","x":101,"y":72},{"type":"L","x":101,"y":135},{"type":"L","x":149,"y":61},{"type":"L","x":157,"y":65},{"type":"L","x":105,"y":151},{"type":"L","x":113,"y":181},{"type":"L","x":188,"y":128},{"type":"L","x":177,"y":92},{"type":"L","x":184,"y":91},{"type":"L","x":194,"y":118},{"type":"L","x":212,"y":80},{"type":"L","x":219,"y":82},{"type":"L","x":197,"y":131},{"type":"L","x":115,"y":194},{"type":"L","x":145,"y":400},{"type":"Z"}],"fill":"#986a44","stroke":"#986a44","strokeWidth":1.5},{"points":[{"type":"M","x":17,"y":169},{"type":"L","x":67,"y":132},{"type":"L","x":83,"y":80},{"type":"L","x":145,"y":95},{"type":"L","x":250,"y":79},{"type":"L","x":263,"y":39},{"type":"L","x":200,"y":3},{"type":"L","x":106,"y":19},{"type":"L","x":85,"y":8},{"type":"L","x":12,"y":20},{"type":"L","x":31,"y":84},{"type":"L","x":6,"y":122}],"fill":"#8ff0a4","stroke":"#8ff0a4","strokeWidth":1.5},{"points":[{"type":"M","x":39,"y":154},{"type":"L","x":67,"y":132},{"type":"L","x":83,"y":82},{"type":"L","x":143,"y":96},{"type":"L","x":233,"y":82},{"type":"L","x":225,"y":62},{"type":"L","x":153,"y":49},{"type":"L","x":84,"y":67},{"type":"L","x":58,"y":66},{"type":"L","x":55,"y":101},{"type":"L","x":27,"y":130}],"fill":"#26a269","stroke":"#26a269","strokeWidth":1.5}]}]}

TREE 2
{"format":"mge-pathdrawer-project","version":2,"width":800,"height":600,"frames":[{"paths":[{"points":[{"type":"M","x":286,"y":599},{"type":"L","x":306,"y":571},{"type":"L","x":321,"y":389},{"type":"L","x":353,"y":388},{"type":"L","x":366,"y":449},{"type":"L","x":382,"y":454},{"type":"L","x":407,"y":380},{"type":"L","x":391,"y":444},{"type":"L","x":423,"y":385},{"type":"L","x":397,"y":456},{"type":"L","x":391,"y":568},{"type":"L","x":420,"y":599}],"fill":"#b5835a","stroke":"#ffffff","strokeWidth":1},{"points":[{"type":"M","x":318,"y":413},{"type":"L","x":273,"y":372},{"type":"L","x":273,"y":297},{"type":"L","x":301,"y":253},{"type":"L","x":294,"y":176},{"type":"L","x":322,"y":84},{"type":"L","x":373,"y":59},{"type":"L","x":429,"y":73},{"type":"L","x":446,"y":160},{"type":"L","x":468,"y":258},{"type":"L","x":443,"y":312},{"type":"L","x":441,"y":403},{"type":"L","x":369,"y":382},{"type":"L","x":356,"y":398}],"fill":"#8ff0a4","stroke":"#ffffff","strokeWidth":1},{"points":[{"type":"M","x":315,"y":414},{"type":"L","x":274,"y":371},{"type":"L","x":271,"y":296},{"type":"L","x":302,"y":253},{"type":"L","x":291,"y":176},{"type":"L","x":321,"y":83},{"type":"L","x":371,"y":58},{"type":"L","x":431,"y":73},{"type":"L","x":470,"y":259},{"type":"L","x":446,"y":310},{"type":"L","x":441,"y":404},{"type":"L","x":370,"y":383},{"type":"L","x":323,"y":400},{"type":"L","x":366,"y":362},{"type":"L","x":420,"y":367},{"type":"L","x":424,"y":305},{"type":"L","x":448,"y":252},{"type":"L","x":409,"y":90},{"type":"L","x":368,"y":84},{"type":"L","x":339,"y":98},{"type":"L","x":316,"y":177},{"type":"L","x":321,"y":253},{"type":"L","x":293,"y":303},{"type":"L","x":288,"y":364},{"type":"L","x":321,"y":399}],"fill":"#26a269","stroke":"#ffffff","strokeWidth":0.5}]}]}

VITRAIL ARBRE BAS 1 
{"format":"mge-pathdrawer-project","version":2,"width":150,"height":200,"frames":[{"paths":[{"points":[{"type":"M","x":50,"y":200},{"type":"L","x":61,"y":177},{"type":"L","x":62,"y":134},{"type":"L","x":50,"y":114},{"type":"L","x":81,"y":113},{"type":"L","x":77,"y":166},{"type":"L","x":91,"y":200}],"fill":"transparent","stroke":"#ffffff","strokeWidth":1.5},{"points":[{"type":"M","x":50,"y":200},{"type":"L","x":61,"y":177},{"type":"L","x":73,"y":196},{"type":"Z"}],"fill":"transparent","stroke":"#ed333b","strokeWidth":0.5},{"points":[{"type":"M","x":61,"y":177},{"type":"L","x":73,"y":196},{"type":"L","x":83,"y":180},{"type":"Z"},{"type":"Z"}],"fill":"transparent","stroke":"#57e389","strokeWidth":0.5},{"points":[{"type":"M","x":73,"y":196},{"type":"L","x":83,"y":180},{"type":"L","x":91,"y":200},{"type":"Z"}],"fill":"transparent","stroke":"#c061cb","strokeWidth":0.5},{"points":[{"type":"M","x":61,"y":177},{"type":"L","x":62,"y":155},{"type":"L","x":77,"y":166},{"type":"L","x":83,"y":180},{"type":"Z"}],"fill":"transparent","stroke":"#ff7800","strokeWidth":0.5},{"points":[{"type":"M","x":77,"y":166},{"type":"L","x":79,"y":141},{"type":"L","x":62,"y":140},{"type":"L","x":62,"y":155},{"type":"Z"}],"fill":"transparent","stroke":"#e01b24","strokeWidth":0.5},{"points":[{"type":"M","x":62,"y":140},{"type":"L","x":62,"y":134},{"type":"L","x":81,"y":113},{"type":"L","x":79,"y":141},{"type":"Z"},{"type":"Z"}],"fill":"transparent","stroke":"#2ec27e","strokeWidth":0.5},{"points":[{"type":"M","x":62,"y":134},{"type":"L","x":50,"y":114},{"type":"L","x":81,"y":113},{"type":"Z"}],"fill":"transparent","stroke":"#9141ac","strokeWidth":0.5}]}]}
*/

