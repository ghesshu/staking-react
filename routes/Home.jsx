import React from 'react'
import NavPanel from '../components/NavPanel'
import HomeContent from '../pages/HomeContent'
// const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");


const Home = () => {
   

    // const [active, setActive] = useState('');
  return (
    <div className='bg-neutral-900 h-screen'>

    <div className="">
    <NavPanel pageContent={<HomeContent />} homeActive='bg-green-700 rounded-xl' />
    </div>
      
    </div>
  )
}

export default Home
