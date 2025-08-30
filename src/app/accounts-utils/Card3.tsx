import React from 'react'
import Image from 'next/image'
function Card3() {
  return (
    <div className='gap-5 flex flex-col w-full sm:w-[48%] lg:w-[30%]'>
      <div className='border-1 gap-6 p-4 shadow-[rgba(16,24,40,0.05)] rounded-xl border-[rgba(234,236,240,1)]'>
        <div className='flex flex-col font-[600] text-[16px] mb-1 leading-6 space-y-1.5 text-start'>
          Key Insights & Feedback
        </div>

        <div className='flex flex-row justify-between gap-1'>
          <div className='flex flex-col gap-0.5'>
            <div className='font-[600] text-[30px] leading-9.5 space-y-7.5'>10%</div>
            <div className='font-[500] text-[14px] leading-5 space-y-3.5'>Sales Growth</div>
          </div>

          <div className='flex flex-col items-center gap-1'>
            <div>
              <Image className='inline-block' height={36} width={36} src="/image 14.png" alt='trend' />
            </div>

            <div className='rounded-[20px] border-1 px-3 py-0.5 bg-[rgba(213,242,255,0.5)] text-[rgba(39,157,212,1)] border-[rgba(186,233,255,1)]'>
              Top Performer
            </div>
          </div>
        </div>


        <div className='seperator'></div>

        <div className='flex flex-row gap-4'>
          <div className='flex flex-col w-[100%] justify-center bg-[rgba(246,247,251,1)] rounded-[8px] gap-2 p-4 '>
            <div className='font-[600] font-semibold text-[14px] leading-6 space-y-4 text-[rgba(69,84,104,1)]'>
              Feedback
            </div>
            <div className='flex flex-row gap-2 items-start text-[rgba(69,84,104,1)]'>
              <div className='p-1 gap-2.5'>
                <div className='bg-[rgba(217,217,217,1)] h-2.5 w-2.5 rounded-full'></div>
              </div>
              <div className='font-[500] text-[12px] leading-4.5 space-y-4 ' >
                Franchisees are requesting more detailed training materials.
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='border-1 gap-6 p-6 shadow-[rgba(16,24,40,0.05)] rounded-xl border-[rgba(234,236,240,1)]'>
        <div className='flex flex-col font-[600] text-[16px] mb-1 leading-6 space-y-1.5 text-start'>
          Prospect Leads
        </div>

        <div className='flex flex-col gap-4'>

          <div className='flex flex-row items-center bg-[rgba(246,247,251,1)] py-2.5 px-4 gap-2 rounded-[1rem] justify-between'>
            <div className='flex flex-row items-center gap-2.5'>
              <div>
                <Image src="/Pic1.png" alt='pic1' height={36} width={36} />
              </div>
              <div className='font-medium text-[14px] leading-5 text-[rgba(71,84,103,1)]'>
                Wade Warren
              </div>
            </div>
            <div className='flex font-[500] text-[14px] leading-5 space-x-5 text-[rgba(28,34,43,1)]'>
              <span>Stage:&nbsp;</span>Initial Query
            </div>
          </div>


          <div className='flex flex-row items-center bg-[rgba(246,247,251,1)] py-2.5 px-4 gap-2 rounded-[1rem] justify-between'>
            <div className='flex flex-row items-center gap-2.5'>
              <div>
                <Image src="/pic2.png" alt='pic2' className='rounded-full' height={36} width={36} />
              </div>
              <div className='font-medium text-[14px] leading-5 text-[rgba(71,84,103,1)]'>
                Wade Warren
              </div>
            </div>
            <div className='flex font-[500] text-[14px] leading-5 space-x-5 text-[rgba(28,34,43,1)]'>
              <span>Stage:&nbsp;</span>Initial Query
            </div>
          </div>



          <div className='flex flex-row items-center bg-[rgba(246,247,251,1)] py-2.5 px-4 gap-2 rounded-[1rem] justify-between'>
            <div className='flex flex-row items-center gap-2.5'>
              <div>
                <Image src="/pic3.png" alt='pic3' className='rounded-full' height={36} width={36} />
              </div>
              <div className='font-medium text-[14px] leading-5 text-[rgba(71,84,103,1)]'>
                Wade Warren
              </div>
            </div>
            <div className='flex font-[500] text-[14px] leading-5 space-x-5 text-[rgba(28,34,43,1)]'>
              <span>Stage:&nbsp;</span>Initial Query
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Card3
