
// type heroSectionProps =  {

import React, { useEffect, useState } from "react"

//     username : string

// }


interface heroSectionInterface {
    username: string,
    age?: number
}


const HeroSection = ({ username }: heroSectionInterface) => {


    // const [admin, setIsAdmin] = useState<boolean>(false)

    const [user, setUser] = useState<User>()

    // const [post, setPost] = useState<string>("")


    // const [count, setCount] = useState<number>(0);


    // const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');


    // // setIsAdmin(3) // u cant pass number into boolean 

    // //  setCount("sdnjfbvsdjh")   // u cant pass string in  number 


    // setCount((count) => count + 1)    // correct

    // setStatus("loading")


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e)
    }


    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {


        console.log(e)
    }

    interface User {

        username: string,
        email: string,
        profilePic: string,
        isAdmin: boolean,
        Role: string

    }



    const fetchData = async (url: string): Promise<User> => {
        const res = await fetch(url);
        if (res.status === 200) {
            return await res.json() as Promise<User>
        } else {
            throw new Error("Network Error !")
        }
    }

    useEffect(
        () => {
            (async () => {
                const data = await fetchData("sjhfgbsjhfgshdjgf")
                setUser(data)
            })()
        }
    )


    return (
        <div>
            <h2> This is a  HeroSection </h2>
            <h3> Welcome {username}</h3>
            <input placeholder="Enter Something" onChange={(e) => { handleChange(e) }} />
            <button onClick={(e) => { handleClick(e) }}> Click Here </button>
            <p> {user?.username ?? "john doe"}</p>
        </div>
    )
}

export default HeroSection