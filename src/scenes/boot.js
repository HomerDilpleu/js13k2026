//////////////////////
// Start scene 
//////////////////////
game.scenes.boot.start = function() {

    // Init sprites
    game.sprites.playButton.init()
    game.sprites.target.init()

}

//////////////////////
// Update scene
//////////////////////
game.scenes.boot.update = function() {

    // Check is playButton is clicked
    game.sprites.playButton.update()

}

//////////////////////
// Draw scene
//////////////////////
game.scenes.boot.draw = function() {

    // Draw sprites
    game.sprites.playButton.draw()

}