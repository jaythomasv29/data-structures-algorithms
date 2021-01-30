# data-structures-algorithms
A complete study of data structures and algorithms

# Big 0 Notation
- #### O(n)
##### O(n) is a linear function. The time is linear meaning that the number of inputs will result in the same number of operations
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