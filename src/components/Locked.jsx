import React from 'react'
import plat from '../assets/4th.png'
import  di from '../assets/5th.png'
import legend from '../assets/6th.png'
import block from '../assets/block.png'


function Locked() {
  return (
    <div className='flex flex-wrap gap-[1.25rem]'>

        <div className=' shadow-2xl px-[1.5rem] rounded-2xl flex flex-col w-[22rem] my-[2rem] bg-neutral-400/30 text-neutral-400 justify-center items-center border-neutral-400 border-2 py-[2.5rem] relative'>
          <img src={block} alt="" className='absolute -right-4 -top-4 w-[2rem] p-1 bg-white rounded-full'/>
          <img className='w-[3.5rem]' src={plat} alt="" />
          <h1 className='pt-2.5 pb-1 font-semibold text-[1.25rem]'>Bronze</h1>
          <h1 className=''>₹1,000</h1>
          <h1 className='py-3'>Certificate + Fundsy Sticker Pack</h1>
        </div>

        <div className=' shadow-2xl px-[1.5rem] rounded-2xl flex flex-col w-[22rem] my-[2rem] bg-neutral-400/30 text-neutral-400 justify-center items-center border-neutral-400 border-2 py-[2.5rem] relative'>
          <img src={block} alt="" className='absolute -right-4 -top-4 w-[2rem] p-1 bg-white rounded-full'/>
          <img className='w-[3.5rem]' src={di} alt="" />
          <h1 className='pt-2.5 pb-1 font-semibold text-[1.25rem]'>Bronze</h1>
          <h1 className=''>₹1,000</h1>
          <h1 className='py-3'>Certificate + Fundsy Sticker Pack</h1>
        </div>

        <div className=' shadow-2xl px-[1.5rem] rounded-2xl flex flex-col w-[22rem] my-[2rem] bg-neutral-400/30 text-neutral-400 justify-center items-center border-neutral-400 border-2 py-[2.5rem] relative'>
          <img src={block} alt="" className='absolute -right-4 -top-4 w-[2rem] p-1 bg-white rounded-full'/>
          <img className='w-[3.5rem]' src={legend} alt="" />
          <h1 className='pt-2.5 pb-1 font-semibold text-[1.25rem]'>Bronze</h1>
          <h1 className=''>₹1,000</h1>
          <h1 className='py-3'>Certificate + Fundsy Sticker Pack</h1>
        </div>

    </div>
  )
}

export default Locked