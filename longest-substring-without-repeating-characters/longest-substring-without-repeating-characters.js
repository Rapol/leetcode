/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const subStringSet = new Set();
    let longestStreak = 0;
    let subStringStart = 0;
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        while(subStringSet.has(char)) {
            subStringSet.delete(s[subStringStart])
            subStringStart++;
        }
        subStringSet.add(char);
        longestStreak = Math.max(longestStreak, (i + 1) - subStringStart)
    }
    return longestStreak;
};
