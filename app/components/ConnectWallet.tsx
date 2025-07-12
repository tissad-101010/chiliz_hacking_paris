'use client';

import { ethers, formatEther } from 'ethers';
import { useState, useEffect } from 'react';

declare global {
  interface Window {
    ethereum?: any;
  }
}

const spicyRpcUrl = 'https://spicy-rpc.chiliz.com/';

export default function ConnectWallet() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [provider, setProvider] = useState<ethers.JsonRpcProvider | null>(null);

  useEffect(() => {
    const newProvider = new ethers.JsonRpcProvider(spicyRpcUrl);
    setProvider(newProvider);
  }, []);

  const connectWallet = async () => {
    if (typeof window === 'undefined' || !window.ethereum) {
      alert('MetaMask has not been installed.');
      return;
    }

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setWalletAddress(accounts[0]);
    } catch (err) {
      console.error('Connexion error MetaMask :', err);
    }
  };

  const getBalance = async (address: string) => {
    if (!provider) {
      console.error('Provider is not initialized');
      return;
    }
    try {
      const balanceBigNumber = await provider.getBalance(address);
      const balanceInChz = formatEther(balanceBigNumber);
      setBalance(balanceInChz);
    } catch (error) {
      console.error('Error fetching balance:', error);
    }
  };

  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      if (typeof window === 'undefined' || !window.ethereum) return;

      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        }
      } catch (err) {
        console.error(err);
      }
    };

    checkIfWalletIsConnected();
  }, []);

  useEffect(() => {
    if (walletAddress && provider) {
      getBalance(walletAddress);
    }
  }, [walletAddress, provider]);

  return (
    <div>
      {walletAddress ? (
        <div>
          <p>Connected: {walletAddress}</p>
          {balance !== null ? (
            <p>Your balance: {balance} CHZ</p>
          ) : (
            <p>Loading balance...</p>
          )}
        </div>
      ) : (
        <button onClick={connectWallet} className="px-4 py-2 bg-blue-600 text-white rounded">
          Connect to MetaMask
        </button>
      )}
    </div>
  );
}
