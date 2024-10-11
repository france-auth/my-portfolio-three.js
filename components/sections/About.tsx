"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Button from '../ui/Button';
import { technologies } from '@/data';

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

const GlobeComponent = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set the mounted flag to true only on the client side
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Don't render the component during server-side rendering
    return null;
  }

  return (
    <Globe
      height={326}
      width={326}
      backgroundColor='rgba(0,0,0,0)'
      showAtmosphere
      showGraticules
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
    />
  );
};

const About = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('francis.i.authority@gmail.com');

    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }

  return (
    <section className='c-space my-20' id='about'>
      <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'> 
            <Image 
              src="/assets/grid1.svg" 
              alt='grid-1' 
              width={1} height={1}
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
            <div className='flex flex-wrap items-center w-full h-fit lg:h-[276px] object-contain'>
              <div className='w-full flex flex-wrap justify-center items=center gap-10 p-2 xl:p-0 '>
              {technologies.map(({id, name, icon}) => (
                <div key={id} className='flex gap-8 space-y-12'>
                  <div className='flex flex-col items-center justify-between space-y-1 bg-black-300 p-4 shadow-xl rounded-md  xl:w-20 box-border'>
                    <Image 
                      src={icon} 
                      alt='icon' 
                      width={1} height={1}
                      className={` w-16 xl:w-10 xl:h-auto h-fit object-contain 
                        ${id !== 6 ? 'rounded-lg' : ''}
                      `} 
                    />
                    <p className='text-white text-xs xl:text-[10px] text-center'>
                      {name}
                    </p>
                  </div>
                </div>
              ))}
              </div>
            </div>
              <div>
                <p className='grid-headtext'>Tech Stack</p>
                <p className='grid-subtext'>I specialize in JavaScript/TypeScript with a focus on React and Next.js ecosystems.</p>
              </div>
          </div>
        </div>
        <div className='col-span-1 xl:row-span-4'>
          <div className='grid-container'>
            <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
              <GlobeComponent />
            </div>
            <div>
              <p className='grid-headtext'>
              I’m very flexible with time zone communications & locations
              </p>
              <p className='grid-subtext'>
                I&apos;m based in Nigeria, with remote work available.
              </p>
              <Button 
                name="Contact Me" 
                isBeam 
                containerClass="w-full mt-10"
                href='#contacts' 
                linkClass='w-fit' 
              />
            </div>
          </div>
        </div>
        <div className='xl:col-span-2 xl:row-span-3'>
          <div className='grid-container'>
            <Image 
              src={'/assets/grid3.svg'} 
              alt='grid-3'
              width={1}
              height={1}
              className='w-full sm:h-[266px] h-fit object-contain'
            />
            <div>
              <p className='grid-headtext'>
                My Passion for Coding
              </p>
              <p className='grid-subtext'>
                I love solving problems and building things through code. Programming isn&apos;t just my profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
          </div>
        <div className='xl:col-span-1 xl:row-span-2'>
          <div className='grid-container'>
            <Image
              src={'/assets/grid4.svg'}
              alt='grid-4'
              width={1}
              height={1}
              className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'
            />
            <div className='space-y-2'>
              <p className='grid-subtext text-center'>
                Contact me
              </p>
              <div className='copy-container' onClick={handleCopy}>
                <Image
                  src={isCopied 
                    ? 'assets/tick.svg' 
                    : 'assets/copy.svg'
                  }
                  alt='copy'
                  width={1}
                  height={1}
                  className='w-8 h-8'                
                />
                <p className='grid-subtext lg:text-xl md:text-lg font-medium text-gray_medium '>
                  francis.i.authority@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About