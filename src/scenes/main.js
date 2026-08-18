//////////////////////
// Start scene 
//////////////////////
game.scenes.main.start = function() {

        // Play the song 
        //mge.sequencer.start()

        // Load level
        game.loadLevelPart(0,0)

        // Update game state
        game.variables.gameState = 'running'
}

//////////////////////
// Update scene
//////////////////////
game.scenes.main.update = function() {
        ///////////////////////////
        // GameState: running
        ///////////////////////////
        if (game.variables.gameState == 'running') {
                // Take into account clicks on components
                game.sprites.component.cloneExecuteForEach('update')
                // Update the system
                game.system.update()
                // Check level
                if (game.checkLevelCompleted()) {
                        game.variables.gameState='levelCompleted'
                } else {
                        // Check part of level
                        if (game.checkPartCompleted()) {
                                game.variables.gameState='partCompleted'
                                game.timers.partCompleted.start()
                        }
                }
        }
        ///////////////////////////
        // GameState: partCompleted
        ///////////////////////////
        if (game.variables.gameState == 'partCompleted') {
                // Update timer
                game.timers.partCompleted.update()
                // Load next part if timer is finished
                if (game.timers.partCompleted.progress == 1) {                        
                        game.loadLevelPart(game.variables.curLevel,game.variables.curLevelPart+1)
                        game.variables.gameState='running'
                }
        }
        ///////////////////////////
        // GameState: partCompleted
        ///////////////////////////
        if (game.variables.gameState == 'levelCompleted') {
                // Load next level
                game.loadLevelPart(game.variables.curLevel+1,0)
                game.variables.gameState='running'
        }
        ///////////////////////////
        // Always
        ///////////////////////////
        // Update rays
        game.sprites.ray.cloneExecuteForEach('update')
}

//////////////////////
// Draw scene
//////////////////////
game.scenes.main.draw = function() {

        ///////////////////////////////////
        // TO REMOVE - GRID DEBUG
        ///////////////////////////////////
        //let ctx = mge.game.context 
 /*       let ctx = mge._canvas._renderContext
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
        }*/
        ///////////////////////////////////
        ///////////////////////////////////

        game.sprites.rainbow.draw()
        game.sprites.ray.cloneExecuteForEach('draw')
        game.sprites.component.cloneExecuteForEach('draw')

}