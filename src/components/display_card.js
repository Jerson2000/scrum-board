import { useState, useEffect } from "react";
import { userData } from "@/data_store/data";
import Link from "next/link";
import { useRouter } from "next/router";




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







export default function DisplayCard({ itemIndex }) {
    const { user } = userData();
    const { asPath } = useRouter();

    return (
        <>
            {user.map((boards) => {
                if (boards.isLoggedIn) {
                    return boards.data.map((data, i) => {
                        if (i == asPath.split('/').at(1)) {
                            return data.items.map((item, i) => {
                                if (i === itemIndex) {
                                    return item.cards.map((card,i) => {
                                        return (
                                            <div key={card.title + i} className="max-w-[400px] flex flex-col gap-4 border border-gray-200 p-4 rounded-md">
                                                <h1 className="font-bold text-lg">{card.title}</h1>
                                                <p className="font-normal text-gray-500">{card.description}</p>
                                            </div>)
                                    })
                                }
                            })
                        }
                    })
                }
            })
            }
        </>
    );



}