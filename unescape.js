const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const isWeekday = (date) => date.getDay() % 6 !== 0;