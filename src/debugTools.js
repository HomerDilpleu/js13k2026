function pathToPoints(pathString) {
    // Expression régulière pour capturer les nombres (entiers ou décimaux)
    const regexCoordonnees = /-?\d+(\.\d+)?/g;
    // Récupérer tous les nombres sous forme de tableau de chaînes
    const nombres = pathString.match(regexCoordonnees);
    // Si aucun nombre n'est trouvé, retourner un tableau vide
    if (!nombres) return [];
    const points = [];
    // Grouper les nombres deux par deux pour former les couples [x, y]
    for (let i = 0; i < nombres.length; i += 2) {
        if (nombres[i + 1] !== undefined) {
            points.push([
                Number(nombres[i]), 
                Number(nombres[i + 1])
            ]);
        }
    }
    return JSON.stringify(points);
}

