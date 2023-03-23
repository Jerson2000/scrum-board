import { userData } from "@/data_store/data";
import userModel from "@/model/userModel";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";





// EXERCISE 3 - 5 
//  S
//  U
//  B
//  M
//  I
//  T
//  T
//  E
//  D BY " J E R S O N  R A Y B. D E S I E R T O "







export default function Navbar() {
    const router = useRouter();
    const { user,updateData } = userData();
    const [users,setUser] = useState(userModel);    

    useEffect(() => {
        user.some((obj, i) => {
            if (obj.isLoggedIn) {               
                setUser(obj);
            }
        })      
    }, []);

    const logout =()=>{
        user.some((obj, i) => {
            if (obj.isLoggedIn) {
                updateData(i, { ...obj, isLoggedIn: false });
                setUser(userModel);
                router.push("/login");
            }
        })   
    }

    const view = () => {
        console.log(user);
      }
    

    return (
        <>
            <div className="container mx-auto">
                <nav className='flex items-center flex-wrap m-5'>
                    <div className="inline-flex items-center"> <span className='text-xl text-slate-900 font-medium tracking-wide cursor-pointer' onClick={view}>Scrum Board</span></div>
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-slate-700 font-bold items-center justify-center'>
                            {users.name!==''?users.name:'Name'}
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