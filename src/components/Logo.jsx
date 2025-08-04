import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <div>
        <Link to='/' className='flex ml-6 my-4 '>
          <div className='bg-[#09AA9C] p-4 w-[2.5rem] h-[2.5rem] justify-center text-white text-2xl items-center flex font-medium  rounded-xl' >F</div>
         <div className='text-[#09AA9C] ml-1.5 '>
          <h1 className='text-2xl font-bold'>Fundsy</h1> 
          <h1 className='text-[0.5rem] font-bold ml-1'>Intern Dashboard</h1>
         </div>
        </Link>
    </div>
  )
}

export default Logo