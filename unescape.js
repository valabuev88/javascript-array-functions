const channelName = getChannelName(channel);
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const symbolsPath = path.join(buildOutputPath, 'symbols');