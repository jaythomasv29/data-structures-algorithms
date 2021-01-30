# data-structures-algorithms
A complete study of data structures and algorithms

# Big 0 Notation
# The 4 rules to implement
- 
-
-
-

</br>

#### Note: Big O notation only cares about the worst run-time. (Worst case scenario)
## O(n) Time Complexity Notation
- ### O(n) is a linear function. The time is linear meaning that the number of inputs will result in the same number of operations
- #### (The number of inputs increases proportionally with operations increases the same amount)
````
const array = ['dory', 'plankton', 'megatron', 'nemo']
function findNemo(arr) {
  for (let i = 0; i < array.length; i++) {
    if(array[i] === 'nemo') {
      console.log("I found nemo")
    }
  }
}

findNemo(array)
````

## O(1) Time Complexity Notation
- ### O(1) is constant time. The time is constant because the number of operations is always a single CONSTANT
````
  function compressFirstBox(boxes) {
    // only one (constant) operation happens
    console.log(boxes[0])  // O(1)
  }

  function compressFirstBox(boxes) {
    // only three (constant) operation happens
    // The time complexity is simplified to O(1) - constant time
    console.log(boxes[0])  // 
    console.log(boxes[0])  // 
    console.log(boxes[0])  // 
  }
````

