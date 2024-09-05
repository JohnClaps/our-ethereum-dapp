import React from 'react';
import { useRouter } from 'next/router';

// Mock authentication functions
const authenticateWithMetaMask = () => {
  console.log('Authenticating with MetaMask...');
  window.location.href = '/blank';
};

const authenticateWithCoinbase = () => {
  console.log('Authenticating with Coinbase...');
  window.location.href = '/blank';
};

const authenticateWithWalletConnect = () => {
  console.log('Authenticating with WalletConnect...');
  window.location.href = '/blank';
};

const authenticateWithFortmatic = () => {
  console.log('Authenticating with Fortmatic...');
  window.location.href = '/blank';
};

export default function Web3Auth() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <h1 className="text-2xl font-bold text-white mb-6">Select Your Web3 Authentication Option</h1>
      <div className="flex flex-col gap-4">
        <button
          onClick={authenticateWithMetaMask}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Recommended: Login with MetaMask
        </button>
        <button
          onClick={authenticateWithCoinbase}
          className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors"
        >
          Recommended: Login with Coinbase
        </button>
        <button
          onClick={authenticateWithWalletConnect}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Login with WalletConnect
        </button>
        <button
          onClick={authenticateWithFortmatic}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Login with Fortmatic
        </button>
      </div>
    </div>
  );
}
