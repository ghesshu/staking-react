import React, { useState, useEffect } from 'react';
import { stake } from '../contract/contract';
import { useRef } from 'react';
// import { ethers } from 'ethers';
import { formatEther } from 'ethers';

// import Web3 from 'web3';

const HomeContent = () => {
  

  const [address, setAddress] = useState("");
  const [bal, setBal] = useState('');
  const amountRef = useRef();

  const staking = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAddress(accounts[0]);

      const amtstr = amountRef.current.value;
      const amount = BigInt(amtstr);
      if (!amount) {
        alert("Please enter an amount.");
        return; // stop execution of the function
      }
      await stake(amount, accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };
  

  const unstake = async () => {
    // unstaking logic
  };

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        const balanceInWei = await window.ethereum.request({ method: 'eth_getBalance', params: [accounts[0], 'latest'] });
        const balanceInEther = formatEther(balanceInWei);
        setBal(balanceInEther)
        setAddress(accounts[0]);
      } catch (error) {
        setAddress("");
      }
    };
    fetchAddress();
  }, []);

  return (
    <div>
      <input className='text-black py-2 px-2 '  type="text" ref={amountRef} />
      <p>Connected Address: {address}</p>
      <p>Address Balance: {bal}</p>
      <div className="space-x-6 mt-8">
        <button className='bg-green-800 px-4 py-4 hover:bg-green-900'  onClick={staking}>Stake</button>
        <button className='bg-green-800 px-4 py-4 hover:bg-green-900' onClick={unstake}>Unstake</button>
      </div>
    </div>
  )
}

export default HomeContent;
