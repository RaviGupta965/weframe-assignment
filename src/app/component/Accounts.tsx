import React from 'react'
import Card1 from '../accounts-utils/Card1'
import Card2 from '../accounts-utils/Card2'
import Card3 from '../accounts-utils/Card3'

function Accounts() {
  return (
    <div className='flex flex-row flex-wrap gap-2 p-6'>
      <Card1 />
      <Card2/>
      <Card3/>
    </div>
  )
}

export default Accounts
