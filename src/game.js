// Game description
game = {
  // Structure of the game
  scenes: {
    boot : {},
    main : {}
  },
  sprites:{
    playButton: mge.game.createSprite(),
    target: mge.game.createSprite()
  },
  CONST:{
    caseSize:40
  }, 
  variables:{},
  instruments:{}
}

// Remove "Loading" div and start the game
window.addEventListener("load", (event) => {
  let loading = document.getElementById("loading")
  loading.remove()
  mge.game.width = 1280
  mge.game.height = 720
  mge.game.start(game.scenes.boot)
}
)