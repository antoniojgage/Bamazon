var nums = [0, 1, 0, 3, 12, 0, 5, 0, 0, 0, 0, 0];
console.log(nums);
moveZeroes(nums);

function moveZeroes(nums) {
    var x = nums.indexOf(0);
    var count = 0;
    while (x != -1) {
        console.log("0 is located at index: " + x);
        count++;
        nums.splice(x, 1);
        x = nums.indexOf(0);
        console.log("Deleting Last index, current Array = " + nums);
        console.log("Increasing Count to push 0's " + count);
    }
    while (count) {
        count--;
        nums.push(0);
    }
    console.log("Final array = " + nums);
};