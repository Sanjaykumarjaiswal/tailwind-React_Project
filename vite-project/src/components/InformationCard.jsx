import React from 'react'
import InformationCardItems from './InformationCardItems'

export default function InformationCard() {
    return (
        <div className='m-2 shadow-lg w-[540px] shadow-gray-500 p-2'>
            <InformationCardItems time={"11:30 AM"} status={"Upcoming"} topic={"UI/UX"} />
            <InformationCardItems time={"11:30 AM"} status={"Upcoming"} topic={"UI/UX"} />
            <InformationCardItems time={"11:30 AM"} status={"Upcoming"} topic={"UI/UX"} />
            <InformationCardItems time={"11:30 AM"} status={"Upcoming"} topic={"UI/UX"} />
        </div>
    )
}
