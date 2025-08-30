import React from 'react'

function Navigationitem() {
  return (
    <div className='flex flex-col w-[90%] h-[90%] mx-auto font-weight-[400px] '>
        <ul className='px-2 gap-3'>
          <li className='nav-heading active'>Home</li>
          <li className='nav-heading'>Stages & Checklist</li>
          <li className='nav-heading'>Upload Docs</li>
          <li className='nav-heading'>Preferred Vendors</li>
          <li className='nav-heading'>Tech Stacks</li>
          <li className='nav-heading'>Targets</li>
          <li className='nav-heading'>Zee Sales Targets</li>
          <li className='nav-heading'>MAI Settings</li>
          <li className='nav-heading'>Zee Sales Targets</li>
          <li className='nav-heading'>Pending Questions</li>
        </ul>
    </div>
  )
}

export default Navigationitem
