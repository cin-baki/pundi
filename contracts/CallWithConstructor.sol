// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import "./CheckContract.sol";
contract CallWithConstructor {
    bool public a;

    constructor(address SCinput) public {
        a = CheckContract(SCinput).test_call();
    }
}