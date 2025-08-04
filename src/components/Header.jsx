import React from 'react'
import dash from '../assets/dash.png'
import login from '../assets/login.png'
import signup from '../assets/signup.png'
import lead from '../assets/leader.png'
import { Link } from 'react-router-dom'
import Logo from './Logo'

function Header() {
  return (
    <>
      <div className='flex  items-center justify-between shadow h-[4rem] w-full'>
        
          <Logo/>

        <div className='flex flex-row gap-4 mr-6  hover:text-white my-4 '>
          <Link to='/'  className='flex rounded-2xl px-6 py-2 items-center  text-black active:bg-[#098A7C] hover:bg-teal-100/80'>
          <img src={dash} className='h-[1.5rem] mr-2' alt="" />
          <div>Dashboard</div>
        </Link>

        <Link to='leaderboard' className='flex text-black px-6 py-2 items-center rounded-2xl  active:bg-[#098A7C] hover:bg-teal-100/80 '>
          <img src={lead} className='h-[1.5rem] mr-2' alt="" />
          <div>Leaderboard</div>
        </Link>
      
        <Link to='login' className='flex  text-black px-6 py-2 items-center rounded-2xl  active:bg-[#098A7C] hover:bg-teal-100/80'>
          <img src={login} className='h-[1.5rem] mr-2' alt="" />
          <div>Login</div>
        </Link>

        <Link to='signup' className='flex  px-6 py-2 items-center rounded-2xl hover:bg-teal-100/80  text-black active:bg-[#098A7C]'>
          <img src={signup} className='h-[1.5rem] mr-2' alt="" />
          <div>Signup</div>
        </Link>
        </div>

        
    </div>
    </>
  )
}

export default Header