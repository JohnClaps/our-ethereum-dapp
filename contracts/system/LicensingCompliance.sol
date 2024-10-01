// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LicensingCompliance {
    address public regulator;

    struct Miner {
        bool isLicensed;
        uint256 licenseExpiry;
    }

    mapping(address => Miner) public miners;

    constructor() {
        regulator = msg.sender;
    }

    modifier onlyRegulator() {
        require(msg.sender == regulator, "Not the regulator");
        _;
    }

    function registerMiner(address miner, uint256 expiry) public onlyRegulator {
        miners[miner] = Miner(true, expiry);
    }

    function revokeLicense(address miner) public onlyRegulator {
        miners[miner].isLicensed = false;
    }

    function isMinerLicensed(address miner) public view returns (bool) {
        return miners[miner].isLicensed && block.timestamp < miners[miner].licenseExpiry;
    }
}
