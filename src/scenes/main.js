//////////////////////
// Start scene 
//////////////////////
game.scenes.main.start = function() {

        // Play the song 
        //mge.sequencer.start()

        // Init grid
        game.variables.grid = Array.from({length: game.CONST.gridNbCols}, () => Array(game.CONST.gridNbLines).fill(''))

        // Create clones
        // Targets
        game.sprites.component.initClone('target',16,1,'red',0)
        game.sprites.component.initClone('target',16,2,'oran',0)
        game.sprites.component.initClone('target',16,3,'yell',0)
        game.sprites.component.initClone('target',16,4,'gree',0)
        game.sprites.component.initClone('target',16,5,'cyan',0)
        game.sprites.component.initClone('target',16,6,'blue',0)
        game.sprites.component.initClone('target',16,7,'mage',0)

        //////////////////////////
        // Sources tests uitaires
        //////////////////////////
        // Sources
        game.sprites.component.initClone('source',13,1,'red',0)
        game.sprites.component.initClone('source',19,2,'oran',90)
        game.sprites.component.initClone('source',13,3,'yell',180)
        game.sprites.component.initClone('source',19,4,'gree',270)
        game.sprites.component.initClone('source',13,5,'cyan',90)
        game.sprites.component.initClone('source',19,6,'blue',180)
        game.sprites.component.initClone('source',13,7,'mage',0)

/*
        //////////////////////////
        // Mirroirs test unitaires
        //////////////////////////
       // Sources
        game.sprites.component.initClone('source',12,5,'yell',270)
        // Mixers
        game.sprites.component.initClone('mirror',12,3,'x',0)
        game.sprites.component.initClone('mirror',14,5,'x',0)
        game.sprites.component.initClone('mirror',12,7,'x',0)
        game.sprites.component.initClone('mirror',10,5,'x',0)
*/
/*
        //////////////////////////
        // Mirroirs test complexe
        //////////////////////////
       // Sources
        game.sprites.component.initClone('source',12,4,'red',0)
        game.sprites.component.initClone('source',20,6,'gree',270)
        game.sprites.component.initClone('source',15,9,'blue',180)
        // Mirrors
        game.sprites.component.initClone('mirror',12,1,'x',0)
        game.sprites.component.initClone('mirror',20,4,'x',0)
        game.sprites.component.initClone('mirror',12,9,'x',0)
        game.sprites.component.initClone('mirror',12,6,'x',0)
*/
/*
        //////////////////////////
        // Spliter test unitaires
        //////////////////////////
       // Sources
        game.sprites.component.initClone('source',12,5,'yell',270)
        // Mixers
        game.sprites.component.initClone('mixer',12,3,'x',0)
        game.sprites.component.initClone('mixer',14,5,'x',0)
        game.sprites.component.initClone('mixer',12,7,'x',0)
        game.sprites.component.initClone('mixer',10,5,'x',0)
*/
/*
        //////////////////////////
        // Spliter test complexe
        //////////////////////////
       // Sources
        game.sprites.component.initClone('source',12,8,'yell',270)
        // Mixers
        game.sprites.component.initClone('mixer',14,3,'x',180)
        game.sprites.component.initClone('mixer',14,5,'x',90)
        game.sprites.component.initClone('mixer',14,8,'x',0)
*/
/*
        //////////////////////////
        // Mixer test unitaires
        //////////////////////////
       // Sources
        game.sprites.component.initClone('source',13,5,'yell',270)
        game.sprites.component.initClone('source',7,5,'red',270)
        game.sprites.component.initClone('source',10,2,'blue',270)
        game.sprites.component.initClone('source',10,8,'blue',90)
        // Mixers
        game.sprites.component.initClone('mixer',10,5,'x',0)
*/
        // Force system update
        game.system.update()

}

//////////////////////
// Update scene
//////////////////////
game.scenes.main.update = function() {
        // Check if the user has clicked on an object
        game.sprites.component.cloneExecuteForEach('update')
        // If yes, update the system
        if (game.variables.needToUpdateSystem) {
                game.system.update()
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

}