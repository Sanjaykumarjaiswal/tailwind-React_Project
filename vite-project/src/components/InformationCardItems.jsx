import React from 'react'

export default function InformationCardItems({
    status,
    time,
    topic 
        }) {
            return (
                <div className='flex gap-4 border-2 w-[500px] shadow-gray-500 shadow-lg m-2 rounded-lg'>
                    <div className='flex items-center'>
                        <span className='items-center p-3 text-2xl font-bold'>
                            {time}
                        </span>
                    </div>
                    <div className='flex flex-col justify-center p-3 ml-3 border-l-3'>
                        <span>{status}</span>
                        <span className='text-2xl font-bold'>{topic}</span>
                    </div>
                </div>
    )
}
