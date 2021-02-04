function highAndLow(numbers){
  // ...
  const numArray = numbers.split(" ")
  console.log(numArray)
  let low = Number(numbers[0])
  let high = Number(numbers[0])
  for(let i = 0; i< numArray.length; i++) {
    // get low number
    if (Number(numArray[i]) < low) {
      low = Number(numArray[i])
    }
    // get high number
    if (Number(numArray[i]) > high) {
      high = Number(numArray[i])
    }
  }
  return `${high} ${low}`
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))