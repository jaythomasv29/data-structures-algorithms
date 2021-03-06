# data-structures-algorithms
A complete study of data structures and algorithms
# The Pillars of Coding
1. ## Readability
2. ## Memory (Space complexity, Heap/Stack)
3. ## Speed (Time complexity)

# Big O Notation
# The 4 rules to implement
1. #### Big O notation only cares about the worst case
2. #### Constants do not matter, O(n/2 + 200 + 200) is equal to O(n)
3. #### Different terms of inputs have different variables
  - #### If a function has two parameters, they are considered different variables
   ````
    const compressBothBoxes(box1, box2) {
      box1.forEach((box1) => {
        console.log(box1)
      })

      box2.forEach((box2) => {
        console.log(box2)
      })
    }
    // O( n + l ) (2 different )
  ````
4. #### Drop non dominants - Drop non dominant returns



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

## O(n^2) Time Complexity Notation ( nested loop scenario )
- ### O(n^2) is quadratic time, everytime the number of inputs increase, the output increases exponentially as a quadratic.
````
const numbers = [1,2,3,4,5,6]

const logAllPairs = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      console.log(numbers[i], numbers[j])
    }
  }
}
logAllPairS(numbers)
````

## O(n!) Time Complexity Notation ( factorial time )
- ### The most costly in terms of time complexity. (A loop added to every element)


## 