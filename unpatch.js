const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
[foo, bar] = [bar, foo];
const currentDate = () => new Date().toLocaleDateString('en-US');