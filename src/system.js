game.system.update = function () {
    // Initialization
    game.system.init()
    // Update components (recursive)
    game.system.updateComponents()

    // Put  needToUpdateSystem to false 
    game.variables.needToUpdateSystem = false
}

game.system.init = function () {
    // Delete rays
    game.sprites.ray.cloneDeleteAll()
    // Delte list of components to update
    game.system.componentsToUpdate = []
    // And put the "source" components
    game.sprites.component._clonesList.forEach((_component) => {
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
    /*game.sprites.component._clonesList.forEach((_component) => {
        _outputFlowList = _outputFlowList.concat(_component.updateSystem())
       }
    )*/
    game.system.componentsToUpdate.forEach((_component) => {
        _outputFlowList = _outputFlowList.concat(_component.updateSystem())
       }
    )    ////////////////////////////////////////
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
            // 3. Add the component inside the end cell (if exists) to the _newComponentsToUpdate list
            if (game.variables.grid[_endCellCol][_endCellLine] != '') {
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
    return [16,6]
}


