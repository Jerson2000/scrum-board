import { userData } from "@/data_store/data";
import cardModel from "@/model/cardModel";
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

export default function AddCard({event,setEvent}) {
    const {asPath} = useRouter();    
    const { user, addCard } = userData();
    const [card, setCard] = useState(cardModel);

    const handleBoard = (e) => {
        setCard({ ...card, [e.target.name]: e.target.value });
    }
    const addCardItem = () => {
        user.some((obj, i) => {
            if (obj.isLoggedIn && card.title !== '' && card.description !=='') {
                addCard(i,asPath.split('/').at(1),event.index,card);
                setCard(cardModel);
                setEvent({...event,isAddCard:false});
            }
        })
        console.log(user);
    }

    

    const cancel =()=>{
        setEvent({...event,isAddCard:false});
    }

    return (
        <>
            <div className="max-w-[400px] flex flex-col gap-4 border border-gray-200 p-4 rounded-md">
                <div>
                    <input name="title" className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={card.title} placeholder="Card Title" required onChange={handleBoard} />
                </div>
                <div>
                    <textarea className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows={5} name="description" placeholder="Card Description" value={card.description} onChange={handleBoard} >
                    </textarea>
                </div>
                <div className="text-center">
                    <button className="shadow pb-2 appearance-none border rounded py-2 px-3 border-blue-500 text-bold text-blue-500 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline mr-1 w-5/12" onClick={cancel}>Cancel</button>            
                    <button className="shadow pb-2 appearance-none border rounded py-2 px-3 border-blue-500 text-bold text-white bg-blue-500 leading-tight focus:outline-none focus:shadow-outline ml-1 w-5/12" onClick={addCardItem}>Add</button>            
                </div>

            </div>
        </>
    )
}