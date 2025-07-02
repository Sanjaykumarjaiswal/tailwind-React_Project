import React from 'react'

export default function NavbarItem({
    Icon,
    text
}) {
    return (
        <div className={`flex gap-20 items-center justify-between ml-4 mb-4 text-gray-500 hover:bg-slate-200 rounded-md px-3 py-3 cursor-pointer `}>
            <span className='text-2xl'>{text}</span>
            <span>{Icon}</span>
        </div>
    )
}
