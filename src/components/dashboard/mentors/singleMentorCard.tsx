export default function SingleMentorCard() {
    return (
        <>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/user.png" />
                    <div className="flex-grow">
                        <h2 className="text-white title-font font-medium">Mentors Coming Soon</h2>
                        <p className="text-body-color">Wait for some time</p>
                    </div>
                </div>
            </div>
        </>
    )
}