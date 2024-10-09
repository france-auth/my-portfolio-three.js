import React from 'react';
import Image from 'next/image';
import Globe from 'react-globe.gl';

const About = () => {
  return (
    <section className='c-space my-20' id='about'>
      <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'> 
            <Image 
              src="/assets/grid1.svg" 
              alt='grid-1' 
              width={10} height={10}
              className='w-full sm:h-[276px] h-fit object-contain'
            />
            <p className='grid-headtext'>
              Hi, I&apos;m Francis Authority
            </p>
            <p className='grid-subtext'>
              With 2 years of experience , I have honed my skills in frontend development with a focus on creating user-friendly dynamic and responsive websites.
            </p>
          </div>
        </div>

        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <Image 
              src="/assets/grid2.svg" 
              alt='grid-1' 
              width={10} height={10}
              className='w-full sm:h-[276px] h-fit object-contain'/>
              <div>
                <p className='grid-headtext'>Tech Stack</p>
                <p className='grid-subtext'>I specialize in JavaScript/TypeScript with a focus on React and Next.js ecosystems.</p>
              </div>
          </div>
        </div>

        <div className='col-span-1 xl:row-span-4'>
          <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
            <Globe
              height={326}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About