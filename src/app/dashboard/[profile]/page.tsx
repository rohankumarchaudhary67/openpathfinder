// pages/post/[slug].tsx
'use client'
import UserInfo from '@/components/dashboard/profile/userInfo';
import GeneralInfo from '@/components/dashboard/profile/generalInfo';

import { profileAtom } from '@/recoilStore/atoms/userAtom';
import axios from 'axios';
import { useParams } from 'next/navigation'
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import Bg from '@/components/ui/bg';

export default function Post() {
    const { profile } = useParams();

    const setProfile = useSetRecoilState(profileAtom);

    const getProfileData = async (profileId: string) => {
        try {
            const response = await axios.get(`/api/getProfileDetails/?userId=${profileId}`);
            const data = await response.data.user;
            setProfile({
                bio: data.bio,
                education: data.education,
                workExperience: data.workExperience,
                skills: data.skills,
                links: data.links
            })
        } catch (error: any) {
            console.error('Error fetching profile data:', error);
            throw error;
        }
    }

    useEffect(() => {
        getProfileData(profile.toString());
    }, [])

    return (
        <>
            <div className="min-h-screen px-4 md:px-12 pt-24 bg-transparent">
                <div className="md:container mx-auto">
                    <UserInfo />
                    <GeneralInfo />
                    <div className='w-full flex justify-end items-end p-6'>
                        <button className='ease-in-up rounded-md bg-[var(--primary-color-2)] py-3 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 md:block px-6 lg:px-6 xl:px-6'>Edit Profile</button>
                    </div>
                </div>
            </div>
            <Bg />
        </>
    )
}