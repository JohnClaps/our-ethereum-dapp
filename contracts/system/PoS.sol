// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PoSWithTransactionVolume {
    address public owner;
    uint256 public minimumStake; // Minimum transaction volume required for staking
    uint256 public totalStakedVolume; // Total transaction volume staked by miners
    
    struct Miner {
        uint256 transactionVolume;
        uint256 stakedVolume;
        bool isValidator;
    }
    
    mapping(address => Miner) public miners;
    address[] public validators;

    constructor(uint256 _minimumStake) {
        owner = msg.sender;
        minimumStake = _minimumStake;
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can execute this");
        _;
    }
    
    modifier onlyValidator() {
        require(miners[msg.sender].isValidator, "Only validator can execute this");
        _;
    }
    
    event MinerStaked(address miner, uint256 stakedVolume);
    event ValidatorSelected(address validator);
    event ValidatorRemoved(address validator);

    // Function to track transaction volume of miners
    function recordTransaction(address miner, uint256 transactionValue) public onlyOwner {
        miners[miner].transactionVolume += transactionValue;
    }
    
    // Function to stake transaction volume as a miner
    function stakeVolume() public {
        require(miners[msg.sender].transactionVolume >= minimumStake, "Insufficient transaction volume to stake");

        miners[msg.sender].stakedVolume = miners[msg.sender].transactionVolume;
        miners[msg.sender].isValidator = true;
        totalStakedVolume += miners[msg.sender].stakedVolume;
        validators.push(msg.sender);

        emit MinerStaked(msg.sender, miners[msg.sender].stakedVolume);
        emit ValidatorSelected(msg.sender);
    }

    // Select a validator randomly (for simplicity, based on index)
    function selectValidator() public view onlyOwner returns (address) {
        require(validators.length > 0, "No validators available");
        uint256 randomIndex = block.timestamp % validators.length; // Simple random based on timestamp
        return validators[randomIndex];
    }

    // Function to approve a transaction (called by validator)
    function approveTransaction(uint256 transactionId) public onlyValidator {
        // Logic to approve transaction with ID transactionId
        // This can include verifying the transaction, updating ledger, etc.
    }

    // Remove a validator for bad behavior (only by the owner)
    function removeValidator(address validator) public onlyOwner {
        require(miners[validator].isValidator, "Address is not a validator");

        miners[validator].isValidator = false;
        miners[validator].stakedVolume = 0;
        totalStakedVolume -= miners[validator].stakedVolume;

        // Remove from validators array
        for (uint256 i = 0; i < validators.length; i++) {
            if (validators[i] == validator) {
                validators[i] = validators[validators.length - 1];
                validators.pop();
                break;
            }
        }

        emit ValidatorRemoved(validator);
    }

    // Function to get the total number of validators
    function getValidatorsCount() public view returns (uint256) {
        return validators.length;
    }
}
