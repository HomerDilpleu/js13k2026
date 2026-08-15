//////////////////////
// Start scene 
//////////////////////
game.scenes.main.start = function() {

        // Play the song 
        //mge.sequencer.start()

        // Create clones
        game.sprites.target.cloneDeleteAll()
        game.sprites.target.initClone({col:16,line:1,color:'red'})
        game.sprites.target.initClone({col:16,line:2,color:'orange'})
        game.sprites.target.initClone({col:16,line:3,color:'yellow'})
        game.sprites.target.initClone({col:16,line:4,color:'green'})
        game.sprites.target.initClone({col:16,line:5,color:'cyan'})
        game.sprites.target.initClone({col:16,line:6,color:'blue'})
        game.sprites.target.initClone({col:16,line:7,color:'magenta'})
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

        game.sprites.target.cloneExecuteForEach('draw')

}