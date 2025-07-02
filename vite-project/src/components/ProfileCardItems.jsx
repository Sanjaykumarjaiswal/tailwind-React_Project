import React from 'react'

export default function ProfileCardItems({
    profileImage,
    name,
    gmail,
    mobileNo,
    place
}) {
    return (
        <div className='flex justify-center'>
            <div className='flex flex-col gap-2 text-2xl border h-[400px] w-[350px] p-8 shadow-gray-500 shadow-lg justify-center'>
            <span className='flex justify-center h-[100px] w-[100px]' >
                <img className='flex justify-center ml-40' src={profileImage} alt="" /></span>
            <div className='flex flex-col gap-2 items-center mt-8 text-xl'>
                <span className='font-bold'>{name}</span>
                <span>{gmail}</span>
                <span>{mobileNo}</span>
            <span>{place}</span>
            </div>
        </div>
        </div>
    )
}
