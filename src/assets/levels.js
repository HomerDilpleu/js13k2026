///////////////////////////////////
// FUNCTIONS TO MANAGE LEVELS
///////////////////////////////////

game.loadLevelPart = function (_levelID,_levelPart) {
    // Init game variables
    game.variables.grid = Array.from({length: game.CONST.gridNbCols}, () => Array(game.CONST.gridNbLines).fill(''))
    game.variables.curLevel = _levelID
    game.variables.curLevelPart = _levelPart
    if (_levelPart == 0) {
        game.variables.colorIsReached={red:false,oran:false,yell:false,gree:false,cyan:false,blue:false,mage:false}
    }
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
    if (game.variables.colorIsReached.red && game.variables.colorIsReached.oran && game.variables.colorIsReached.yell && game.variables.colorIsReached.gree && game.variables.colorIsReached.cyan && game.variables.colorIsReached.blue && game.variables.colorIsReached.mage){
        _completed = true
    } 
    return _completed
}

///////////////////////////////////
// LEVELS
///////////////////////////////////

game.levels.push([[['target',20,6,'oran',0],['source',14,6,'oran',180]],
                  [['target',22,9,'gree',0],['source',17,9,'gree',180]],
                  [['target',16,1,'cyan',0],['source',10,1,'cyan',180]],
                  [['target',16,1,'red',0],['source',10,1,'red',180]]]
)
game.levels.push([[['target',16,1,'red',0],['source',10,1,'red',180]],
                  [['target',16,2,'oran',0],['source',22,2,'oran',0]],
                  [['target',16,3,'yell',0],['source',10,3,'yell',270],
                   ['mirror',13,3,'x',0],['mirror',13,7,'x',180],['mirror',16,7,'x',180]],
                  [['target',16,4,'gree',0],['source',22,4,'gree',270],
                   ['mirror',19,4,'x',0],['mirror',19,7,'x',180],['mirror',13,7,'x',180],['mirror',13,4,'x',180]],
                  [['target',16,5,'cyan',0],['source',10,5,'cyan',90],
                   ['mirror',12,5,'x',0],['mirror',12,7,'x',180],['mirror',18,7,'x',180],['mirror',18,3,'x',180],
                   ['mirror',14,3,'x',0],['mirror',14,5,'x',180],['mirror',10,7,'x',180]],
                  [['target',16,6,'blue',0],['source',22,6,'blue',90],
                   ['target',16,7,'mage',0],['source',10,7,'mage',270],
                   ['mirror',18,6,'x',0],['mirror',18,9,'x',0],['mirror',14,9,'x',0],['mirror',14,6,'x',0],['mirror',12,7,'x',0],
                   ['mirror',10,9,'x',0],['mirror',14,11,'x',0],['mirror',20,11,'x',0],['mirror',20,7,'x',0]]]
)

game.levels.push([[['target',16,1,'gree',0],['source',10,1,'gree',180]],
                  [['target',16,1,'oran',0],['source',10,1,'oran',180]],
                  [['target',16,1,'cyan',0],['source',10,1,'cyan',180]],
                  [['target',16,1,'red',0],['source',10,1,'red',180]]]
)

game.levels.push([[['target',16,1,'red',0],['source',13,1,'red',90]],
                  [['target',16,2,'oran',0],['source',13,5,'oran',270],['mirror',13,2,'x',0]],
                  [['target',16,3,'yell',0],['source',13,7,'yell',0],['mirror',13,3,'x',0],
                   ['target',16,4,'gree',0],['source',12,6,'gree',0],['mirror',12,4,'x',0]],
                  [['target',16,5,'cyan',0],['source',8,6,'cyan',90],
                   ['target',16,6,'blue',0],['source',12,6,'blue',90],
                   ['mirror',10,3,'x',0],['mirror',10,6,'x',90],['mirror',10,9,'x',90],['mirror',16,3,'x',90],
                   ['mirror',14,9,'x',0],['mirror',14,6,'x',90],
                   ['target',16,7,'mage',0],['source',19,3,'mage',0],
                   ['mirror',16,1,'x',0],['mirror',21,1,'x',90],['mirror',21,7,'x',90]]]
)


game.levels.push([[['source',13,1,'red',180],['source',13,2,'oran',180],['source',13,3,'yell',180],
                   ['source',13,4,'gree',180],['source',13,5,'cyan',180],['source',13,6,'blue',180],['source',13,7,'mage',180],
                   ['target',15,1,'red',90],['target',15,2,'oran',270],['target',15,3,'yell',0],
                   ['target',15,4,'gree',0],['target',15,5,'cyan',90],['target',15,6,'blue',90],['target',15,7,'mage',0]]]
)


