import React from 'react'
import rewards from '../assets/rewards.png'
import Locked from './Locked'
import Unlocked from './Unlocked'

function Rewards() {
  return (
    <div className='bg-white flex-row my-[2rem] mx-[3rem] rounded-2xl shadow-2xl border border-[#098A7C] px-[2rem] py-[2rem]'>

        <div className='flex gap-2  items-center'>
          <img className='h-[2rem]' src={rewards} alt="" />
          <h1 className='text-[1.5rem] font-medium'>Reward Tiers</h1>
        </div>
        <h1>Unlock amazing rewards as you reach fundraising milestones!</h1>

        <Unlocked/>
        <Locked/>

    </div>
  )
}

export default Rewards