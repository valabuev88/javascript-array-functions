console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];