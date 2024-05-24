var arr2 = arr1.reverse();
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;