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
function getCombinations(array, includedTreatments) {
    // remove included treatments because they need to 
    // be a member of EVERY combination
    array = array.filter(function (e) {
        return includedTreatments.indexOf(e) < 0;
    });

    // this is a solution to power sets
    let combinations = 
        new Array(1 << array.length).fill()         // Given L items, where L is the array length, our powerset will be
                                                    // of size 2^L, represented in binary as shifting left L bits
            .map((e1, i) => array.filter(               // Imagine the array items represented as a binary number
                                                        // where 1 means "include this item" and 0 means "exclude"
                                                        // for array ['a','b','c'], 101 would be ['a','c'] and
                                                        // 010 would be ['b'].
                                                        // This loop just counts up in binary and converts every number to 
                                                        // a filtered number, so you get every possible combination
                (e2, j) => 
                    i & (1 << j)                        // This is how you can check which bits.  As j increments
                                                        // it will check every bit in i and filter out the 
                                                        // appropriate array elements.
            ));

    combinations = combinations.reverse().filter((combination) => combination.length > 0);

    combinations = combinations.map((e) => {
        return e.concat(includedTreatments);
    });

    return combinations;
}

export {
    isSame,
    getCombinations
};
