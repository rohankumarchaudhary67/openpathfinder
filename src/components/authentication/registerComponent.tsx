import Link from "next/link";

interface InputFieldProps {
    name: string;
    placeholder: string;
    type?: string;
    extraClasses?: string;
}

const InputField: React.FC<InputFieldProps> = ({
    name,
    placeholder,
    type = "text",
    extraClasses = "",
}) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={`w-full mb-4 rounded-md border border-body-color border-opacity-10 py-3 px-6 text-base font-medium text-white placeholder-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none dark:border-white dark:border-opacity-10 dark:bg-[#242B51] focus:dark:border-opacity-50 ${extraClasses}`}
        />
    );
};

const RegisterComponent: React.FC = () => {
    return (
        <div
            className="wow fadeInUp w-full md:w-auto flex justify-center items-center flex-col z-10 rounded-md bg-primary/[3%] p-8 dark:bg-primary/10 sm:p-11 lg:p-8 xl:p-11"
            data-wow-delay=".2s"
        >
            <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white text-center">
                Register Yourself
            </h3>
            <p className="mb-8 border-b border-body-color border-opacity-25 pb-6 text-base font-medium leading-relaxed text-body-color dark:border-white dark:border-opacity-25 text-center">
                OpenPathFinder provides hash password security to prevent your privacy...
            </p>
            <div className="grid md:grid-cols-2 grid-cols-1 w-full">
                <InputField name="fullName" placeholder="Full Name" />
                <InputField name="email" placeholder="E-mail/G-mail" extraClasses="md:ml-4" />
                <InputField name="phoneNumber" placeholder="Phone Number" />
                <InputField name="username" placeholder="Username" extraClasses="md:ml-4" />
                <InputField name="password" placeholder="Password" type="password" />
                <InputField name="confirmPassword" placeholder="Confirm Password" type="password" extraClasses="md:ml-4" />
            </div>
            <div>
                <button className="duration-80 w-full mb-4 cursor-pointer rounded-md border border-transparent bg-[var(--primary-color-2)] py-3 px-6 text-center text-base font-medium text-white outline-none transition ease-in-out hover:bg-opacity-80 hover:shadow-signUp focus-visible:shadow-none">
                    Register Now
                </button>
                <p className="text-center text-base font-medium leading-relaxed text-body-color">
                    Have an account? <Link className="font-semibold text-[var(--primary-color-2)] hover:text-[var(--primary-color-3)]" href="/login">Login Now</Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterComponent;
