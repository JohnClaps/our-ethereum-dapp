// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IncentivesPenalties {
    address public regulator;

    struct Miner {
        uint256 rewardPoints;
        uint256 penalties;
    }

    mapping(address => Miner) public miners;

    constructor() {
        regulator = msg.sender;
    }

    modifier onlyRegulator() {
        require(msg.sender == regulator, "Only regulator");
        _;
    }

    function issueReward(address miner, uint256 points) public onlyRegulator {
        miners[miner].rewardPoints += points;
    }

    function issuePenalty(address miner, uint256 penaltyAmount) public onlyRegulator {
        miners[miner].penalties += penaltyAmount;
    }

    function getMinerDetails(address miner) public view returns (uint256, uint256) {
        return (miners[miner].rewardPoints, miners[miner].penalties);
    }
}
