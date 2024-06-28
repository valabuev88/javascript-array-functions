const merge = Object.assign({}, obj1, obj2);
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());