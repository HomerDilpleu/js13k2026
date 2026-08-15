//////////////////////
// Start scene 
//////////////////////
game.scenes.main.start = function() {

        // Play the song 
        //mge.sequencer.start()

        // Init sprites
        game.sprites.target.init()

        // Create clones
        game.sprites.target.cloneDeleteAll()
        game.sprites.target.initClone({x:640,y:20,color:'red'})
        game.sprites.target.initClone({x:640,y:60,color:'yellow'})
        game.sprites.target.initClone({x:640,y:100,color:'blue'})



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
        let caseSize = game.CONST.caseSize
        let nbCols = mge.game.width / caseSize
        let nbLines = mge.game.height / caseSize
        for (let col = 0; col < nbCols; col++) {
                for (let line = 0; line < nbLines; line++) {
                        ctx.strokeRect(col*caseSize,line*caseSize,caseSize,caseSize)
                }
        }
        ///////////////////////////////////
        ///////////////////////////////////

        game.sprites.target.cloneExecuteForEach('draw')

}