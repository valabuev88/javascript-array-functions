const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));