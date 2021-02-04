const openOrSenior = (data) => {
  return data.map(member => {
    // console.log(member[0], member[1])
    const age = member[0]
    const handicap = member[1]
    if(age >= 55 && handicap > 7) {
      return 'Senior'
    } else {
      return 'Open'
    }
  }) 
}


//using map and destructuring and parentesis to eliminate return
const openOrSenior2 = (data) => (
  data.map(([age, handi]) => (
    (age >= 55 && handi > 7) ? 'Senior' : 'Open'
  ))
)

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]) )// ['Open', 'Senior', 'Open', 'Senior']
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]])) // ['Open', 'Open', 'Open', 'Open']
console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]])) // ['Senior', 'Open', 'Open', 'Open']


console.log(openOrSenior2([[45, 12],[55,21],[19, -2],[104, 20]]) )// ['Open', 'Senior', 'Open', 'Senior']
console.log(openOrSenior2([[3, 12],[55,1],[91, -2],[54, 23]])) // ['Open', 'Open', 'Open', 'Open']
console.log(openOrSenior2([[59, 12],[55,-1],[12, -2],[12, 12]])) // ['Senior', 'Open', 'Open', 'Open']
