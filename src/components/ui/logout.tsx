'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';

const LogoutComponent = () => {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await axios.get('/api/logout');
            router.push('/login'); // Redirect to login page after logout
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <button className='text-left block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 w-full hover:bg-[var(--bg-color)]' onClick={handleLogout}>Logout</button>
    );
};

export default LogoutComponent;