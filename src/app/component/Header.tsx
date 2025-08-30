import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className="w-full px-6 border-b-[rgba(234,236,240,1)] border-b-2">
      <div className="py-5 flex flex-row justify-between items-center lg:justify-end gap-1">
        {/* Hamburger: visible on mobile only */}
        <div className="lg:hidden">
          Hamburger
        </div>

        {/* Settings icon & avatar: always visible */}
        <div className="flex flex-row items-center gap-2">
          <div>
            <Image height={16} width={16} src="/Settings.png" alt="actions" />
          </div>
          <div className="w-[40px] h-[40px]">
            <Image height={40} width={40} src="/Avatar.png" className="rounded-full" alt="Overlay" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
