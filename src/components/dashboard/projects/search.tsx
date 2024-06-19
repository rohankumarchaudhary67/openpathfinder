export default function Search() {
    return (
        <>
            <div className='container mx-auto'>
                <div className="flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-[var(--bg-color)] overflow-hidden px-2">
                    <div className="grid place-items-center h-full w-12 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <input
                        className="peer h-full w-full outline-none text-sm text-white pr-2 bg-[var(--bg-color)]"
                        type="text"
                        id="search"
                        placeholder="Search something.." />

                    <button type="submit" className="text-white end-2.5 bg-[var(--primary-color-2)] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                </div>
            </div>
        </>
    )
}