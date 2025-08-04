import React from 'react'
import pro from '../assets/progress.png'

function Donation() {
  return (
        <div className='bg-white flex-col my-[2rem] mx-[3rem] rounded-2xl shadow-2xl border border-[#098A7C] px-[2rem] py-[1rem]'>
          <div className='flex items-center'>
            <img className='h-[1.5rem] ' src={pro} alt="" />
            <h1 className='text-[#098A7C] text-2xl font-semibold ml-1.5'>Fundraising Progress</h1>
          </div>
          
          <div className='flex justify-between my-2'>
            <h1 className='text-2xl font-bold'>₹12500</h1>
            <h1 className='text=[1rem] font-medium'>of ₹15000</h1>
          </div>
          
          <div className='w-full bg-teal-100/80 rounded-full my-4'>
            <div className='h-4 bg-[#098A7C] rounded-l-full' style={{width:'83%'}}></div>
          </div>

          <div className='flex justify-between my-2'>
            <h1 className='text=[1rem] font-medium'>₹2,500 remaining</h1>
            <h1 className='text=[1rem] font-medium'>83% Complete</h1>
          </div>
        </div>
  )
}

export default Donation