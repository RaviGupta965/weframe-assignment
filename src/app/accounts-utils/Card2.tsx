import Image from 'next/image'
import React from 'react'

function Card2() {
    return (
        <div className='gap-5 flex flex-col w-[386px]'>
            <div className='border-1 gap-6 p-6 shadow-[rgba(16,24,40,0.05)] rounded-xl border-[rgba(234,236,240,1)]'>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col font-[600] text-[16px] mb-1 leading-6 space-y-1.5 text-start'>
                        Total Franchises Onboard
                    </div>
                    <div className='flex justify-between items-center flex-row'>
                        <div className='flex flex-row items-center'>
                            <div className='font-[600] text-[30px] mr-3 leading-[38px]'>
                                14
                            </div>
                            <div className='border-[rgba(7,148,85,1)] text-[rgba(6,118,71,1)] text-center h-6 w-[66px] px-md rounded-full border-[1.5px] py-0.5 font-[500] text-[14px]'>
                                <Image className='inline-block' height={5} width={10} src="/trend.png" alt='trend' />
                                7.4%
                            </div>
                        </div>
                        <div>
                            <Image className='' height={24} width={124} src="/Avatar group.png" alt='avatar-group' />
                        </div>
                    </div>

                    <div className='flex flex-row gap-2'>
                        <div className='h-3 w-[100px] rounded-[4px] bg-[rgba(31,126,170,1)]'></div>
                        <div className='h-3 w-[76px] rounded-[4px] bg-[rgba(47,189,255,1)]'></div>
                        <div className='h-3 w-[146px] rounded-[4px] bg-[rgba(151,222,255,1)]'></div>
                    </div>

                    <div className='flex flex-col gap-4'>

                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row items-center gap-3'>
                                <div className='h-2.5 w-2.5 rounded-[4px] bg-[rgba(31,126,170,1)]'>

                                </div>
                                <div className='font-medium text-[14px] leading-5 text-[rgba(71,84,103,1)]'>
                                    Stage 1 (Initial Inquiry)
                                </div>
                            </div>
                            <div className='flex font-[600] text-[18px] text-[rgba(28,34,43,1)]'>
                                02
                            </div>
                        </div>

                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row items-center gap-3'>
                                <div className='h-2.5 w-2.5 rounded-[4px] bg-[rgba(31,126,170,1)]'>

                                </div>
                                <div className='font-medium text-[14px] leading-5 text-[rgba(71,84,103,1)]'>
                                    Stage 2 (Document Submission)
                                </div>
                            </div>
                            <div className='flex font-[600] text-[18px] text-[rgba(28,34,43,1)]'>
                                07
                            </div>
                        </div>

                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row items-center gap-3'>
                                <div className='h-2.5 w-2.5 rounded-[4px] bg-[rgba(31,126,170,1)]'>

                                </div>
                                <div className='font-medium text-[14px] leading-5 text-[rgba(71,84,103,1)]'>
                                    Stage 3 (Training)
                                </div>
                            </div>
                            <div className='flex font-[600] text-[18px] text-[rgba(28,34,43,1)]'>
                                05
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className='border-1 gap-6 p-6 shadow-[rgba(16,24,40,0.05)] rounded-xl border-[rgba(234,236,240,1)]'>
                <div className='flex flex-col font-[600] text-[16px] mb-1 leading-6 space-y-1.5 text-start'>
                    Financial Wellbeing
                </div>

                <div className='flex flex-row justify-between gap-1'>
                    <div className='flex flex-col gap-0.5'>
                        <div className='font-[600] text-[30px] leading-9.5 space-y-7.5'>20</div>
                        <div className='font-[500] text-[14px] leading-5 space-y-3.5'>Total Franchisees</div>
                    </div>

                    <div className='border-[rgba(7,148,85,1)] text-[rgba(6,118,71,1)] text-center h-6 w-[66px] px-md rounded-full border-[1.5px] py-0.5 font-[500] text-[14px]'>
                        <Image className='inline-block' height={5} width={10} src="/trend.png" alt='trend' />
                        2.1%
                    </div>
                </div>
                <div className='seperator'></div>
                <div className='flex flex-row gap-4'>
                    <div className='flex flex-col w-[47%] items-center justify-center bg-[rgba(246,247,251,1)] rounded-[8px] gap-2 p-4 '>
                        <div className='font-[600] font-semibold text-[14px] leading-6 space-y-4 text-[rgba(69,84,104,1)]'>
                            Target
                        </div>
                        <div className='font-[600] font-semibold text-[20px] leading-9.5 space-y-7.5' >
                            $500,000
                        </div>
                    </div>

                    <div className='flex flex-col items-center w-[47%] justify-center bg-[rgba(246,247,251,1)] rounded-[8px] gap-2 p-4 '>
                        <div className='font-[600] font-semibold text-[14px] leading-6 space-y-4 text-[rgba(69,84,104,1)]'>
                            Current
                        </div>
                        <div className='font-[600] font-semibold text-[20px] leading-9.5 space-y-7.5' >
                            $450,000
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card2
