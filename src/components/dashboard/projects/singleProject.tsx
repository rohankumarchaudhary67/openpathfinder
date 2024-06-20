import Link from "next/link";

export default function SingleProject({ project }: any) {
    return (
        <>
            <div className="md:px-4">
                <div className="flex flex-col mt-6 text-white bg-black bg-opacity-30 shadow-md bg-clip-border rounded-xl w-full">
                    <div className="p-6">
                        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {project.projectName}
                        </h5>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                            {project.projectDesc}
                        </p>
                    </div><div className="flex items-center px-6">
                        <img className="w-10 h-10 rounded-full mr-4" src={project.projectOwnerImgLink} alt="Avatar of Jonathan Reinink" />
                        <div className="text-sm">
                            <p className="text-white font-bold text-xl leading-none">{project.projectOwner}</p>
                        </div>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        {project.category.map((projectCategory: string, index: number) => (
                            <span key={index} className="inline-block bg-[var(--bg-color)] rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">#{projectCategory}</span>
                        ))}

                    </div>
                    <div className="p-6 pt-0">
                        <Link
                            href={project.repoLink}
                            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[var(--bg-color)] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                            type="button">
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}