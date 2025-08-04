import React from 'react'
import donation from '../assets/donation.png'
import money from '../assets/money.png'
import refer from '../assets/refer.png'
import active from '../assets/active.png'


function Hero() {
  return (
    <div className='flex  mx-[3rem] justify-between my-[1.5rem]'>
        <div className='py-[1.5rem] bg-white flex flex-col rounded-2xl shadow border border-[#098A7C]'>
            <div className='flex justify-between py-2 px-6 gap-[12rem] '>
                <h1>Total Donations</h1>
                <img className='h-[3rem]' src={money} alt="" />
            </div>
            <h1 className='px-6 text-2xl font-bold'>₹12,500</h1>
            <h1 className='px-6 text-[0.7rem]'>Great progress towards your goal!</h1>
        </div>

        <div className='py-[1.5rem] bg-white flex flex-col rounded-2xl shadow border border-[#098A7C]'>
            <div className='flex justify-between py-2 px-6 gap-[9rem] '>
                <h1>Referral Code</h1>
                <img className='h-[3rem]' src={refer} alt="" />
            </div>
            <h1 className='px-6 text-2xl font-bold'>USHNI2025</h1>
            <h1 className='px-6 text-[0.7rem]'>Share this code to earn more!</h1>
        </div>

        <div className='py-[1.5rem] bg-white flex flex-col rounded-2xl shadow border border-[#098A7C]'>
            <div className='flex justify-between py-2 px-6 gap-[9rem] '>
                <h1>Active Referrals</h1>
                <img className='h-[3rem]' src={active} alt="" />
            </div>
            <h1 className='px-6 text-2xl font-bold'>₹12,500</h1>
            <h1 className='px-6 text-[0.7rem]'>People you've referred</h1>
        </div>
        
    </div>
  )
}

export default Hero