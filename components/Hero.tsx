import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='min-h-screen flex flex-col w-full relative'>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-24 c-space gap-3'>
        <p className='sm:text-2xl text-xl font-medium text-white text-center'>Hi, I&apos;m Francis 
          <Image 
            alt='waving hand'
            src={'/assets/waving-hand.png'}
            width={1} height={1}
            className='waving-hand w-6 h-6 sm:w-7 sm:h-7 mb-[6px] ml-[6px] sm:mb-2 sm:ml-2'
          />
        </p>
        <p className='hero_tag text-gray_gradient'>
          Transforming Designs into Seamless User Experiences.
        </p>
      </div>
    </section>
  )
}

export default Hero