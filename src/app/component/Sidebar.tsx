import React from 'react'
import Navheader from '../Navigation-utils/Navheader'
import Navigationitem from '../Navigation-utils/Navigationitem'
import NavFooter from '../Navigation-utils/NavFooter'

function Sidebar() {
  return (
    <div className='bg-[#11455D] flex flex-col h-[100%] sticky w-[22vw] py-6'>
      <Navheader />
      <Navigationitem />
      <NavFooter />
    </div>
  )
}

export default Sidebar
