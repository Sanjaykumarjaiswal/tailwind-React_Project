import React from 'react'
import ProfileCardItems from './ProfileCardItems'

export default function ProfileCard({ profilePic, name, gmail, mobileNo, place }) {
    return (
        <div className=''>
            <ProfileCardItems
                profileImage={profilePic}
                name={name}
                gmail={gmail}
                mobileNo={mobileNo}
                place={place}
            />
        </div>
    )
}
