/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(!Array.isArray(nums)) {
        return false;
    }
    for (let i = 0; i < nums.length; i++) {
        for (let s = 0; s < nums.length; s++) {
            if (nums[i] + nums[s + 1] === target && i !== s + 1) {
                console.log(nums[i]);
                console.log(nums[s + 1]);
                
                return [i, s + 1];
            }
        }
    }
};
console.log(twoSum([2,5,5,11], 10));