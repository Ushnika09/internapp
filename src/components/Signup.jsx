import React, { useState } from 'react';
import signup from '../assets/signup.png';
import mail from '../assets/mail.png';
import lock from '../assets/lock.png';
import see from '../assets/see.png';
import unsee from '../assets/unsee.png';
import circle from '../assets/circle.png';
import check from '../assets/check.png';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agree, setAgree] = useState(false);

  return (
    <div className='bg-teal-100/50 min-h-screen flex flex-col justify-center items-center gap-4 text-[#09AA9C] px-4 py-[3.5rem]'>
      <div>
        <img className='h-[4rem] bg-[#09AA9C] p-4 rounded-2xl' src={signup} alt="signup icon" />
      </div>
      <h1 className='text-3xl font-bold'>Create Account</h1>
      <p>Join Fundsy intern community</p>

      <div className='flex flex-col border border-[#09AA9C] p-6 rounded-2xl bg-white shadow-lg justify-center items-center w-full max-w-md'>
        <h1 className='font-semibold text-2xl mb-4'>Sign Up</h1>

        <div className='w-full'>
          <label className='block py-2 text-sm'>Full Name</label>
          <input
            type='text'
            placeholder='Enter Your Name'
            className='h-10 w-full border border-[#09AA9C] rounded-2xl px-4 focus:outline-offset-2 outline-[#09AA9C] focus:outline-2 mb-2'
          />
        </div>

        {/* Email */}
        <div className='w-full'>
          <label className='block py-2 text-sm'>Email Address</label>
          <div className='relative mb-4'>
            <img src={mail} className='h-[1.5rem] absolute left-3.5 top-2.5' alt="mail icon" />
            <input
              type='email'
              placeholder='Enter Your Email'
              className='h-10 w-full border border-[#09AA9C] rounded-2xl px-[3rem] focus:outline-offset-2 outline-[#09AA9C] focus:outline-2'
            />
          </div>
        </div>

        {/* Password */}
        <div className='w-full'>
          <label className='block py-2 text-sm'>Password</label>
          <div className='relative mb-4'>
            <img src={lock} className='h-[1.5rem] absolute left-3.5 top-2.5' alt="lock icon" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Create a Password'
              className='h-10 w-full border border-[#09AA9C] rounded-2xl px-[3rem] focus:outline-offset-2 outline-[#09AA9C] focus:outline-2'
            />
            <img
              src={showPassword ? see : unsee}
              onClick={() => setShowPassword(!showPassword)}
              className='h-[1.2rem] absolute right-4 top-3 cursor-pointer'
              alt="toggle visibility"
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div className='w-full'>
          <label className='block py-2 text-sm'>Confirm Password</label>
          <div className='relative mb-4'>
            <img src={lock} className='h-[1.5rem] absolute left-3.5 top-2.5' alt="lock icon" />
            <input
              type={showConfirm ? 'text' : 'password'}
              placeholder='Re-enter Password'
              className='h-10 w-full border border-[#09AA9C] rounded-2xl px-[3rem] focus:outline-offset-2 outline-[#09AA9C] focus:outline-2'
            />
            <img
              src={showConfirm ? see : unsee}
              onClick={() => setShowConfirm(!showConfirm)}
              className='h-[1.2rem] absolute right-4 top-3 cursor-pointer'
              alt="toggle visibility"
            />
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className='flex items-center gap-2 w-full text-sm mb-4 cursor-pointer' onClick={() => setAgree(!agree)}>
          <img src={agree ? check : circle} className='h-[1rem]' alt="checkmark" />
          <span>I agree to the Terms and Conditions</span>
        </div>

        {/* Submit Button */}
        <button
          className='bg-[#09AA9C] hover:bg-[#078b82] transition-all text-white font-semibold py-2 px-6 rounded-2xl w-full'
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
