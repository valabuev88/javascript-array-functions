const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const merge = [...new Set([...a, ...b])];
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';