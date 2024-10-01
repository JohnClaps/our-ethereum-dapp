// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MineralProduction {
    address public regulator;

    struct ProductionReport {
        address miner;
        string mineralType;
        uint256 quantity;
        uint256 timestamp;
    }

    ProductionReport[] public reports;

    constructor() {
        regulator = msg.sender;
    }

    function reportProduction(address miner, string memory mineralType, uint256 quantity) public {
        require(msg.sender == regulator, "Only regulator can report production");
        reports.push(ProductionReport(miner, mineralType, quantity, block.timestamp));
    }

    function getProductionReports() public view returns (ProductionReport[] memory) {
        return reports;
    }
}
