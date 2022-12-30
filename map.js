const nums = [1, 2, 3, 4, 5];
// -->       [1, 4, 9, 16, 25]
// Your code here
const array = nums.map(x => {return Math.pow(x,2)});

console.log(array);

