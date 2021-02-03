const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// get all the sub arrays

const getAllSubArrWithSum = (arr) => {
  const result = {}
  for (let i = 0; i < arr.length; i++) { 
    for (let j = 1; j <= arr.length; j++) {
      const subArr = arr.slice(i, j)
      const sum = getSumOfArr(subArr)
      result[sum] = subArr
    }
  }
  return result
}

const getSumOfArr = (arr) => {
  return arr.reduce((num, acc) => (
    num + acc
  ), 0)
}

// console.log(getSumOfArr([0,1,2,3]), 'sum')
console.log(getAllSubArrWithSum(arr))
