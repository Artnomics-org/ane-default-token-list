const { version } = require('../package.json');
const bsc_mainnet = require('./tokens/bsc-mainnet.json');
const bsc_testnet = require('./tokens/bsc-testnet.json');

module.exports = function buildList() {
  const parsed = version.split('.');
  return {
    'name': 'ANE Default List',
    'timestamp': (new Date().toISOString()),
    'version': {
      'major': +parsed[ 0 ],
      'minor': +parsed[ 1 ],
      'patch': +parsed[ 2 ]
    },
    'tags': {},
    'logoURI': 'https://raw.githubusercontent.com/Artnomics-org/ane-default-token-list/main/src/icon-512.png',
    'keywords': [
      'uniswap',
      'default'
    ],
    tokens: [
      ...bsc_mainnet,
      ...bsc_testnet,
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      })
  };
};
