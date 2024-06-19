'use client'
import { useEffect } from "react";
import Search from "./search";
import SingleProject from "./singleProject";
import { useRecoilState } from "recoil";
import { projectsAtom } from "@/recoilStore/atoms/projectAtom";
import axios from "axios";

export default function FindProjectComp() {

    const [projects, setProjects] = useRecoilState(projectsAtom);

    const getAllProjectData = async () => {
        const response = await axios.get('/api/getAllProject');
        const projectData = await response.data.projects;
        setProjects(projectData);
    }

    useEffect(() => {
        getAllProjectData();
    }, [])

    return (
        <>
            <Search />
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 py-4">
                {projects.map((project, index) => (
                    <SingleProject key={index} project={project} />
                ))}
            </div>
        </>
    )
}