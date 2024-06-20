'use client'
import Link from "next/link";
import { useState } from "react";
import ProfileIcon from "./profileIcon";

export default function NavLink() {
    
    const [isUserMenuVisible, setisUserMenuVisible] = useState(false);
    const [isNavbarMenuVisible, setisNavbarMenuVisible] = useState(true);

    const handleUserIconClick = () => {
        if (isUserMenuVisible) {
            setisUserMenuVisible(false);
        } else {
            setisUserMenuVisible(true);
            setisNavbarMenuVisible(true)
        }
    }
    const handleNavbarIconClick = () => {
        if (isNavbarMenuVisible) {
            setisNavbarMenuVisible(false);
            setisUserMenuVisible(false)
        } else {
            setisNavbarMenuVisible(true);
        }
    }

    return (
        <>
            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <ProfileIcon handleUserIconClick={handleUserIconClick} isUserMenuVisible={isUserMenuVisible} setisUserMenuVisible={setisUserMenuVisible} />
                <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false" onClick={handleNavbarIconClick}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
            <div className={`items-center justify-between ${isNavbarMenuVisible && "hidden"} w-full md:flex md:w-auto md:order-1`} id="navbar-user">
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-black dark:border-gray-700">
                    <NavLinks navName='Find Project' href={`/dashboard/findProject`} isNavbarMenuVisible={isNavbarMenuVisible} setisNavbarMenuVisiblet={setisNavbarMenuVisible} />
                    <NavLinks navName='Mentors' href={`/dashboard/mentors`} isNavbarMenuVisible={isNavbarMenuVisible} setisNavbarMenuVisiblet={setisNavbarMenuVisible} />
                    <NavLinks navName='Learnings' href={`/`} isNavbarMenuVisible={isNavbarMenuVisible} setisNavbarMenuVisiblet={setisNavbarMenuVisible} />
                    <NavLinks navName='Blogs' href={`/`} isNavbarMenuVisible={isNavbarMenuVisible} setisNavbarMenuVisiblet={setisNavbarMenuVisible} />
                    <NavLinks navName='Roadmap' href={`/`} isNavbarMenuVisible={isNavbarMenuVisible} setisNavbarMenuVisiblet={setisNavbarMenuVisible} />
                </ul>
            </div>
        </>
    )
}

// Nav links
interface NavLinkProps {
    href: string
    navName: string
    isNavbarMenuVisible: boolean
    setisNavbarMenuVisiblet: (visible: boolean) => void;
}
function NavLinks({ navName, href, isNavbarMenuVisible, setisNavbarMenuVisiblet }: NavLinkProps) {
    return (
        <>
            <li>
                <Link href={href} className='block py-2 px-3 text-white hover:text-[var(--primary-color-3)] my-1 md:my-0 rounded-md bg-[var(--primary-color-2)] md:bg-transparent' onClick={() => {
                    setisNavbarMenuVisiblet(true)
                }} >{navName}</Link>
            </li>
        </>
    )
}