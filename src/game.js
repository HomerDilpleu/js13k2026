// Game description
game = {
  // Structure of the game
  scenes: {
    boot : {},
    main : {}
  },
  sprites:{
    playButton: mge.game.createSprite(),
    component: mge.game.createSprite(),
    ray: mge.game.createSprite(),
    rainbow:mge.game.createSprite(),
    background:mge.game.createSprite()
  },
  CONST:{
    gridCellSize:40,
    gridNbCols:32,
    gridNbLines:18,
    rayMaxLength:6,
    hColors: new Map([['red', 0],
                      ['oran', 30],
                      ['yell', 60],
                      ['gree', 120],
                      ['cyan', 180],
                      ['blue', 240],
                      ['mage', 275]]),
    mixColors: new Map([['redblue', 'mage'],
                      ['bluered', 'mage'],
                      ['yellblue', 'gree'],
                      ['blueyell', 'gree'],
                      ['yellred', 'oran'],
                      ['redyell', 'oran'],
                      ['redred', 'red'],
                      ['blueblue', 'blue'],
                      ['yellyell', 'yell']])
  }, 
  variables:{
    gameState:'boot',
    grid:[],
    colorIsReached:{
      red:false,
      oran:false,
      yell:false,
      gree:false,
      cyan:false,
      blue:false,
      mage:false
    },
    curLevel:'',
    curLevelPart:''
  },
  timers:{
    partCompleted:mge.game.createTimer(500 ,'X')
  },
  instruments:{},
  system:{},
  tools:{
    gridToCoordinate: function (col,line) {
      let x = game.CONST.gridCellSize * (col+0.5)
      let y = game.CONST.gridCellSize * (line+0.5)
      return {x,y}
    },
    hsla:function(h,s,l,a) {return 'hsl('+h+' '+s+'% '+l+'% / '+a+'%)'}
  },
  levels:[]
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