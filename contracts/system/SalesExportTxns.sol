// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MineralSales {
    struct Transaction {
        address seller;
        address buyer;
        uint256 quantity;
        uint256 price;
        bool completed;
    }

    mapping(uint256 => Transaction) public transactions;
    uint256 public transactionCount;

    function createTransaction(address buyer, uint256 quantity, uint256 price) public {
        transactionCount++;
        transactions[transactionCount] = Transaction(msg.sender, buyer, quantity, price, false);
    }

    function confirmPayment(uint256 transactionId) public payable {
        Transaction storage txn = transactions[transactionId];
        require(msg.sender == txn.buyer, "Not the buyer");
        require(msg.value == txn.price, "Incorrect payment");

        payable(txn.seller).transfer(msg.value);
        txn.completed = true;
    }

    function getTransactionDetails(uint256 transactionId) public view returns (address, address, uint256, uint256, bool) {
        Transaction memory txn = transactions[transactionId];
        return (txn.seller, txn.buyer, txn.quantity, txn.price, txn.completed);
    }
}
