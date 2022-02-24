import Image from 'next/image'
import React from 'react'

function MediunCard({ item }) {
    return (
        <div className='hover:cursor-pointer hover:scale-105 transation transform duration-300 ease-out'>
            <div className='flex flex-col'>
                <div className='relative h-80 w-80'>
                    <Image src={item.img} layout='fill' className='rounded-xl'></Image>
                </div>
                <h3 className='text-2xl mt-3'>{item.title}</h3>
            </div>
        </div>

    )
}

export default MediunCard