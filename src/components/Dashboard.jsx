import React from 'react'
import Header from './Header'
import Referal from './Referal'
import Hero from './Hero'
import Donation from './Donation'
import Rewards from './Rewards'

function Dashboard() {
  return (
    <>
      <div className='bg-teal-100/50  min-h-screen flex w-full flex-col text-[#098A7C]'>
      <h1 className='text-4xl font-bold mx-[3rem] mt-6'>Welcome back, Ushnika Kar! 👋</h1>
      <h1 className='text-[1rem] font-normal mx-[3rem] mb-6 mt-1.5'>Keep up the great work spreading the word about Fundsy!</h1>
      <Hero/>
      <Donation/>
      <Rewards/>
      <Referal/>
      </div>
    </>
  )
}

export default Dashboard