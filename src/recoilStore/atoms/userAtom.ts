import { atom } from "recoil";

export const userAtom = atom({
    key: "userAtom",
    default: {
        userId: "",
        fullName: "",
        email: "",
        phoneNumber: "",
        username: ""
    }
})

export const profileAtom = atom({
    key: "profileAtom",
    default: {
        bio: "",
        education: [],
        workExperience: [],
        skills: [],
        links: []
    }
})