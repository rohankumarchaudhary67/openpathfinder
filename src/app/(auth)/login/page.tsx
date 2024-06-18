import LoginComponent from "@/components/authentication/loginComponent";
import Bg from "@/components/ui/bg";

export default function Login() {
    return (
        <>
            <div className="container flex justify-center items-center min-h-screen">
                <LoginComponent />
            </div>
            <Bg />
        </>
    )
}