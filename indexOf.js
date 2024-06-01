console.log(false === '0');
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));