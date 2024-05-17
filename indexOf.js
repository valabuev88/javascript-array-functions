const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const randomBoolean = () => Math.random() >= 0.5;