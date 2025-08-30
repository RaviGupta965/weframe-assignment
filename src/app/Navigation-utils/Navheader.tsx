import React from 'react'
import Image from 'next/image'
interface NavheaderProps {
  toggleSidebar: () => void;
}
const Navheader: React.FC<NavheaderProps> = ({ toggleSidebar }) => {
    return (
        <div className='mx-auto mb-3.5'>
            <div onClick={toggleSidebar} className='absolute top-1.5 right-1.5 lg:hidden text-[#231F20] rounded-full p-1 bg-[#57C8CE]'>X</div>
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
