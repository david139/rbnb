import Image from 'next/image'
import React from 'react'

function SmallCard({ item }) {
    console.log(item)
    return (
        <div className='flex m-2 mt-5 items-center rounded-xl hover:cursor-pointer hover:bg-gray-100 space-x-4 hover:scale-105 transition trasnform duration-200 ease-out'>
            <div className='relative w-16 h-16'>
                <Image src={item.img} layout='fill' className='rounded-lg'></Image>
            </div>
            <div>
            <h2>{item.location}</h2>
            <h3>{item.distance}</h3>
            </div>
        </div>
    )
}

export default SmallCard