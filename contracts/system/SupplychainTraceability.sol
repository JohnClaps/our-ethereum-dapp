// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SupplyChain {
    struct Batch {
        uint256 batchId;
        string mineralType;
        uint256 quantity;
        address currentOwner;
    }

    mapping(uint256 => Batch) public batches;
    uint256 public batchCount;

    function createBatch(string memory mineralType, uint256 quantity, address initialOwner) public {
        batchCount++;
        batches[batchCount] = Batch(batchCount, mineralType, quantity, initialOwner);
    }

    function transferOwnership(uint256 batchId, address newOwner) public {
        require(msg.sender == batches[batchId].currentOwner, "Not the owner");
        batches[batchId].currentOwner = newOwner;
    }

    function getBatchDetails(uint256 batchId) public view returns (string memory, uint256, address) {
        Batch memory batch = batches[batchId];
        return (batch.mineralType, batch.quantity, batch.currentOwner);
    }
}
