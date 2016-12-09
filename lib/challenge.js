'use strict';

let ROT13Cipher = {
  encode: (string) => {
  let array = string.split('');
  let newArray = array;
  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i+13-array.length];
  }
  return newArray.toString();
}
};
// split into array
// make new array
// for each array element - set value as i+13 in new array


module.exports = ROT13Cipher;
