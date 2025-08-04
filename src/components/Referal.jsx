import React from 'react'
import copy from '../assets/copy.png'

function Referal() {
  return (
    <div className='bg-white flex-row my-[2rem] mx-[3rem] rounded-2xl shadow-2xl border border-[#098A7C]'>
      <div className='px-[4rem] py-[2rem]'>
        <h1 className='text-[#098A7C] text-2xl font-medium'>Share Your Referral Code</h1>
        <h1 className='text-[1rem] text-[#09AA9C] my-2'>Spread the word about Fundsy and help more people discover our platform!</h1>

        <div className='bg-teal-100/50 border-teal-200 border p-[1.5rem] flex justify-between rounded-2xl mt-6'>
          <div>
            <h1 className='text-[#098A7C] text-[1rem]'>Your unique referral code:</h1>
            <h1 className='font-bold text-[#098A7C] '>USHNI2025</h1>
          </div>
          <div className='flex rounded-2xl px-6 py-2 items-center text-white bg-[#098A7C]'>
            <img className='h-[1.5rem]' src={copy} alt="" />
            <h1 className='ml-3 text-[1rem] font-medium'>Copy Code</h1>
          </div>
        </div>

        <h1 className='text-center text-[1rem] text-[#098A7C] mt-5'>💡 Pro tip: Share your code on social media, with friends, or in your network to maximize your impact!</h1>
      </div>
    </div>
  )
}

export default Referal