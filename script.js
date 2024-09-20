function threeSum(arr, target) {
  // Sort the array first
  arr.sort((a, b) => a - b);
  
  let closestSum = Infinity; // Initialize with a large value
  
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    
    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];
      
      // If the current sum is closer to the target, update closestSum
      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }
      
      // If current sum is exactly the target, return it immediately
      if (currentSum === target) {
        return currentSum;
      } else if (currentSum < target) {
        left++; // Need a larger sum, move left pointer right
      } else {
        right--; // Need a smaller sum, move right pointer left
      }
    }
  }
  
  return closestSum; // Return the closest sum found
}

module.exports = threeSum;
