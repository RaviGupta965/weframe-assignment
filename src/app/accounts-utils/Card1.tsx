import Image from 'next/image';
import React from 'react'

function Card1() {
    return (
        <div className='gap-5 flex flex-col items-center w-[386px] border-1 shadow-[rgba(16,24,40,0.05)] rounded-xl border-[rgba(234,236,240,1)] bg-[rgba(255,255,255,1)]  p-6'>
            <div className='accounts-header'>
                <div>
                    Accounts Progress
                </div>
                <div>
                    <Image src="/Progress circle.png" alt='progress' height={148} width={148} />
                </div>
            </div>
            <div className='seperator'></div>

            <div className='account-footer flex flex-col w-[100%] gap-3.5 '>
                <div className='bg-[rgba(246,247,251,1)] rounded-[8px] p-4 gap-4'>
                    <div className='accounts-header cards-header'>
                        Steps Compeleted
                    </div>

                    <div className='flex flex-col'>
                        <div className='flex flex-row gap- justify-between items-center'>
                            <div className='flex flex-row justify-center items-center gap-1.5'>
                                <div className='inline-block rounded-full h-[10px] w-[10px] bg-[rgba(217,217,217,1)]'>
                                </div>
                                <div>
                                    Profile Setup
                                </div>
                            </div>


                            <div>
                                <Image src="/Tick.png" alt='Tick' height={16} width={16} />
                            </div>
                        </div>


                        <div className='flex flex-row gap- justify-between items-center'>
                            <div className='flex flex-row justify-center items-center gap-1.5'>
                                <div className='inline-block rounded-full h-[10px] w-[10px] bg-[rgba(217,217,217,1)]'>
                                </div>
                                <div>
                                    Initial Training
                                </div>
                            </div>


                            <div>
                                <Image src="/Tick.png" alt='Tick' height={16} width={16} />
                            </div>
                        </div>


                        <div className='flex flex-row gap- justify-between items-center'>
                            <div className='flex flex-row justify-center items-center gap-1.5'>
                                <div className='inline-block rounded-full h-[10px] w-[10px] bg-[rgba(217,217,217,1)]'>
                                </div>
                                <div>
                                    Legal Document
                                </div>
                            </div>


                            <div>
                                <Image src="/Tick.png" alt='Tick' height={16} width={16} />
                            </div>
                        </div>
                    </div>
                </div>
                
                


                <div className='bg-[rgba(246,247,251,1)] rounded-[8px] p-4 gap-4'>
                    <div className='accounts-header cards-header'>
                        Steps Remaining
                    </div>

                    <div className='flex flex-col opacity-40'>
                        <div className='flex flex-row gap- justify-between items-center'>
                            <div className='flex flex-row justify-center items-center gap-1.5'>
                                <div className='inline-block rounded-full h-[10px] w-[10px] bg-[rgba(217,217,217,1)]'>
                                </div>
                                <div>
                                    Financial Integeration
                                </div>
                            </div>


                            <div>
                                <Image src="/Tick.png" alt='Tick' height={16} width={16} />
                            </div>
                        </div>


                        <div className='flex flex-row gap- justify-between items-center'>
                            <div className='flex flex-row justify-center items-center gap-1.5'>
                                <div className='inline-block rounded-full h-[10px] w-[10px] bg-[rgba(217,217,217,1)]'>
                                </div>
                                <div>
                                    Final Review
                                </div>
                            </div>


                            <div>
                                <Image src="/Tick.png" alt='Tick' height={16} width={16} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card1;
