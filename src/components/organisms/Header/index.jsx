import React from 'react'
import Navbar from '../../molecules/Navbar'
import HeaderUtility from '../../molecules/HeaderUtility'
import Logo from '@/components/atoms/Logo'

const Header = () => {
  return (
    <header className='flex justify-between items-center py-4 sticky top-0 left-0 z-10 bg-white px-4 md:px-8 xl:px-12'>
        <Logo/>
        <Navbar/>
        <HeaderUtility/>
    </header>
  )
}

export default Header
