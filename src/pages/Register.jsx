import React from 'react'
import { bg_img } from '../utils/constant'
import Header from '../components/Header'
import Signform from '../components/Signform'

const Register = () => {
  return (
    <div className='relative h-screen w-full flex flex-col justify-center items-center'>
      <Header/>
      <div className='absolute start-0 top-0 h-full w-full z-0'>
        <img src={bg_img} className='h-full w-full object-fill'></img>
      </div>
      <Signform/>
    </div>
  )
}

export default Register
