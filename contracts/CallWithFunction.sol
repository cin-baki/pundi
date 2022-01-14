// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import "./CheckContract.sol";
contract CallWithFunction {

    function callcontract(address SCinput) external returns (bool){
        bool a = CheckContract(SCinput).test_call();
        return a;
    }
}