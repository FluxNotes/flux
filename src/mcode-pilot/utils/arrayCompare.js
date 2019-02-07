// returns true if arrayOne contains the same elements as arrayTwo and false if not
function isSame(arrayOne, arrayTwo) {
    if (arrayOne == null || arrayTwo == null || arrayOne.length !== arrayTwo.length) return false;

    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayTwo.indexOf(arrayOne[i]) === -1) return false;
    }

    return true;
}

// returns an array of arrays of every combination of the given array
// ex: // ['chemo','hormonal','radiation'] => [['chemo'], ['hormonal'], ['radiation'], ['chemo','hormonal'], ['chemo','radiation'], ['hormonal','radiation'], ['chemo','hormonal','radiation']]
function getCombinations(array) {
    const combinations = new Array(1 << array.length).fill().map((e1, i) => array.filter((e2, j) => i & (1 << j)));
    combinations.reverse(); // reverse order
    return combinations;
}

export {
    isSame,
    getCombinations
};
