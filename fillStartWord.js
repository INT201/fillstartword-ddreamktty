const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  let x = startWord
  let y = word
  if(y === null || y === undefined) {
    return undefined
  }
  else if(y.startsWith(x)) {
    return y
  }else{
    return x+y
  }
  //code here
}
module.exports = fillStartWord
