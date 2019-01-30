// returns true if arrayOne contains the same elements as arrayTwo and false if not
function isSame(arrayOne, arrayTwo) {
    if (arrayOne == null || arrayTwo == null || arrayOne.length !== arrayTwo.length) return false;

    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayTwo.indexOf(arrayOne[i]) === -1) return false;
    }

    return true;
}

export default {
    isSame
};
