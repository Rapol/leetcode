/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashTable = new Map();
    nums.forEach((num, index) => {
        hashTable.set(num, index);
    });
    for(let i = 0; i < nums.length; i++) {
        const numberToFind = target - nums[i];
        const foundNumber = hashTable.get(numberToFind);
        if(foundNumber !== undefined && foundNumber !== i) {
            return [i, hashTable.get(numberToFind)]
        }
    }
};