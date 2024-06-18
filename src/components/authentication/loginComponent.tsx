import Link from "next/link";

export default function LoginComponent() {
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
                        className="w-full mb-4 rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full mb-4 rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50"
                    />
                    <button className="duration-80 w-full mb-4 cursor-pointer rounded-md border border-transparent bg-[var(--primary-color-2)] py-3 px-6 text-center text-base font-medium text-white outline-none transition ease-in-out hover:bg-opacity-80 hover:shadow-signUp focus-visible:shadow-none"> Log In</button>
                    <p className="text-center text-base font-medium leading-relaxed text-body-color">
                        Have no account? <Link className="font-semibold text-[var(--primary-color-2)] hover:text-[var(--primary-color-3)]" href={"/register"}>Register Now</Link>
                    </p>
                </div>
            </div>
        </>
    )
}