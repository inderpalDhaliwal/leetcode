/* Two Sum 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Each input will have exactly one solution, which means there will always be a pair of numbers in the array that adds up to the target.
You cannot use the same element (number) twice in the pair.
You can return the answer in any order, meaning the order of the indices of the two numbers in the array doesn't matter.

*/

/*
Parameters:array of nums, we are going to grab two nums that add to a select target, num, whole, + 
returns: return 
examples:nums=[5,8,9,12]  target = 20 console.log(twoSums(nums,target)) //[1,3]
Pseudo code:
*/
/*
p:array of nums, two nums = target, no element of nums can be used twice 
r:return object of num and target 
e:
Pc:
*/

+function twoSum(nums,target){
  const numToIndex ={}
  for(let i = 0;i<nums.length;i++){
    const currentNum = nums[i]
    const complement = target - currentNum
    if(numToIndex.hasOwnProperty(complement)){
      return[numToIndex[complement],i]
    }
  }
  return []
}





function twoSum(nums,target){
  const numToIndex={}
  for(let i=0;i<nums.length;i++){
    const currentNum=nums[i]
    const complement=target-currentNum
    if(numToIndex.hasOwnProperty(complement)){
      return [numToIndex[complement],i]
    }
  }
  return []
}

function twoSum(nums,target){
  const numToIndex = {}
  for(let i=0;i<nums.length;i++){
    const currentNum=nums[i]
    const complement = target-currentNum
    if(numToIndex.hasOwnProperty(complement)){
      return[numToIndex[complement],i]
    }
    numToIndex[currentNum]=i
  }
  return[]
}

function twoSum(nums,target){
  const numToIndex={}
  for(let i=0;i<nums.length;i++){
    const currentNum=nums[i]
    const complement=target-currentNum
    if(numToIndex.hasOwnProperty(complement)){
      [numToIndex[complement],i]
    }
    numToIndex[currentNum]=i
  }
  return[]
}


function twoSum(nums,target){
  const numToIndex ={}
  for(let i=0;i<nums.length;i++){
    const currentNum=nums[i]
    const complement=target-nums[i]
    if(numToIndex.hasOwnProperty(complement)){
      return[numToIndex[complement],i]
    }
    numToIndex[currentNum]=1
  }
  return[]
}

function twoSum(nums,target){
  const numToIndex = {}
  for(let i = 0;i<nums.length;i++){
    const currentNum = nums[i]
    const complement = target -currentNum
    if(numToIndex.hasOwnProperty(complement)){
      return [numToIndex[complement],i]
    }
    numToIndex[currentNum]=i
  }
  return[]
}

function twoSum(nums,target){
  const numToindex={}
  for(let i=0;i<nums.length;i++){
    const currentNum = nums[i]
    const complement=target-nums[i]
  
    if(numToindex.hasOwnProperty(complement)){
      return [numToindex[complement],i]
    }
    numToindex[currentNum]=i
  }
  return []
}

function twoSum(nums, target) {
    const numToIndex = {}; // Create an object to store the numbers and their indices
  
    for (let i = 0; i < nums.length; i++) {
      const currentNum = nums[i];
      const complement = target - currentNum;
  
      // Check if the complement exists in the numToIndex object
      if (numToIndex.hasOwnProperty(complement)) {
        // Return the indices of the current number and its complement
        return [numToIndex[complement], i];
      }
  
      // Store the current number and its index in the numToIndex object
      numToIndex[currentNum] = i;
    }
  
    // If no solution is found, return an empty array or handle the error as needed
    return [];
  }

  function twoSum(nums,target){
    const numToIndex={}
    for(let i=0;i<nums.length;i++){
        if(numToIndex.hasOwnProperty(target-nums[i])){
            return[numToIndex[target-nums[i]],i]
        }
        numToIndex[nums[i]]=i
    }
    return[]
}

/*Vaild Paranthesis 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

function isValid(s){
  const stack = []
  const brackets = {'(':')','{':'}','[':']'}
  for(let char of brackets){
    if(brackets[char]){
      stack.push(char)
    }else{
      const lastChar=stack.pop()
      if(brackets[lastChar]!==char){
        return false
      }
    }
  }
  return stack.length===0
}


function isValid(s){
  const stack = []
  const brackets ={'(':')','{':'}','[':']'}
  for(let char of s){
    if(brackets[char]){
      stack.push(char)
    }else{
      const lastChar=stack.pop()
      if(brackets[lastChar] !== char){
        return false
      }
    }
  }
  return stack.length===0
}

  function isValid(s) {
    const stack = [];
    const brackets = { '(': ')', '{': '}', '[': ']' };
  
    for (let char of s) {
      if (brackets[char]) {
        // If the character is an opening bracket, push it onto the stack.
        stack.push(char);
      } else {
        // If the character is a closing bracket, pop the last character from the stack.
        const lastChar = stack.pop();
  
        // If the popped character doesn't match the current closing bracket, return false.
        if (brackets[lastChar] !== char) {
          return false;
        }
      }
    }
  
    // After processing all characters, the stack should be empty for a valid string.
    return stack.length === 0;
  }