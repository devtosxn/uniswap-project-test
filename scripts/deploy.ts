import { ethers } from "hardhat";

const main = async () => {
  const ToxTokenFactory = await ethers.getContractFactory("ToxToken");
  const toxtokencontract = await ToxTokenFactory.deploy();

  await toxtokencontract.deployed();

  console.log("ToxToken Contract deployed to:", toxtokencontract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
