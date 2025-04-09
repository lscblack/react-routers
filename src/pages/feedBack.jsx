import { useEffect } from "react";
import Footer from "../comps/Footer";
import { Navbar } from "../comps/Navbar";
import Service from "../comps/Srvice";
import axios from "axios"
import { useState } from "react";
export function Feedback() {
    const [users,usersData] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users/")
        .then((res)=>{
            usersData(res.data)
        })
        .catch((eror)=>{
            console.log(eror)
        })
    },[])
    return (
        <>
            <Navbar />

            {/** Main Body Contents */}
            {users.map((data)=>(
                <>
                <div className="flex gap-3 p-3">
                    <div></div>
                    <div>
                        <p>{data.name}</p>
                        <p>{data.username}</p>
                    </div>
                </div>
                </>
            ))}
            <Service />
            {/** End of Main Body Contents */}

            <Footer />

        </>
    )
}