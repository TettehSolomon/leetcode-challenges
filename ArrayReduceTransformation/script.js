/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init; // Start with the initial value
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]); // Apply the reducer function to each element sequentially
    }
    return val; // Return the final result
};
