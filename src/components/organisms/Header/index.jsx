import React from 'react'
import Navbar from '../../molecules/Navbar'
import HeaderUtility from '../../molecules/HeaderUtility'
import Logo from '@/components/atoms/Logo'

const Header = () => {
  return (
    <header className='flex justify-between items-center px-16 py-4'>
        <Logo/>
        <Navbar/>
        <HeaderUtility/>
    </header>
  )
}

export default Header
