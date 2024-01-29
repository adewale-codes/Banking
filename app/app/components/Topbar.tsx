"use client"
import React from 'react'
import Link from 'next/link'
import Image from "next/image"

const Topbar = () => {
  return (
    <div className=''>
        <div className='bg-primary-300 h-16 px-4 flex items-center border-b border-gray-200 justify-between p-10'>
            <div className='flex items-center gap-10'>
                <div className='font-bold text-2xl'>Hello Adewale</div>
                <div className='flex items-center gap-2'>
                    <div>
                        <Image src="/assets/arrow.svg" width={18} height={18} alt='arrow-icon' />
                    </div>
                    <div className='text-grays-300 text-sm'>May 19, 2023</div>
                </div>
            </div>
            <div className='flex items-center gap-10'>
                <div>
                    <Image src="/assets/notifications.svg" width={18} height={18} alt='notifications-icon'/>
                </div>
                <div>
                    <div className='bg-white w-72 h-12 flex items-center rounded-xl'>
                        <div className='flex items-center gap-36 px-4'>
                            <div className='text-grays-300'>Search here</div>
                            <div>
                                <Image src="/assets/search.svg" width={18} height={18} alt='search-icon' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar