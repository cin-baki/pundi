const { ethers, upgrades } = require('hardhat');
const assert = require("assert");
describe('CheckContract', async () => {
  it('deploys', async function () {
    const DangV1Factory = await ethers.getContractFactory('CheckContract');
    DangV1 = await DangV1Factory.deploy();
  });

  it('check can not pass', async () => {
    const CallWithFunctionFactory = await ethers.getContractFactory('CallWithFunction');
    CallWithFunction_ = await CallWithFunctionFactory.deploy();
    try {
    	await CallWithFunction_.callcontract(DangV1.address);
    	assert(false);
    }
    catch(err) {
    	assert(err);
    }
  });

  it('check pass because call to attack with constructor', async () => {
    const CallWithConstructorFactory = await ethers.getContractFactory('CallWithConstructor');
    assert.ok(await CallWithConstructorFactory.deploy(DangV1.address));

  });


});