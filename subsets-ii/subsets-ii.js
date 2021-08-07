/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let numberOfPowerSet = Math.pow(2, nums.length);
    const result = [];
    const set = new Set();
    for(let i = 0; i < numberOfPowerSet; i++) {
        const subSet = [];
        for(let j = 0; j < nums.length; j++) {
            if(i & (1 << j)) {
                subSet.push(nums[j]);
            }
        }
        const sortedSubset = subSet.sort().join('');
        if(!set.has(sortedSubset)) {
            result.push(subSet);
            set.add(sortedSubset);
        }
    }
    return result;
};