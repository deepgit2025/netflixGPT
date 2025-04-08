import React from 'react'
import { logo_img } from '../utils/constant'

const Header = () => {
  return (
    <div className='flex z-10 absolute start-0 top-0'>
        <div className="image w-[80px]">
          <img src={logo_img} alt="logo-image" className='h-full w-full object-fill'/>
        </div>
    </div>
  )
}

export default Header
