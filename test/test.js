var assert = require('./assert')
var data = require('../data/data')
var expectedArrayOfArrays = require('../data/array-of-arrays')
var expectedFormattedDates = require('../data/formatted-dates')
var countIf = require('../index').countIf
var filter = require('../index').filter
var map = require('../index').map

var meaningOfLife = '42'


/*
 * isNumber
 */

function isNumber (thing) {
  return typeof thing === 'number'
}

/*
 * isEmail
 */

function isEmail (str) {
  var toArray = str.split("@");
  var result = true;
  if (toArray.length === 2){
    for (var i = 0; i < toArray.length; i++){
      if (toArray[i] === ""){
        result = false;
      }
    }
  } else {
    result = false;
  }
  return result;
}

/*
 * countIf
 */

var isString = function (s) {
  return typeof s === 'string'
}
var mixedArray = [1, '21', null, Date.now(), 5, meaningOfLife, 42]
var expectedNumberCount = 4 // do you know which 4 are numbers?
var expectedStringCount = 2
var numberCount = countIf(isNumber, mixedArray)
var stringCount = countIf(isString, mixedArray)

assert(numberCount, expectedNumberCount, 'countIf can count the numbers in an array')
assert(stringCount, expectedStringCount, 'countIf can count the strings in an array')

/*
 * filter
 */

var emails = filter(isEmail, data)
assert(emails.length, 44, 'filter and isEmail returns the correct number of emails')

/*
 * map
 */

var someNumbers = [2, 4, 6]
var expectedNumbers = [4, 8, 12]
var timesTwo = function (num) {
  return num * 2
}
var actualNumbers = map(timesTwo, someNumbers)
for (var i = 0; i < expectedNumbers.length; i++) {
  assert(expectedNumbers[i], actualNumbers[i], 'number mapped correctly')
}
