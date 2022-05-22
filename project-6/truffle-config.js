const HDWalletProvider = require("D:\\Udacity\\Home\\Workspace\\SupplyChain\\Project-6\\node_modules\\truffle-hdwallet-provider");
const fs = require("fs");
const infuraProjectKey = fs.readFileSync(".infuraProjectKey").toString().trim();
const infuraSecretKey = fs.readFileSync(".infuraSecretKey").toString().trim();
const mnemonic = fs.readFileSync(".mnemonic").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
  },

  rinkeby: {
    network_id: 4,
    provider: () =>
      new HDWalletProvider(
        mnemonic,
        `https://rinkeby.infura.io/v3/${infuraProjectKey}`
      ),
    gas: 4500000,
    gasPrice: 10000000000,
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.13", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },
};
