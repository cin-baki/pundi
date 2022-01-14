// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract CheckContract {

    function isContract(address _addr) internal returns (bool isContract){
        uint32 size;
        assembly {
            size := extcodesize(_addr)
        }
        return (size > 0);
    }

    function test_call() public returns (bool){
        require(!isContract(msg.sender), "Not allow call from smart contract");
        return !isContract(msg.sender);
    }
}