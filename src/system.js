game.system.timerDuration = 100
game.system.stepTimer = mge.game.createTimer(game.system.timerDuration ,'X')
game.system.curStep = 0

game.system.update = function () {
    game.system.init()
    // Iterate to curStep
    let i = 0
    while (i < game.system.curStep) {
        game.system.updateComponents()
        i+=1
    }        
    // Update stepTimer 
    game.system.stepTimer.update()
    // If timer ended, update curStep and restart timer
    if (game.system.stepTimer.progress == 1) {
        if (game.system.componentsToUpdate.length > 0) {game.system.curStep +=1}
        // Update timer
        game.system.stepTimer._duration = game.system.timerDuration * (1 - Math.min(0.95, 0.3 * game.system.curStep))
        game.system.stepTimer.start()
    }
}

game.system.init = function () {
    // Delete list of components to update
    game.system.componentsToUpdate = []
    // Delete input and output of each component 
    // + put the "source" components in the list of components to update 
    game.sprites.component._clonesList.forEach((_component) => {
            _component.inputFlows = []
            _component.outputFlows = []
            if (_component.type == 'source') {
                game.system.componentsToUpdate.push(_component)
            }
       }
    )
}

game.system.updateComponents = function () {
    ////////////////////////////////////////
    // Update the state of each component and add its outputs in the _outputFlowList
    ////////////////////////////////////////
    let _outputFlowList = []
    game.system.componentsToUpdate.forEach((_component) => {
        _outputFlowList = _outputFlowList.concat(_component.updateSystem())
       }
    )
    ////////////////////////////////////////
    // For each flow:
    // 1. Get the start cell and the color
    // 2. Get the end cell
    // 3. Add the component inside the end cell (if exists) to the _newComponentsToUpdate list
    // 4. Create the ray
    ////////////////////////////////////////
    let _newComponentsToUpdate = []
    _outputFlowList.forEach((_flow) => {
            // 1. Get the start cell and the color
            let _startCell = _flow.startCell
            let _color = _flow.color
            // 2. Get the end Cell
            let _endCell = game.system.getEndCell(_flow)
            let _endCellCol = _endCell[0]
            let _endCellLine = _endCell[1]
            // 3. Add the component inside the end cell (if exists and not a source) to the _newComponentsToUpdate list
            if (game.variables.grid[_endCellCol][_endCellLine] != '' && game.variables.grid[_endCellCol][_endCellLine].type != 'source') {
                _newComponentsToUpdate.push(game.variables.grid[_endCellCol][_endCellLine])
            }
            // 4. Create the ray
            if (game.sprites.ray._clonesList.length <= 300) {
                game.sprites.ray.initClone(_startCell,_endCell,_color)
            }
       }
    )
    ////////////////////////////////////////
    // Erase the game.system.componentsToUpdate with the new list
    ////////////////////////////////////////
    game.system.componentsToUpdate = _newComponentsToUpdate
}

game.system.getEndCell = function (_flow) {
    // Define maxCells 
    let _maxCells = game.CONST.rayMaxLength
    // Get flow properties
    let _curCol = _flow.startCell[0]
    let _curLine = _flow.startCell[1]
    let _direction = _flow.direction
    // Iterations to find end Cell
    for (let i = 0; i < _maxCells; i++) {
        let _prevCol = _curCol
        let _prevLine = _curLine
        // Move to next Cell
        if (_direction == 0) {_curCol+=1}
        if (_direction == 90) {_curLine+=1}
        if (_direction == 180) {_curCol-=1}
        if (_direction == 270) {_curLine-=1}
        // Reach end of screen
        if (_curCol < 0 || _curCol >= game.CONST.gridNbCols || _curLine < 0 || _curLine >= game.CONST.gridNbLines) {
            _curCol = _prevCol
            _curLine = _prevLine
            break
        }
        // Reach a component
        if (game.variables.grid[_curCol][_curLine] != '') {
            // Add the flow as an input of the component
            game.variables.grid[_curCol][_curLine].inputFlows.push(_flow)
            break
        }
    }
    // Return final result
    return [_curCol,_curLine]
}


