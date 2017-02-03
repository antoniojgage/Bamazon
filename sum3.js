var nums = [-1, 0, 1, 2, -1, -4];
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
threeSum(nums);

function threeSum(nums) {
    var count = 0;
    var solution=[];
    //checking each triple
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            for (var k = j + 1; k < nums.length; k++) {

                if (nums[i] + nums[j] + nums[k] === 0) {
                    count++;
                    solution.push([nums[i],nums[j],nums[k]])
                
                    console.log(count);
                }
            }
        }
    }
    console.log(solution);
    console.log(count);
    return count;
};