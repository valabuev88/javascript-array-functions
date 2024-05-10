const timeFromDate = date => date.toTimeString().slice(0, 8);
const average = arr => arr.reduce((a, b) => a + b) / arr.length;