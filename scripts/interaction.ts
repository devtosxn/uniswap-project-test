import { ethers } from "hardhat";

const main = async () => {
  const ToxTokenFactory = await ethers.getContractFactory("ToxToken");
  const toxtokencontract = await ToxTokenFactory.attach("0xBA2A077eA91b63d3274e8d00c9f0a221A2A1d286");

  // Read Initial Balance of Contract
  const contractBalanceTxn = await toxtokencontract.checkContractBalance()
  console.log("ToxToken Contract Balance:", contractBalanceTxn);

  // Transfer tokens from contract to user
  const transferTxn = await toxtokencontract.transfer("0x8303C31F66E90BB961D1E883872e6C9D631c7267", 100)
  const transferTxnReceipt = await transferTxn.wait()
  console.log("ToxToken Transfer Receipt:", transferTxnReceipt);

  // Read Modified Balance of Contract
  const newContractBalanceTxn = await toxtokencontract.checkContractBalance()
  console.log("ToxToken Contract Balance:", newContractBalanceTxn);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
