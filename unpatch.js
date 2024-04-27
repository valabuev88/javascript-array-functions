console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const randomString = () => Math.random().toString(36).slice(2);
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;