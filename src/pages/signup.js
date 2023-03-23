import { userData } from "@/data_store/data";
import userModel from "@/model/userModel";
import { useRouter } from "next/router";
import { useState } from "react";







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





export default function SignUp() {
    const router = useRouter();
    const [cred, setCred] = useState(userModel);
    const { user, addData } = userData();
    const [err, setErr] = useState({
        color: 'bg-red-700',
        errMsg: '',
        isErr: false
    })

    const handleCreds = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value });
    }
    const saveData = () => {
        if (cred.name === '' || cred.email === '' || cred.password === '') {
            setErr({ ...err, errMsg: 'Some field/s are empty!', isErr: true, color: 'bg-red-700'});
        } else {
            if (cred.password.split('').length >= 8) {
                addData(cred);
                setCred(userModel);
                setErr({ ...err, errMsg: 'Registered!', isErr: true,color:'bg-green-700' });
            } else {
                setErr({ ...err, errMsg: 'Password must be at least 8 characters!!!', isErr: true,color: 'bg-red-700' });
            }

        }
    }
    const login = () => {
        console.log(user);
        router.push("/login");
    }

    const msgClose =()=>{
        setErr({ ...err,isErr: false});
    }

    return (
        <>
            <div className="h-screen bg-white" >
                <div className="flex justify-center flex-col items-center">

                    <div className="grow shrink-0 w-[700px] text-slate-900 px-5 my-12 rounded">
                        <div className="py-5">
                            <div className="text-center font-sans mb-10 ">
                                <div className="font-bold text-3xl tracking-wider">Scrum Board</div>
                            </div>
                            <div className="px-20">
                                <div className={`text-lg text-center ${err.color} rounded-md text-white`}>{err.isErr ? err.errMsg : ''}<span className=" float-right mx-5 font-bold cursor-pointer" onClick={msgClose}>&#10799;</span></div>
                                <div className="font-bold text-2xl mb-5">Sign up</div>
                                <div>
                                    <span className=" font-medium">Name*</span><input name="name" className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={cred.name} onChange={handleCreds} placeholder="Enter your name" required />
                                </div>
                                <div className="mt-3">
                                    <span className=" font-medium">Email*</span> <input name="email" className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" value={cred.email} onChange={handleCreds} placeholder="Enter your email" required />
                                </div>
                                <div className="mt-3">
                                    <span className=" font-medium">Password*</span><input name="password" className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" value={cred.password} onChange={handleCreds} placeholder="Create a password" required />
                                    <span className={`font-normal text-sm text-slate-900`}>Must be at least 8 characters.</span>
                                </div>

                                <div className="mt-5">
                                    <button className="mt-3 shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline 
                                focus:outline-none text-white font-bold py-2 px-3 rounded w-full" type="button" onClick={saveData}>
                                        Register
                                    </button>                                  
                                    <div className="mt-5 content-center text-center">
                                        <h3 className="text-center font-medium text-sm">Already have an account? <span className="text-blue-500 cursor-pointer" onClick={login}>Login</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}