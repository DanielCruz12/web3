require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-mainnet.alchemyapi.io/v2/Ei9eTwsVAW6KLYP1C38T5wK7keRzJPvH',
      accounts: ['00415b258aa97c8f03d394bf90d6fd4f304fa43efd2961f9dd9e28ef116a7eda'],
    },
  },
};