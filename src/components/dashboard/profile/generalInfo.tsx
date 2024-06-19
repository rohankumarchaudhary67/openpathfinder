import { profileAtom } from '@/recoilStore/atoms/userAtom';
import React from 'react';
import { useRecoilValue } from 'recoil';

const GeneralInfo: React.FC = () => {

    const profile = useRecoilValue(profileAtom);

    return (
        <>
            <div>
                <div className="px-4 sm:px-0">
                    <h3 className="text-base font-semibold leading-7 text-white">Profile Information</h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-300">Personal details and experience.</p>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-white">Bio:</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">{profile.bio == "" ? "No bio added right now..." : profile.bio}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-white">Education:</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">{profile.education.length == 0 ? "No education added right now..." : profile.education}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-white">Work Experience:</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">{profile.workExperience.length == 0 ? "No work experience added right now..." : profile.workExperience}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-white">Skills:</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">{profile.skills.length == 0 ? "No skills added right now..." : profile.skills}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-white">Social Media Links:</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">{profile.links.length == 0 ? "No social media link added right now..." : profile.links}</dd>
                        </div>
                    </dl>
                </div>
            </div>

        </>
    );
};

export default GeneralInfo;