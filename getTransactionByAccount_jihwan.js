const Web3 = require("web3");
const rpcURL = "https://goerli.infura.io/v3/9958fc9a34074133b04d4eae46c3f777";

const web3 = new Web3(rpcURL);

async function getTransactionsByAccount(account, startBlock, endBlock) {
  const results = [];
  for (let i = startBlock; i <= endBlock; i++) {
    const block = await web3.eth.getBlock(i, true);
    if (block != null && block.transactions != null) {
      block.transactions.forEach((transaction) => {
        if (account === transaction.from || account === transaction.to) {
          results.push(transaction);
        }
      });
    }
  }
  return results;
}

getTransactionsByAccount(
  "0x20a77e56117Df0512aD363e86BBa4A556d3d6F87",
  8487861,
  8487865
)
  .then((result) => {
    console.log(result.length);
  })
  .catch((error) => {
    console.log(error);
  });
