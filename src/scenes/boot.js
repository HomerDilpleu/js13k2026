//////////////////////
// Start scene 
//////////////////////
game.scenes.boot.start = function() {

    // Init sprites
    game.sprites.playButton.init()
    game.sprites.component.init()
    game.sprites.ray.init()
    game.sprites.rainbow.init()
    game.sprites.background.init()

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