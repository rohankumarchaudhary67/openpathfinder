import FindMentorComp from "@/components/dashboard/mentors";
import Bg from "@/components/ui/bg";
import Search from "@/components/ui/search";

export default function Mentor() {
    return (
        <>
            <div className="min-h-screen pt-24 px-4 bg-transparent">
                <Search />
                <FindMentorComp />
            </div>
            <Bg />
        </>
    )
}