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
    gridCellSize:40,
    hColors: new Map([
      ['red', 0],
      ['orange', 30],
      ['yellow', 60],
      ['green', 120],
      ['cyan', 180],
      ['blue', 240],
      ['magenta', 275]    
    ])

/*
    colors:{
      red:0,
      orange:30,
      yellow:60,
      green:120,
      cyan:180,
      blue:240,
      magenta:275
    }*/
  }, 
  variables:{},
  instruments:{},
  tools:{
    gridToCoordinate: function (col,line) {
      let x = game.CONST.gridCellSize * (col+0.5)
      let y = game.CONST.gridCellSize * (line+0.5)
      return {x,y}
    },
    hsla:function(h,s,l,a) {return 'hsl('+h+' '+s+'% '+l+'% / '+a+'%)'}
  }
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