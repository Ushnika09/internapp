import React, { useState } from 'react';
import login from '../assets/login.png';
import mail from '../assets/mail.png';
import lock from '../assets/lock.png';
import see from '../assets/see.png';
import unsee from '../assets/unsee.png';
import circle from '../assets/circle.png';
import check from '../assets/check.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleRemember = () => setRememberMe(!rememberMe);

  return (
    <div className='bg-teal-100/50 min-h-screen flex flex-col justify-center items-center gap-4 text-[#09AA9C] px-4 py-[3.5rem]'>
      <div>
        <img className='h-[4rem] bg-[#09AA9C] p-4 rounded-2xl hover:cursor-pointer' src={login} alt="login icon" />
      </div>
      <h1 className='text-3xl font-bold'>Welcome Back!</h1>
      <p>Sign in to your Fundsy intern account</p>

      <div className='flex flex-col border border-[#09AA9C] p-6 rounded-2xl bg-white shadow-lg justify-center items-center w-full max-w-md'>
        <h1 className='font-semibold text-2xl mb-4'>Sign In</h1>

        {/* Email Field */}
        <div className='w-full'>
          <label className='block py-2 text-sm pl-2' >Email Address</label>
          <div className='relative mb-4'>
            <img src={mail} className='h-[1.5rem] absolute left-3.5 top-2.5' alt="mail icon" />
            <input
              type='email'
              placeholder='Enter Your Email'
              className='h-10 w-full border border-[#09AA9C] rounded-2xl px-[3rem] focus:outline-offset-2 outline-[#09AA9C] focus:outline-2'
            />
          </div>
        </div>

        {/* Password Field */}
        <div className='w-full'>
          <label className='block py-2 text-sm pl-2'>Password</label>
          <div className='relative mb-4'>
            <img src={lock} className='h-[1.5rem] absolute left-3.5 top-2.5' alt="lock icon" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Enter Your Password'
              className='h-10 w-full border border-[#09AA9C] rounded-2xl px-[3rem] focus:outline-offset-2 outline-[#09AA9C] focus:outline-2'
            />
            <img
              src={showPassword ? see : unsee}
              onClick={togglePassword}
              className='h-[1.2rem] absolute right-4 top-3 cursor-pointer'
              alt="toggle visibility"
            />
          </div>
        </div>

        {/* Remember me + Forgot */}
        <div className='flex flex-row justify-between items-center w-full text-sm mb-4'>
          <div className='flex items-center gap-2 cursor-pointer' onClick={toggleRemember}>
            <img className='h-[1rem]' src={rememberMe ? check : circle} alt="checkbox" />
            <span>Remember me</span>
          </div>
          <span className='text-[#09AA9C] hover:underline cursor-pointer'>Forgot Password?</span>
        </div>

        {/* Sign In Button */}
        <button className='bg-[#09AA9C] hover:bg-[#078b82] transition-all text-white font-semibold py-2 px-6 rounded-2xl mt-2 w-full'>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
