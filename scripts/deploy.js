const { ethers, upgrades } = require('hardhat');

async function main() {
	const DangV1Factory = await ethers.getContractFactory('CheckContract');
	console.log("Deploying ... ")
	DangV1 = await DangV1Factory.deploy();
	console.log("CheckContract deployed to:", DangV1.address);

	const CallWithFunctionFactory = await ethers.getContractFactory('CallWithFunction');
	console.log("Deploying ... ")
	CallWithFunction_ = await CallWithFunctionFactory.deploy();
	console.log("CheckContract deployed to:", CallWithFunction_.address);

	const CallWithConstructorFactory = await ethers.getContractFactory('CallWithConstructor');
	console.log("Deploying ... ")
	CallWithConstructorFactory_ = await CallWithConstructorFactory.deploy(DangV1.address);
	console.log("CheckContract deployed to:", CallWithConstructorFactory_.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
