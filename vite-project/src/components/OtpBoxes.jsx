import React, { useState } from 'react'

export default function OtpBoxes({
  onDone,
  reference,
  goBack
}) {
  const [ inputBoxVal,setInputBoxVal ] = useState("")
  return (
    <div>
            <input 
            value={inputBoxVal} 
            type="text" 
            className='rounded-2xl px-1 py-2 bg-blue-700  text-white font-bold text-center w-[40px] h-[50px] outline-none '
            ref={reference}
            onKeyUp={(e)=>{
              if(e.key == "Backspace"){
                goBack()
              }
            }} 
            onChange={(e)=>{
              const val = e.target.value
              if(val == ""){
                //logic to go back
              }else if(val == '1' || val == '2' || val == '3' || val == '4' || val == '5' || val == '6' || val == '7' || val == '8' || val == '9'){
                setInputBoxVal(val)
                console.log("else if block");
                onDone()
              }
            }}/>
    </div>
  )
}
