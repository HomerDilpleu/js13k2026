///////////////////////////////////
// FUNCTIONS TO MANAGE LEVELS
///////////////////////////////////

game.loadLevelPart = function (_levelID,_levelPart) {
    // Init game variables
    game.variables.grid = Array.from({length: game.CONST.gridNbCols}, () => Array(game.CONST.gridNbLines).fill(''))
    game.variables.curLevel = _levelID
    game.variables.curLevelPart = _levelPart
    if (_levelPart == 0) {game.variables.colorIsReached={red:false,oran:false,yell:false,gree:false,cyan:false,blue:false,mage:false}}
    // Remove components and rays
    game.sprites.component.cloneDeleteAll()
    game.sprites.ray.cloneDeleteAll()
    // Get the components to create
    let _partComponents = game.levels[_levelID][_levelPart]
    // Create the components
    _partComponents.forEach((_component) => {
        game.sprites.component.initClone(_component[0],_component[1],_component[2],_component[3],_component[4])
    })
    // Force system update
    game.system.update()
}

game.checkPartCompleted = function () {
    let _completed = true
    game.sprites.component._clonesList.forEach((_component) => {
        if (_component.type == 'target' && !_component.isReached) {_completed = false}
    })
    return _completed
}

game.checkLevelCompleted = function () {
    let _completed = false
    if (game.variables.colorIsReached.red && game.variables.colorIsReached.oran &&
        game.variables.colorIsReached.yell && game.variables.colorIsReached.gree &&
        game.variables.colorIsReached.cyan && game.variables.colorIsReached.blue &&
        game.variables.colorIsReached.mage
    ){_completed = true} 
    return _completed
}

///////////////////////////////////
// LEVELS
///////////////////////////////////
game.levels.push([[['target',16,1,'red',0],['source',13,1,'red',90]],
                  [['target',16,2,'oran',0],['source',20,5,'oran',270],['mirror',20,2,'x',90],['mirror',24,2,'x',90],['mixer',24,6,'x',90],['mirror',27,6,'x',90],['mixer',27,10,'x',90]],
                  [['target',16,3,'yell',0],['source',13,7,'yell',0],['mirror',13,3,'x',0]],
                  [['target',16,4,'gree',0],['source',12,6,'gree',0],['mirror',12,4,'x',0]],
                  [['target',16,5,'cyan',0],['source',18,5,'cyan',0],['target',16,6,'blue',0],['source',18,6,'blue',0],['target',16,7,'mage',0],['source',18,7,'mage',0]]],
)

game.levels.push([[['target',22,11,'blue',0],['mirror',22,6,'x',0],['source',19,6,'blue',0]],
                  [['target',15,11,'mage',0],['source',13,7,'mage',0]]]
)



