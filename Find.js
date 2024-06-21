const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);