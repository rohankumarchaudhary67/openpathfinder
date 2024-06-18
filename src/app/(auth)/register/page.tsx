import RegisterComponent from "@/components/authentication/registerComponent";
import Bg from "@/components/ui/bg";

export default function Register() {
    return (
        <>
            <div className="container flex justify-center items-center min-h-screen">
                <RegisterComponent />
            </div>
            <Bg />
        </>
    )
}