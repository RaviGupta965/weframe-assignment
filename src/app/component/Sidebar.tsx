import React from 'react'
import Navheader from '../Navigation-utils/Navheader'
import Navigationitem from '../Navigation-utils/Navigationitem'
import NavFooter from '../Navigation-utils/NavFooter'
interface SidebarProps {
  toggleSidebar: () => void;
}
const Sidebar: React.FC<SidebarProps> = ({ toggleSidebar }) => {
  return (
    <div className='bg-[#11455D] flex flex-col h-[100%] sticky w-[max(22vw,240px)] py-6'>
      <Navheader toggleSidebar={toggleSidebar} />
      <Navigationitem />
      <NavFooter />
    </div>
  )
}

export default Sidebar
