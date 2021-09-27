function hasTargetSum(array, target) {
  
  const seenNumbers = {};

  for (const number of array) {
    const compliment = target - number;
    if (compliment in seenNumbers) return true;
    seenNumbers[number] = true;
  }
  
  return false;

}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  iterate over each number
    create an object of pairs
*/

/*
  Add written explanation of your solution here
  Create an array of array pairs

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
