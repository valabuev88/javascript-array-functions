const merge = (a, b) => [...a, ...b];
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const merge = Object.assign({}, obj1, obj2);