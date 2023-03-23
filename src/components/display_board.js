import { useState, useEffect } from "react";
import { userData } from "@/data_store/data";
import Link from "next/link";



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




export default function DisplayBoard() {
    const { user } = userData();

    return (
        <>
            {user.map((boards) => {
                if (boards.isLoggedIn) {
                    return boards.data.map((data, i) => (
                        <Link href={'/'+i} className="max-w-[400px] flex flex-col gap-4 border border-gray-200 p-4 rounded-md cursor-pointer" key={i}>
                            <div className="mb-5">
                                <h1 className="font-bold text-lg">{data.title}</h1>
                                <p className="font-normal text-gray-500">{data.description}</p>
                            </div>
                        </Link>
                    ))
                }
            })
            }
        </>
    );



}