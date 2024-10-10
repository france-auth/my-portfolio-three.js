"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Globe from 'react-globe.gl';
import Button from '../ui/Button';

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
            <Image 
              src="/assets/grid2.svg" 
              alt='grid-1' 
              width={1} height={1}
              className='w-full sm:h-[276px] h-fit object-contain'/>
              <div>
                <p className='grid-headtext'>Tech Stack</p>
                <p className='grid-subtext'>I specialize in JavaScript/TypeScript with a focus on React and Next.js ecosystems.</p>
              </div>
          </div>
        </div>
        <div className='col-span-1 xl:row-span-4'>
          <div className='grid-container'>
            <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
              <Globe
                height={326}
                width={326}
                backgroundColor='rgba(0,0,0,0)'
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
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
              className='w-full md:h-[126px] s,:h-[276px] h-fit object-cover sm:object-top'
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