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

        game.sprites.target.cloneExecuteForEach('draw')

}