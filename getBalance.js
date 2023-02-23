const Web3 = require("web3");
const rpcURL = "https://goerli.infura.io/v3/9958fc9a34074133b04d4eae46c3f777";

const web3 = new Web3(rpcURL);

const account = "0x20a77e56117Df0512aD363e86BBa4A556d3d6F87";

web3.eth
  .getBalance(account)
  .then((bal) => {
    console.log(`지감 ${account} 잔액은... ${bal}입니다.`);
    return web3.utils.fromWei(bal, "ether");
  })
  .then((eth) => {
    console.log(`이더 단위로는 ${eth} ETH 입니다.`);
  });

// 트랜잭션 조회하기
const txId =
  "0x33073be36ab933460e402dfb5e0c9d356475da531903c26816203151e41f333e";

web3.eth.getTransaction(txId).then((obj) => {
  console.log(obj);
});

// 블록 조회하기

const blockNum = "7719362";

web3.eth.getBlock(blockNum).then((obj) => {
  console.log(obj);
});
