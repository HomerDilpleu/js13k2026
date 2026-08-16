game.sprites.rainbow.init = function() {
    this.width = mge.game.width
    this.height = mge.game.height
    this.x = mge.game.width / 2
    this.y = mge.game.height / 2
    this.isVisible = true
}

game.sprites.rainbow.drawFunction = function (ctx) {
    ctx.save()
    if (game.variables.colorIsReached.red) {
        ctx.lineWidth = 40
        ctx.strokeStyle = game.tools.hsla(game.CONST.hColors.get('red'),100,50,20)
        ctx.beginPath()
        ctx.arc(mge.game.width / 2, mge.game.height, 660, 0, 2 * Math.PI)
        ctx.stroke()
    }
    if (game.variables.colorIsReached.oran) {
        ctx.lineWidth = 40
        ctx.strokeStyle = game.tools.hsla(game.CONST.hColors.get('oran'),100,50,20)
        ctx.beginPath()
        ctx.arc(mge.game.width / 2, mge.game.height, 620, 0, 2 * Math.PI)
        ctx.stroke()
    }
    if (game.variables.colorIsReached.yell) {
        ctx.lineWidth = 40
        ctx.strokeStyle = game.tools.hsla(game.CONST.hColors.get('yell'),100,50,20)
        ctx.beginPath()
        ctx.arc(mge.game.width / 2, mge.game.height, 580, 0, 2 * Math.PI)
        ctx.stroke()
    }
    if (game.variables.colorIsReached.gree) {
        ctx.lineWidth = 40
        ctx.strokeStyle = game.tools.hsla(game.CONST.hColors.get('gree'),100,50,20)
        ctx.beginPath()
        ctx.arc(mge.game.width / 2, mge.game.height, 540, 0, 2 * Math.PI)
        ctx.stroke()
    }
    if (game.variables.colorIsReached.cyan) {
        ctx.lineWidth = 40
        ctx.strokeStyle = game.tools.hsla(game.CONST.hColors.get('cyan'),100,50,20)
        ctx.beginPath()
        ctx.arc(mge.game.width / 2, mge.game.height, 500, 0, 2 * Math.PI)
        ctx.stroke()
    }
    if (game.variables.colorIsReached.blue) {
        ctx.lineWidth = 40
        ctx.strokeStyle = game.tools.hsla(game.CONST.hColors.get('blue'),100,50,20)
        ctx.beginPath()
        ctx.arc(mge.game.width / 2, mge.game.height, 460, 0, 2 * Math.PI)
        ctx.stroke()
    }
    if (game.variables.colorIsReached.mage) {
        ctx.lineWidth = 40
        ctx.strokeStyle = game.tools.hsla(game.CONST.hColors.get('mage'),100,50,20)
        ctx.beginPath()
        ctx.arc(mge.game.width / 2, mge.game.height, 420, 0, 2 * Math.PI)
        ctx.stroke()
    }

    ctx.restore()
}