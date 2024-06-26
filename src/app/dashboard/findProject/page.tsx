import FindProjectComp from "@/components/dashboard/projects";
import Bg from "@/components/ui/bg";
import Search from "@/components/ui/search";


export default function Find_Project() {
    return (
        <>
            <div className="min-h-screen pt-24 px-4 bg-transparent">
                <Search />
                <FindProjectComp />
            </div>
            <Bg />
        </>
    )
}