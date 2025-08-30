import React from 'react'
import Image from 'next/image'
function Navheader() {
    return (
        <div className='mx-auto mb-3.5'>
            <Image className='mx-auto' height={41} width={71} src='/Group.png' alt='logo' />
            <div className='text-[24px] mx-auto'>
                    <span className='text-[#231F20]'>
                        we
                    </span>
                    <span className='text-[#57C8CE]'>
                        frame
                    </span>
                    <span className='text-[#231F20]'>
                        tech
                    </span>
            </div>
        </div>
    )
}

export default Navheader
