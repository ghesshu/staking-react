import React, { useState, useEffect } from 'react';
import { stake } from '../contract/contract';
import { useRef } from 'react';

const HomeContent = () => {

  const [address, setAddress] = useState("");
  const amountRef = useRef();

  const staking = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAddress(accounts[0]);
      const amount = amountRef.current.value;
      if (!amount) {
        alert("Please enter an amount.");
        return; // stop execution of the function
      }
      await stake(amount, accounts[0]);
    } catch (error) {
      alert('Connect Wallet');
    }
  };
  

  const unstake = async () => {
    // unstaking logic
  };

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
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
      <div className="space-x-6 mt-8">
        <button className='bg-green-800 px-4 py-4 hover:bg-green-900'  onClick={staking}>Stake</button>
        <button className='bg-green-800 px-4 py-4 hover:bg-green-900' onClick={unstake}>Unstake</button>
      </div>
    </div>
  )
}

export default HomeContent;
