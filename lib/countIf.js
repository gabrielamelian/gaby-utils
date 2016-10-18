/*
 * countIf
 */

function countIf (testFunc, arr) {
  var countElements = function (total, element){
    if (testFunc(element)){
      console.log(total + 1)
      return total + 1;
    }
      return total;
  }
  return arr.reduce(countElements, 0);
}

module.exports = countIf;
