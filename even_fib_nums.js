/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {

  let sum = 0;
  let arr = [1, 2];

  for(let i = 2; i < maxFibValue; i++) {
    let newNum = arr[i-1] + arr[i-2]; 
    arr.push(newNum);
  }
  
  for(let i = 0; arr[i] <= maxFibValue; i++) {
    if(arr[i] % 2 === 0) {
      sum += arr[i]; 
    }

  }

  console.log(sum);
  return sum;
  
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 1;
  let b = 1;
  let a = 2;

  if (typeof maxFibValue === 'number') {

    while (a <= maxFibValue) {
      a = highest + b;
      b = highest;

      if (a < maxFibValue) {
        highest = a;
      }
    }
  console.log(highest);

  return highest;
  
  };
}

// return 89
// 1, 1, 2, 3, 5, 8, 13 , 21, 34, 55, 89, 144

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};
