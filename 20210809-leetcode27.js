/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  for (let i = nums.length-1; i>=0; i--) {
      console.log(nums[i], val)
      if (nums[i] === val) {
          nums.splice(i, 1)
      }
  }
  return nums
};

console.log(removeElement([3,2,2,3], 3))