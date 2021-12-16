// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

var twoSum = function(nums, target) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
      for (let j = i+1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target){
              arr[0]=i;
              arr[1]=j;
          }
              
      }
  } return arr;
  
  } 