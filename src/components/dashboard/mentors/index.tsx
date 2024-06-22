import SingleMentorCard from "./singleMentorCard";

export default function FindMentorComp() {
    return (
        <>
            <div className="md:container py-4">
                <section className="bg-transparent dark:bg-gray-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Mentor</h2>
                            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Connect with our mentor to explore open source and get guidance for contribution.</p>
                        </div>
                        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                            <SingleMentorCard />
                            <SingleMentorCard />
                            <SingleMentorCard />
                            <SingleMentorCard />
                            <SingleMentorCard />
                            <SingleMentorCard />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}