'use client'
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginComponent() {

    const router = useRouter();
    const [user, setUser] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    setTimeout(() => {
        if (error) {
            setError("");
        }
    }, 2000)

    const handleLogin = async () => {
        try {
            const { data } = await axios.post('/api/login', user);
            data.success ? router.push('/dashboard') : setError('Invalid Credentials...');
        } catch (err: any) {
            setError(err.message);
            console.error('Login Error', err);
        }
    };

    return (
        <>
            <div
                className="wow fadeInUp w-full md:w-auto flex justify-center items-center flex-col z-10 rounded-md bg-primary/[3%] p-8 dark:bg-primary/10 sm:p-11 lg:p-8 xl:p-11"
                data-wow-delay=".2s"
            >
                <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white text-center">
                    Log In to Continue
                </h3>
                <p className="mb-8 border-b border-body-color border-opacity-25 pb-6 text-base font-medium leading-relaxed text-body-color dark:border-white dark:border-opacity-25 text-center">
                    OpenPathFinder provide hash <br /> password security to prevent your privacy...
                </p>
                <div className="flex flex-col justify-center items-center w-full">
                    <input
                        type="text"
                        name="email"
                        placeholder="E-mail/G-mail"
                        className="w-full mb-4 rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-white placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full mb-4 rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-white placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                    <button onClick={handleLogin} className="duration-80 w-full mb-4 cursor-pointer rounded-md border border-transparent bg-[var(--primary-color-2)] py-3 px-6 text-center text-base font-medium text-white outline-none transition ease-in-out hover:bg-opacity-80 hover:shadow-signUp focus-visible:shadow-none"> Log In</button>
                    <div className="w-full px-4">
                        {error && <p className="text-sm text-[var(--primary-color-3)] text-left">*{error}</p>}
                    </div>
                    <p className="text-center text-base font-medium leading-relaxed text-body-color">
                        Have no account? <Link className="font-semibold text-[var(--primary-color-2)] hover:text-[var(--primary-color-3)]" href={"/register"}>Register Now</Link>
                    </p>
                </div>
            </div>
        </>
    )
}