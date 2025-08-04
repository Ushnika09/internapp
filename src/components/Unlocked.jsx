import React from 'react'
import br from '../assets/1st.png'
import silver from '../assets/2nd.png'
import gold from '../assets/3rd.png'
import tick from '../assets/tick.png'

function Unlocked() {
  return (
          <div className='flex flex-wrap gap-[1.25rem]'>

        <div className=' shadow-2xl px-[1.5rem] rounded-2xl flex flex-col w-[22rem] my-[2rem] bg-amber-800/30 text-amber-800 justify-center items-center border-amber-800 border-2 py-[2.5rem] relative'>
          <img src={tick} alt="" className='absolute -right-5 -top-5 w-[2.5rem] '/>
          <img className='w-[3.5rem]' src={br} alt="" />
          <h1 className='pt-2.5 pb-1 font-semibold text-[1.25rem]'>Bronze</h1>
          <h1 className=''>₹1,000</h1>
          <h1 className='py-3'>Certificate + Fundsy Sticker Pack</h1>
          <h1 className='py-'>Unlocked!</h1>
        </div>

        <div className=' shadow-2xl px-[1.5rem] rounded-2xl flex flex-col w-[22rem] my-[2rem] bg-gray-800/30 text-gray-700 justify-center items-center border-gray-800 border-2 py-[2.5rem] relative'>
          <img src={tick} alt="" className='absolute -right-5 -top-5 w-[2.5rem] '/>
          <img className='w-[3.5rem]' src={silver} alt="" />
          <h1 className='pt-2.5 pb-1 font-semibold text-[1.25rem]'>Bronze</h1>
          <h1 className=''>₹1,000</h1>
          <h1 className='py-3'>Certificate + Fundsy Sticker Pack</h1>
          <h1 className='py-'>Unlocked!</h1>
        </div>

        <div className=' shadow-2xl px-[1.5rem] rounded-2xl flex flex-col w-[22rem] my-[2rem] bg-yellow-200/60 text-yellow-600 justify-center items-center border-yellow-500 border-2 py-[2.5rem] relative'>
          <img src={tick} alt="" className='absolute -right-5 -top-5 w-[2.5rem] '/>
          <img className='w-[3.5rem]' src={gold} alt="" />
          <h1 className='pt-2.5 pb-1 font-semibold text-[1.25rem]'>Bronze</h1>
          <h1 className=''>₹1,000</h1>
          <h1 className='py-3'>Certificate + Fundsy Sticker Pack</h1>
          <h1 className='py-'>Unlocked!</h1>
        </div>
      </div>
  )
}

export default Unlocked