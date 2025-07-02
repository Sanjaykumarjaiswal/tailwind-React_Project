import React from 'react'
import LandingPage from './components/LandingPage'
import Otp from './components/Otp'
import ProfileCard from './components/ProfileCard'
import Navbar from './components/Navbar'
import ScheduleCard from './components/ScheduleCard'
import InformationCard from './components/InformationCard'
import WhiteScreen from './components/WhiteScreen'
import InformationCardItems from './components/InformationCardItems'
import profilePic from './assets/profile_pic.jpeg'

export default function App() {
  return (
    <>
      <div
        className="grid relative grid-cols-12 w-full h-screen bg-white"
      >
        {/* Sidebar */}
        <div className="z-20 col-span-2 min-h-full shadow-lg bg-white/90">
          <Navbar />
        </div>

        {/* Main Content */}
        <div className="flex flex-col col-span-10 gap-6 p-8">
          {/* Greeting and Date */}
          <div>
            <h2 className="text-2xl font-semibold">Good morning, Sanjay! 👋</h2>
            <p className="text-gray-500">Wednesday, 2 July</p>
          </div>
          <div className="flex flex-row gap-6 items-start">
            {/* Profile Card */}
            <div className="flex flex-col items-start">
              <ProfileCard 
                profilePic={profilePic}
                name="Sanjay Kumar Jaiswal"
                gmail="sanjaykumarjaiswal61@gmail.com"
                mobileNo="9982865662"
                place="Bhopal, M.P. ,India"
              />
            </div>
            <div className="flex flex-col gap-4 mt-8">
              <InformationCardItems status="Live" time="11:30 AM" topic="UX Webinar" />
              <InformationCardItems status="Upcoming" time="11:30 AM" topic="My first Webinar" />
              <InformationCardItems status="Upcoming" time="11:30 AM" topic="Important Webinar" />
              <InformationCardItems status="Upcoming" time="11:30 AM" topic="Webinar 1" />
            </div>
            {/* Schedule Card to the right */}
            <div className="flex-1 ml-8">
              <ScheduleCard />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
