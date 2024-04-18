import Team_Person from "./team-person";
import teamData from "./teamData";

export default function Team() {
    return (
        <>
            <section className="">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Meet Our Team</h2>
                        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Trailblazing contributors of Open Path Finder app: Innovators, coders, designers, testers, and supporters paving the way to exploration.</p>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-4">
                        {teamData.map((team_member) => (
                            <div key={team_member.id}>
                                <Team_Person team_member={team_member} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}