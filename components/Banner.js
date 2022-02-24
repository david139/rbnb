import Image from 'next/image'
import React from 'react'

function Banner() {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:-h-[500px] xl:h-[600px] bottom-0'>
            <Image src="https://links.papareact.com/0fm" layout='fill' objectFit='cover'></Image>
            <div className='absolute top-1/2 w-full text-center'>
                <p className='text-sm md:text-lg'>Not sure where to go? Perfect.</p>
                <button className='px-10 py-4 shadow-md bg-white text-purple-500 rounded-full font-bold mt-3 hover:shadow-lg active:shadow-none hover:scale-110 active:scale-90 transition duration-100'>I&apos;m flexible</button>
            </div>
        </div>

    )
}

export default Banner