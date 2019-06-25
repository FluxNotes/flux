// returns true if arrayOne contains the same elements as arrayTwo and false if not
function isSame(arrayOne, arrayTwo) {
    if (arrayOne===null || arrayTwo===null || arrayOne.length !== arrayTwo.length) return false;

    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayTwo.indexOf(arrayOne[i]) === -1) return false;
    }

    return true;
}

// returns an array of arrays of every combination of the given array
// ex: ['chemo','hormonal','radiation'] => [['chemo'], ['hormonal'], ['radiation'], ['chemo','hormonal'],
//     ['chemo','radiation'], ['hormonal','radiation'], ['chemo','hormonal','radiation']]
function getCombinations(treatments) {
    // this is a solution to power sets
    const combinations =
        // Given L items, where L is the array length, our powerset will be of size 2^L, represented in binary as
        // shifting left L bits
        new Array(1 << treatments.length).fill()
            // Imagine the array items represented as a binary number where 1 means "include this item" and 0 means
            // "exclude" for array ['a','b','c'], 101 would be ['a','c'] and 010 would be ['b']. This loop just counts
            // up in binary and converts every number to a filtered number, so you get every possible combination.
            .map((e1, i) => treatments.filter(
                // This is how you can check which bits.  As j increments it will check every bit in i and filter out
                // the appropriate array elements.
                (e2, j) => i & (1 << j)
            ));

    return combinations.reverse().filter((combination) => combination.length > 0);
}

function cumulativeAdd(array, index) {
    let k = 0;
    for (var i = 0; i < index; i++) {
        if (array[i] !== undefined) {
            k+=array[i];
        }
    }
    return k;
}

export {
    isSame,
    getCombinations,
    cumulativeAdd
};
