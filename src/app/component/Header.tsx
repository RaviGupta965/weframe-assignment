import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className=' w-[100%] px-6 border-b-[rgba(234,236,240,1)] border-b-2'>
      <div className='py-5 flex gap-1 flex-row justify-end items-center'>
        <div className=''>
          <Image height={16} width={16} src='/Settings.png' alt='actions' className='' />
        </div>
        <div className="relative w-[40px] h-[40px]">
          <Image height={36} width={40} src="/Avatar_Border.png" alt="Background" />
          <Image height={40} width={40} src="/Avatar.png" className="rounded-full absolute top-0 left-0" alt="Overlay" />
        </div>
      </div>
    </div>
  )
}

export default Header
