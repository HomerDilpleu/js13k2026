//////////////////////
// Start scene 
//////////////////////
game.scenes.main.start = function() {

        // Play the song 
        //mge.sequencer.start()

        // Create clones
        // Targets
        game.sprites.component.initClone('target',16,1,{color:'red'})
        game.sprites.component.initClone('target',16,2,{color:'oran'})
        game.sprites.component.initClone('target',16,3,{color:'yell'})
        game.sprites.component.initClone('target',16,4,{color:'gree'})
        game.sprites.component.initClone('target',16,5,{color:'cyan'})
        game.sprites.component.initClone('target',16,6,{color:'blue'})
        game.sprites.component.initClone('target',16,7,{color:'mage'})
        // Sources
        game.sprites.component.initClone('source',13,1,{color:'red',rotation:0})
        game.sprites.component.initClone('source',19,2,{color:'oran',rotation:90})
        game.sprites.component.initClone('source',13,3,{color:'yell',rotation:180})
        game.sprites.component.initClone('source',19,4,{color:'gree',rotation:270})
        game.sprites.component.initClone('source',13,5,{color:'cyan',rotation:90})
        game.sprites.component.initClone('source',19,6,{color:'blue',rotation:180})
        game.sprites.component.initClone('source',13,7,{color:'mage',rotation:0})
}

//////////////////////
// Update scene
//////////////////////
game.scenes.main.update = function() {

        game.sprites.component.cloneExecuteForEach('update')

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