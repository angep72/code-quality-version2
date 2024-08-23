function getArrayDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    if (arr.length === 0) return 1;
    
    return 1 + Math.max(...arr.map(getArrayDepth));
}

function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
    }, []);
}

