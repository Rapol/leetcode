/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const hashTable = {};
    for(let i = 0; i < s1.length; i++) {
        const currentLetter = s1[i];
        if(!hashTable[currentLetter]){
            hashTable[currentLetter] = 0;
        }
        hashTable[currentLetter]++;
    }
    for(let i = 0; i < s2.length; i++) {
        const hashCopy = { ...hashTable };
        for(let j = 0; s1.length; j++ ) {
            const currentLetter = s2[i +j];
            if(hashCopy[currentLetter] > 0){
                hashCopy[currentLetter] -= 1
                if(hashCopy[currentLetter] === 0){
                    delete hashCopy[currentLetter]
                }
                if(Object.keys(hashCopy).length === 0) {
                    return true
                }
            } else {
                break;
            }
        }
    }
    return false;
};