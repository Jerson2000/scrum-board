import { useState, useEffect } from "react";
import { userData } from "@/data_store/data";
import Link from "next/link";
import { useRouter } from "next/router";
import AddCard from "./add_card";
import DisplayCard from "./display_card";


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


export default function DisplayBoardItem() {
    const { user } = userData();
    const { asPath } = useRouter();

    const [event, setEvent] = useState({
        isAddCard: false,
        index: -1,
    });

    const addCard = (e) => {
        setEvent({ ...event, isAddCard: true,index:e});
    }
    
    return (
        <>
            {user.map((boards) => {
                if (boards.isLoggedIn) {
                    return boards.data.map((data, i) => {
                        if (i == asPath.split('/').at(1)) {
                            return data.items.map((item, i) => {
                                return (
                                    <div key={item.item + i} className="max-w-[400px] flex flex-col gap-4 border border-gray-200 p-4 rounded-md">
                                        <h1 className="font-bold text-lg">{item.item}</h1>

                                        {/* <div className="max-w-[400px] flex flex-col gap-4 border border-gray-200 p-4 rounded-md mt-5">
                                            <h1 className="font-bold text-lg">ASD</h1>
                                            <p className="font-normal text-gray-500">ASD</p>                                
                                        </div> */}

                                        <DisplayCard itemIndex={i}/>


                                        {event.isAddCard && event.index === i ? <AddCard event={event} setEvent={setEvent} /> : <div className="text-slate-500 mt-3 cursor-pointer" onClick={()=>{addCard(i);}}><span className="text-2xl">+</span> Add Card</div>}

                                    </div>)
                            })
                        }
                    })
                }
            })
            }
        </>
    );



}