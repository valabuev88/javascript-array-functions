console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const timeFromDate = date => date.toTimeString().slice(0, 8);