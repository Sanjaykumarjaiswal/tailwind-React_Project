import React from "react";
import RecordingIcon from "../Icon/RecordingIcon";
import CalenderIcon from "../Icon/CalenderIcon";
import PlusIcon from "../Icon/PlusIcon";

export default function ScheduleCard() {
    return (
        <div className="text-blue-800 w-[380px] m-8 p-">
        <div className="p-12 bg-white border-gray-400 shadow-lg">
            <div className="grid grid-cols-2 gap-24">
                <div className="flex flex-col items-center">
                <span className="p-1 bg-teal-500 rounded-md">
                <CalenderIcon />
                </span>
                <p className="font-bold text-black text-nowrap">Schedule a Webinar</p>
                </div>

                <div className="flex flex-col items-center">
                <span className="p-1 bg-teal-500 rounded-md">
                <PlusIcon />
                </span>
                <p className="font-bold text-black text-nowrap">Join a Webinar</p>
                </div>

               <div className="flex flex-col items-center">
               <span className="p-1 bg-teal-500 rounded-md">
                <RecordingIcon/>
                </span>
                <p className="font-bold text-black text-nowrap">Open Recordings</p>

               </div>
            

            </div>
        </div>
        </div>
  );
}
