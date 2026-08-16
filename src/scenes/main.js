//////////////////////
// Start scene 
//////////////////////
game.scenes.main.start = function() {

        // Play the song 
        //mge.sequencer.start()

        // Load level
        game.loadLevelPart(0,0)
}

//////////////////////
// Update scene
//////////////////////
game.scenes.main.update = function() {
        // Check if the user has clicked on an object
        game.sprites.component.cloneExecuteForEach('update')
        // If yes, update the system and check if part or level is completed
        if (game.variables.needToUpdateSystem) {
                game.system.update()
                // if level completed, load the next one
                if (game.checkLevelCompleted()) {
                        game.loadLevelPart(game.variables.curLevel+1,0)
                } else {
                        // if part of the level completes, load the next one
                        if (game.checkPartCompleted()) {game.loadLevelPart(game.variables.curLevel,game.variables.curLevelPart+1) }
                }
        }
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
        let nbCols = game.CONST.gridNbCols
        let nbLines =game.CONST.gridNbLines
        for (let col = 0; col < nbCols; col++) {
                for (let line = 0; line < nbLines; line++) {
                        ctx.strokeRect(col*gridCellSize,line*gridCellSize,gridCellSize,gridCellSize)
                        ctx.font = '12px serif'
                        ctx.fillText (col+','+line,col*gridCellSize+8,line*gridCellSize+12)
                }
        }
        ///////////////////////////////////
        ///////////////////////////////////

        game.sprites.ray.cloneExecuteForEach('draw')
        game.sprites.component.cloneExecuteForEach('draw')
        game.sprites.rainbow.draw()

}