import React from 'react'
import WebinarLogo from '../icon/WebinarLogo'


export default function LandingPage() {
    return (
        <div className='bg-blue-900 h-screen w-screen '>
            <div className='text-5xl flex justify-center'>
                <div className='mt-24 flex items-center'>
                    <div>
                    <WebinarLogo color={"white"}/>
                    </div>
                    <div className='ml-2'>
                    <span className='text-cyan-300'>Webinar</span>
                    <span className='text-gray-200'>.gg</span>
                    </div>
                </div>
            </div>
            <div className='text-gray-200 text-5xl flex justify-center mt-28'>
                Verify Your Age
            </div>
            <div className='flex justify-center mt-24'>
                <p className='text-gray-400'>Please confirm your birth year. This data will not be stored.</p>
            </div>
            <div className='flex justify-center mt-8'>
                <input type="text" placeholder='Your Birth Year' className='bg-blue-700 text-gray-400 rounded-md w-[300px] p-3 mr-2' />
            </div>
            <div className='flex justify-center mt-8'>
                <button className='bg-gray-400 text-center p-3 w-[300px] rounded-lg hover:bg-teal-300 font-medium'>Continue</button>
            </div>

        </div>
    )
}
