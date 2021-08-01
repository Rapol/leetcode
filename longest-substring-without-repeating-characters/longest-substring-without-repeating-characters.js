/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const subStringMap = new Map();
    const subIndexMap = new Map();
    let longestStreak = 0;
    let subStringStart = 0;
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        if(subStringMap.get(char) !== undefined) {
            let prevSubString = subStringStart; // 0
            subStringStart = subStringMap.get(char) + 1; // 2
            for(let j = prevSubString; j < subStringStart; j++) { // j = 0; j < 1
                const charToDelete = subIndexMap.get(j);
                subIndexMap.delete(j);
                subStringMap.delete(charToDelete);
            }
        }
        subStringMap.set(char, i);
        subIndexMap.set(i, char);
        const currentStreak = (i + 1) - subStringStart;
        longestStreak = longestStreak > currentStreak ? longestStreak : currentStreak;
    }
    return longestStreak;
};
/**
a
i = 0
longestStreak = 1;
subStringStart = 0;
map = 
  a = 0
----------------------
b
i = 1
longestStreak = 2;
subStringStart = 0;
map = 
  a = 0
  b = 1
----------------------
b
i = 2
longestStreak = 2;
subStringStart = 2;
map = 
  a = 0
  b = 2
----------------------
a
i = 3
longestStreak = 2;
subStringStart = 1;
map = 
  a = 3
  b = 2
----------------------
*/