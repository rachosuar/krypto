require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://divine-old-aura.ethereum-goerli.quiknode.pro/9a4c6ccf89e4e1e5af429dbe189035e95a544a09/",
      accounts: [
        "42eff823f6e3cd7f9477df8cd25b0da30a2ccbce7609da4c21e626d34eb4c800",
      ],
    },
  },
};
