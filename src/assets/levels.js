///////////////////////////////////
// FUNCTIONS TO MANAGE LEVELS
///////////////////////////////////
game.loadLevel = function (_levelID) {
    // Init game variables
    game.variables.grid = Array.from({length: game.CONST.gridNbCols}, () => Array(game.CONST.gridNbLines).fill(''))
    game.variables.curLevel = _levelID
    game.variables.curLevelPart = 0
    game.variables.curLevelNbParts = game.levels[_levelID].length
    // Remove components and rays
    game.sprites.component.cloneDeleteAll()
    game.sprites.ray.cloneDeleteAll()
    // Load Part 0
    game.loadLevelPart(0)
}

game.loadLevelPart = function (_levelPart) {
    // Get the components to create
    let _partComponents = game.levels[game.variables.curLevel][_levelPart]
    // Create the components
    _partComponents.forEach((_component) => {
        game.sprites.component.initClone(_component[0],_component[1],_component[2],_component[3],_component[4])
    })
    // Update curLevelPart
    game.variables.curLevelPart = _levelPart
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
    if (game.checkPartCompleted() && game.variables.curLevelPart == game.variables.curLevelNbParts-1) {_completed = true} 
    return _completed
}

///////////////////////////////////
// LEVELS
///////////////////////////////////
game.levels.push([[['target',16,1,'red',0],['source',13,1,'red',90]],
                  [['target',16,2,'oran',0],['source',20,5,'oran',270],['mirror',20,2,'x',90]],
                  [['target',16,3,'yell',0],['source',13,7,'yell',0],['mirror',13,3,'x',0]]]
)

game.levels.push([[['target',22,11,'blue',0],['mirror',22,6,'x',0],['source',19,6,'blue',0]],
                  [['target',15,11,'mage',0],['source',13,7,'mage',0]]]
)



