// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MineralRoyalties {
    address payable public owner;
    uint256 public royaltyRate; // In percentage (e.g., 5% would be 500 basis points)
    
    mapping(address => uint256) public production;

    constructor(uint256 _royaltyRate) {
        owner = payable(msg.sender);
        royaltyRate = _royaltyRate;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    function recordProduction(address miner, uint256 amount) public onlyOwner {
        production[miner] += amount;
    }

    function calculateRoyalty(address miner) public view returns (uint256) {
        return (production[miner] * royaltyRate) / 10000;
    }

    function distributeRoyalty(address payable miner) public payable {
        uint256 royalty = calculateRoyalty(miner);
        require(address(this).balance >= royalty, "Insufficient balance");
        miner.transfer(royalty);
    }

    receive() external payable {}
}
