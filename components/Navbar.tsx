"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { navLinks } from '@/data'

const NavItems = () => {
  return (
    <ul className='nav-ul'>
      {navLinks.map(({id, name, href}) => (
        <Link className={`nav-li 
          ${navLinks.length === id 
            ? 'md:pr-0' 
            : ''
          }`}
          key={id} href={href}>
          <li className='nav-li_a'>
            {name}
          </li>
        </Link>
      ))}
    </ul>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <header className='fixed py-1 top-0 right-0 left-0 z-50 bg-black/90'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center py-5 mx-auto c-space'>
          <Link href="/" className='text-neutral-400 font-bold text-3xl hover:text-white transition-colors'>
            FA
          </Link>

          <Image
            className='w-7 h-7 cursor-pointer hover:text-white focus:outline-none sm:hidden flex transition-all duration-700 ease-in-out'
            aria-label='Toggle Menu' 
            width={1} height={1}
            onClick={toggleMenu}
            alt='toggle' 
            src={isOpen 
                  ? "/assets/close.svg" 
                  : "/assets/menu.svg"
                } 
          />
          <nav className='sm:flex hidden'>
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar rounded-br-2xl rounded-bl-2xl
        ${isOpen 
          ? 'max-h-screen' 
          : 'max-h-0'}`
      }>
        <nav className='p-5'>
          <NavItems />
        </nav>
      </div>
    </header>
  )
}

export default Navbar