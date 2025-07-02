import React, { useRef, useState } from 'react'
import WebinarLogo from '../icon/WebinarLogo'
import OtpBoxes from './otpBoxes'


export default function Otp() {
    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    const ref5 = useRef()
    const ref6 = useRef()
    const buttonRef = useRef()
    const [ disabled,setDisabled ] = useState(true)
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
                Check Your Email For a Code.
            </div>
            <div className='flex justify-center mt-24'>
                <p className='text-gray-400'>Please enter the verification code sent to your gmail id.</p>
            </div>
            <div className='flex gap-2 justify-center mt-4'>
                <OtpBoxes reference={ref1} onDone={()=>{
                    ref2.current.focus()
                }} goBack={()=>{
                    
                }}/>
                <OtpBoxes reference={ref2} onDone={()=>{
                    ref3.current.focus()
                }} goBack={()=>{
                    ref1.current.focus()
                }}/>
                <OtpBoxes reference={ref3} onDone={()=>{
                    ref4.current.focus()
                }} goBack={()=>{
                    ref2.current.focus()
                }} />
                <OtpBoxes reference={ref4} onDone={()=>{
                    ref5.current.focus()
                }} goBack={()=>{
                    ref3.current.focus()
                }}/>
                <OtpBoxes reference={ref5} onDone={()=>{
                    ref6.current.focus()
                }} goBack={()=>{
                    ref4.current.focus()
                }}/>
                <OtpBoxes reference={ref6} onDone={()=>{
                    setDisabled(false)
                    buttonRef.current.focus()
                }} goBack={()=>{
                    ref5.current.focus()
                }}/>
            </div>
            { disabled ? <div className='flex justify-center mt-8'>
                <button className='bg-gray-400 text-center p-3 w-[300px] rounded-lg font-medium '>Verify</button>
            </div> :
            <div reference={buttonRef} className='flex justify-center mt-8'>
                <button className='bg-teal-400 text-center p-3 w-[300px] rounded-lg font-medium '>Verify</button>
            </div>}

        </div>
    )
}
