game.system.update = function () {
    // Initialization
    game.system.init()
    // Update components (max 20 calls)
    let i = 0
    while (i<20 && game.system.componentsToUpdate.length > 0) {
        game.system.updateComponents()
        i+=1
    }
    // Put needToUpdateSystem to false 
    game.variables.needToUpdateSystem = false
}

game.system.init = function () {
    // Delete rays
    game.sprites.ray.cloneDeleteAll()
    // Delete list of components to update
    game.system.componentsToUpdate = []
    // Delete input and output of each component 
    // + set isReached flag to false (necessary for target)
    // + put the "source" components in the list of components to update 
    game.sprites.component._clonesList.forEach((_component) => {
            _component.inputFlows = []
            _component.outputFlows = []
            _component.isReached = false
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
            game.sprites.ray.initClone(_startCell,_endCell,_color)
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
    for (let i = 0; i < 5; i++) {
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


