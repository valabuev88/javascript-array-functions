const uniqueArr = (arr) => [...new Set(arr)];
const randomString = () => Math.random().toString(36).slice(2);
const fullName = name || 'buddy';