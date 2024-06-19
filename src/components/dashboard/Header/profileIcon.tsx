'use client'
import LogoutComponent from "@/components/ui/logout";
import { userAtom } from "@/recoilStore/atoms/userAtom";
import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function ProfileIcon({ handleUserIconClick, isUserMenuVisible, setisUserMenuVisible }: any) {

    const [user, setUser] = useRecoilState(userAtom);

    const getUserDetail = async () => {
        const response = await axios.get('/api/getUserDetails');
        const data = await response.data;
        setUser({
            ...user,
            userId: data.user._id,
            email: data.user.email,
            fullName: data.user.fullName,
            phoneNumber: data.user.phoneNumber,
            username: data.user.username,
        });
    }

    useEffect(() => {
        getUserDetail();
    }, [])

    return (
        <>
            <div
                onMouseEnter={() => setisUserMenuVisible(true)}
                onClick={handleUserIconClick}
                className=""
            >
                <button type="button" className="flex text-sm bg-[var(--bg-color)] rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                    <span className="sr-only">Open user menu</span>
                    <img className="w-8 h-8 rounded-full" src="/user.png" alt="user photo" />
                </button>
                {isUserMenuVisible && (
                    <div
                        onMouseEnter={() => setisUserMenuVisible(true)}
                        onMouseLeave={() => setisUserMenuVisible(false)}
                        className="absolute right-10 md:right-60 z-50 my-4 text-base list-none bg-black divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-900 dark:divide-gray-600">
                        <div className="px-4 py-3 hover:bg-[var(--bg-color)]">
                            <span className="block text-sm text-gray-900 dark:text-white">{user.fullName}</span>
                            <span className="block text-sm text-gray-500 truncate dark:text-gray-400">{user.email}</span>
                        </div>
                        <ul className="py-2" aria-labelledby="user-menu-button">
                            <UserLink linkName='Profile' href={`/dashboard/${user.userId}`} />
                            <UserLink linkName='Setting' href={`/setting`} />
                            <li>
                                <LogoutComponent />
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}

// User Links
interface UserLinkProps {
    linkName: string
    href: string
}
function UserLink({ linkName, href }: UserLinkProps) {
    return (
        <>
            <li>
                <Link href={href} className="block px-4 py-2 text-sm text-white hover:bg-[var(--bg-color)]">{linkName}</Link>
            </li>
        </>
    )
}