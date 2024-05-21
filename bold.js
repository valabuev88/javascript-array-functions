const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};