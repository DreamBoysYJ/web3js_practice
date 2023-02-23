const Web3 = require("web3");
const rpcURL = "https://goerli.infura.io/v3/9958fc9a34074133b04d4eae46c3f777";

const web3 = new Web3(rpcURL);

const blockNum = "7719362";

web3.eth.getBlock(blockNum).then((obj) => {
  console.log(obj);
});
