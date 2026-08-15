//////////////////////
// Start scene 
//////////////////////
game.scenes.main.start = function() {

        // Play the song 
        //mge.sequencer.start()

        // Create clones
        game.sprites.component.initClone('target',16,1,{color:'red'})
        game.sprites.component.initClone('target',16,2,{color:'oran'})
        game.sprites.component.initClone('target',16,3,{color:'yell'})
        game.sprites.component.initClone('target',16,4,{color:'gree'})
        game.sprites.component.initClone('target',16,5,{color:'cyan'})
        game.sprites.component.initClone('target',16,6,{color:'blue'})
        game.sprites.component.initClone('target',16,7,{color:'mage'})
}

//////////////////////
// Update scene
//////////////////////
game.scenes.main.update = function() {

}

//////////////////////
// Draw scene
//////////////////////
game.scenes.main.draw = function() {

        ///////////////////////////////////
        // TO REMOVE - GRID DEBUG
        ///////////////////////////////////
        //let ctx = mge.game.context 
        let ctx = mge._canvas._renderContext
        ctx.strokeStyle = 'black'
        ctx.lineWidth = 1
        let gridCellSize = game.CONST.gridCellSize
        let nbCols = mge.game.width / gridCellSize
        let nbLines = mge.game.height / gridCellSize
        for (let col = 0; col < nbCols; col++) {
                for (let line = 0; line < nbLines; line++) {
                        ctx.strokeRect(col*gridCellSize,line*gridCellSize,gridCellSize,gridCellSize)
                }
        }
        ///////////////////////////////////
        ///////////////////////////////////

        game.sprites.component.cloneExecuteForEach('draw')

}