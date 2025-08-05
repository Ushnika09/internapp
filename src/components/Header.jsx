import React, { useState } from 'react'
import dash from '../assets/dash.png'
import login from '../assets/login.png'
import signup from '../assets/signup.png'
import lead from '../assets/leader.png'
import { Link } from 'react-router-dom'
import Logo from './Logo'

function Header() {
  let [active,setActive]=useState('dashboard')

  function handleactive(){

  }
  return (
    <>
      <div className='flex  items-center justify-between shadow h-[4rem] w-full'>
        
          <Logo/>

        <div className='flex flex-row gap-4 mr-6  my-4 '>

          <Link to='/' onClick={()=>setActive('dashboard')}  className={`flex rounded-2xl px-6 py-2 items-center  hover:bg-teal-200/55 ${active==='dashboard' ? 'bg-[#098A7C]  text-black' : 'bg-white'}  duration-300 transition-all`}>

          <img src={dash} className='h-[1.5rem] mr-2' alt="" />
          <div>Dashboard</div>
        </Link>

        <Link to='leaderboard' onClick={()=>setActive('lead')}  className={`flex rounded-2xl px-6 py-2 items-center hover:bg-teal-200/55 ${active==='lead' ? 'bg-[#098A7C]  text-black' : 'bg-white'}  duration-300 transition-all`}>

          <img src={lead} className='h-[1.5rem] mr-2' alt="" />
          <div>Leaderboard</div>
        </Link>
      
        <Link to='login' onClick={()=>setActive('in')}  className={`flex rounded-2xl px-6 py-2 duration-300 transition-all items-center hover:bg-teal-200/55 ${active==='in' ? 'bg-[#098A7C]  text-black' :'bg-white'}  `}>

          <img src={login} className='h-[1.5rem] mr-2' alt="" />
          <div>Login</div>
        </Link>

        <Link to='signup' onClick={()=>setActive('up')}  className={`flex rounded-2xl px-6 py-2 items-center duration-300 transition-all hover:bg-teal-200/55 ${active==='up' ? 'bg-[#098A7C] text-black' : 'bg-white'}  `}>

          <img src={signup} className='h-[1.5rem] mr-2' alt="" />
          <div>Signup</div>
        </Link>
        </div>

        
    </div>
    </>
  )
}

export default Header