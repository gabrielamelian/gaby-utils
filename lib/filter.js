/*
 * filter
 */

function filter (func, arr) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++){
    if (func(arr[i])){
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

module.exports = filter;
