"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <header className='fixed top-0 right-0 left-0 z-50 bg-black/90'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center py-5 mx-auto c-space'>
          <Link href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
            Francis
          </Link>

          <Image
            className='w-6 h-6 cursor-pointer' 
            width={1} height={1}
            onClick={toggleMenu}
            src={isOpen 
                  ? "/assets/close.svg" 
                  : "/assets/menu.svg"
                } 
            alt='toggle' 
          />
        </div>
      </div>
    </header>
  )
}

export default Navbar