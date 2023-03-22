import { userData } from "@/data_store/data";
import userModel from "@/model/userModel";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Navbar() {
    const router = useRouter();
    const { data,updateData } = userData();
    const [user,setUser] = useState(userModel);    

    useEffect(() => {
        data.some((obj, i) => {
            if (obj.isLoggedIn) {               
                setUser(obj);
            }
        })      
    }, []);

    const logout =()=>{
        data.some((obj, i) => {
            if (obj.isLoggedIn) {
                updateData(i, { ...obj, isLoggedIn: false });
                setUser(userModel);
                router.push("/login");
            }
        })   
    }

    return (
        <>
            <div className="container mx-auto">
                <nav className='flex items-center flex-wrap m-5'>
                    <div className="inline-flex items-center"> <span className='text-xl text-slate-900 font-medium tracking-wide cursor-pointer'>Scrum Board</span></div>
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-slate-700 font-bold items-center justify-center'>
                            {user.name!==''?user.name:'Name'}
                        </a>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-slate-700 cursor-pointer font-bold items-center justify-center' onClick={logout}>
                            Logout
                        </a>
                    </div>
                </nav>
            </div>
            <hr/>
        </>
    );
}