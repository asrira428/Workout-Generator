import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p>IT'S TIME TO ENTER THE</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Sculpt<span className='text-green-400'>Zone</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>Welcome to a journey where strength and transformation meet. In our<span className='text-green-400 font-medium opacity-100'> sculpting zone of growth </span>you will get the help you need to reach your goals. Stay committed, embrace the process, and let <span className='text-green-400 font-medium'>the power of SculptZone</span> guide you toward becoming your best self.</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Enter SculptZone"}></Button>
        </div>
    )
}
