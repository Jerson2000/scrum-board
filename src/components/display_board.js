import { useState, useEffect } from "react";
import { userData } from "@/data_store/data";
export default function DisplayBoard() {
    const { data } = userData();

    return (
        <>
            {data.map((boards) => {
                if (boards.isLoggedIn) {
                    return boards.data.map((data, i) => (
                        <div className="max-w-[400px] flex flex-col gap-4 border border-gray-200 p-4 rounded-md cursor-pointer" key={i}>
                            <div className="mb-5">
                                <h1 className="font-bold text-lg">{data.title}</h1>
                                <p className="font-normal text-gray-500">{data.description}</p>
                            </div>
                        </div>
                    ))
                }
            })
            }
        </>
    );



}