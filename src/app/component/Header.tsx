import Image from 'next/image'
import React from 'react'

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <div className="w-full px-6 border-b-[rgba(234,236,240,1)] border-b-2">
      <div className="py-5 flex flex-row justify-between items-center lg:justify-end gap-1">
        {/* Hamburger: visible on mobile only */}
        <div className="lg:hidden">
          <button
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
            className="p-2 focus:outline-none"
            type="button"
          >
            {/* Simple hamburger icon with bars */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
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