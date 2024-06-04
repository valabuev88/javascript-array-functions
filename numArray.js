const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const fullName = name || 'buddy';