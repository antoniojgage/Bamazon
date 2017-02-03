var nums = [-1, 0, 1, 2, -1, -4];
threeSum(nums);

function threeSum(nums) {

   nums = nums.sort();
   var tempList = [];
   var resultList = [];

   var triplets = [0, 0, 0];

   for (aIndex = 0; aIndex < nums.length - 2; aIndex++) {
       for (bIndex = aIndex + 1; bIndex < nums.length - 1; bIndex++) {
           for (cIndex = bIndex + 1; cIndex < nums.length; cIndex++) {
               if (nums[aIndex] + nums[bIndex] + nums[cIndex] === 0) {
                   triplets = [nums[aIndex], nums[bIndex], nums[cIndex]];
                   if (resultList.length < 2) {
                       resultList.push(triplets);
                       console.log("Result List  = ");
                       console.log(resultList);
                   }
               }
           }
       }
   }
   return resultList;
}