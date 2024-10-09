import React from 'react';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';

const App = () => {
  return (
    <main className='max-w-7xl mx-auto relative'>
      <Navbar />
      <Hero />
      <About />
    </main>
  )
}

export default App