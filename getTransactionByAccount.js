const Web3 = require("web3");
const rpcURL = "https://goerli.infura.io/v3/9958fc9a34074133b04d4eae46c3f777";

const web3 = new Web3(rpcURL);

function getTransactionByAccount(account, startBlock, endBlock) {
  for (let block = startBlock; block <= endBlock; block++) {
    web3.eth
      .getBlock(block)
      .then((obj) => {
        const transactions = obj.transactions;
        return transactions;
      })
      .then((transactions) => {
        transactions.map((tx) => {
          web3.eth.getTransaction(tx).then((obj) => {
            const from = obj.from;
            const to = obj.to;
            const value = web3.utils.fromWei(obj.value, "ether");

            if (from == account) {
              if (to == null) {
                console.log("스마트 컨트랙트를 배포한 기록이 있습니다.");
              } else {
                console.log(`${to} 주소로 ${value}를 송금한 기록이 있습니다.`);
              }
            } else if (to == account) {
              console.log(
                `${from} 주소로부터 ${value} 송금 받은 기록이 있습니다.`
              );
            }
            return;
          });
        });
      });
  }
}

getTransactionByAccount(
  "0x20a77e56117Df0512aD363e86BBa4A556d3d6F87",
  8487861,
  8487865
);
