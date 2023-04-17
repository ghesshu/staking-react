import React from 'react'
import SwapContent from '../pages/SwapContent'
import NavPanel from '../components/NavPanel'

const Swap = () => {
  return (
    <div className='bg-neutral-900 h-screen'>

    <div className="">
    <NavPanel pageContent={<SwapContent />} swapActive='bg-green-700 rounded-xl' />
    </div>
      
    </div>
  )
}

export default Swap
