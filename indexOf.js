const uniqueArr = (arr) => [...new Set(arr)];
console.log(typeof typeof 1);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();