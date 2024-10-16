import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { TextGenerateEffect } from '@/components/ui/TextGenerateEAffect';
import { BackgroundLines } from '@/components/ui/BackgroundLines';

const Hero = () => {
  return (
    <section className='min-h-screen flex flex-col w-full relative'>
      <div className='w-full md:w-[680px] lg:w-[950px] mx-auto flex flex-col sm:mt-36 mt-40 c-space gap-3 items-center'>
        <p className='sm:text-2xl md:text-[26px] text-xl font-medium text-white text-center'>Hi, I&apos;m Francis 
          <Image 
            alt='waving hand'
            src={'/assets/waving-hand.png'}
            width={1} height={1}
            className='waving-hand w-6 h-6 sm:w-7 sm:h-7 md:w-[30px] md:h-[30px] mb-2 ml-[6px] sm:ml-2'
          />
        </p>
        <div className='flex flex-col justify-center items-center md:max-w-[550px] lg:max-w-[800px]'>
          <BackgroundLines className='absolute'/>
          <TextGenerateEffect 
            className='hero_tag relative'
            duration={1.15}
            words='Transforming Designs into Seamless User Experiences'
          />
        </div>
      </div>
        
      <div className="absolute bottom-24 sm:bottom-7 left-0 right-0 w-full c-space">
          <Button 
            name="Let's work together"
            href='#about' 
            isBeam 
            containerClass='sm:w-fit w-full sm:min-w-96' 
            linkClass='w-fit' 
          />
      </div>
    </section>
  )
}

export default Hero