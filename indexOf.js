const removeDuplicates = (arr) => [...new Set(arr)];
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());