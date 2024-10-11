import Link from 'next/link';
import React from 'react'

interface ButtonProps {
  href: string;
  name: string;
  isBeam: boolean;
  containerClass: string;
  linkClass: string;
}

const Button: React.FC<ButtonProps> = ({href, name, isBeam, containerClass, linkClass}) => {
  return (
    <Link href={href} className={`${linkClass}`}>
      <div className={`btn ${containerClass}`}>
        {isBeam && (
          <span className='relative flex h-3 w-3'>
            <span className='btn-ping' />
            <span className='btn-ping_dot' />
          </span>
        )}
        {name}
      </div>
    </Link>
  )
}

export default Button