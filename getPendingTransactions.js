const Web3 = require("web3");
const rpcURL = "https://goerli.infura.io/v3/9958fc9a34074133b04d4eae46c3f777";

const web3 = new Web3(rpcURL);

// 트랜잭션 조회하기
const txId =
  "0x33073be36ab933460e402dfb5e0c9d356475da531903c26816203151e41f333e";

web3.eth.getPendingTransactions().then(console.log);
