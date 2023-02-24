const Web3 = require("web3");
const rpcURL = "https://goerli.infura.io/v3/9958fc9a34074133b04d4eae46c3f777";

const web3 = new Web3(rpcURL);

async function getTransactionByAccount(account, startBlock, endBlock) {
  for (let block = startBlock; block <= endBlock; block++) {
    blockJson = await web3.eth.getBlock(block);
    const { transactions, timestamp } = blockJson;
    const date = new Date(timestamp * 1000);
    var year = date.getFullYear().toString().slice();
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);
    var hour = ("0" + date.getHours()).slice(-2);
    var minute = ("0" + date.getMinutes()).slice(-2);
    var second = ("0" + date.getSeconds()).slice(-2);

    var returnDate =
      year +
      "년 " +
      month +
      "월 " +
      day +
      "일 " +
      hour +
      ":" +
      minute +
      ":" +
      second;

    transactions.map((tx) => {
      web3.eth.getTransaction(tx).then((obj) => {
        const from = obj.from;
        const to = obj.to;
        const value = web3.utils.fromWei(obj.value, "ether");

        if (from == account) {
          if (to == null) {
            console.log(
              `${returnDate}에 스마트 컨트랙트를 배포한 기록이 있습니다.`
            );
          } else {
            console.log(
              `${returnDate}에 ${to} 주소로 ${value}ETH를 송금한 기록이 있습니다.`
            );
          }
        } else if (to == account) {
          console.log(
            `${returnDate}에 ${from} 주소로부터 ${value}ETH를 송금 받은 기록이 있습니다.`
          );
        }
        return;
      });
    });
  }
}

getTransactionByAccount(
  "0x20a77e56117Df0512aD363e86BBa4A556d3d6F87",
  8533863,
  8533867
);
