import React from 'react'
import NavbarItem from './NavbarItem'
import HomeIcon from '../Icon/HomeIcon'
import WebinarIcon from '../Icon/WebinarIcon'
import BillingIcon from '../Icon/BillingIcon'
import SettingIcon from '../Icon/SettingIcon'
import UserManagementIcon from '../Icon/UserManagementIcon'


export default function Navbar() {
    return (
        <>
        <div className='max-w-[300px] h-screen shadow-gray-700 shadow-lg bg-white'>
            <NavbarItem text={"Home"} Icon={<HomeIcon/>} color={"red"}/>
            <NavbarItem text={"Webinar"} Icon={<WebinarIcon/>}  color={"red"}/>
            <NavbarItem text={"Billing"} Icon={<BillingIcon/>} color={"red"}/>
            <NavbarItem text={"User Management"} Icon={<UserManagementIcon/>} color={"red"}/>
            <NavbarItem text={"Setting"} Icon={<SettingIcon/>} color={"red"}/>
        </div>
        
        </>
        
    )
}
