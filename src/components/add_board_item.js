import { userData } from "@/data_store/data";
import boardItemModel from "@/model/boardItemModel";
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

export default function AddBoardItem({event,setEvent}) {
    const {asPath} =useRouter(); // get url path 
    const { user, addBoardItem } = userData();
    const [item, setItem] = useState(boardItemModel);

    const handleBoardItem = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value });
    }
    const addBItem = () => {
        user.some((obj, i) => {
            if (obj.isLoggedIn && item.title !== '') {
                addBoardItem(i,asPath.split('/').at(1),item);
                setItem(boardItemModel);
                setEvent({...event,isAddBoard:false});
            }
        })

    }

    const cancel =()=>{
        setEvent({...event,isAddBoard:false});
    }

    return (
        <>
            <div className="max-w-[400px] flex flex-col gap-4 border border-gray-200 p-4 rounded-md">
                <div>
                    <input name="item" className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={item.title} onChange={handleBoardItem} placeholder="Board Item Title" required />
                </div>
                <div className="text-center">
                    <button className="shadow pb-2 appearance-none border rounded py-2 px-3 border-blue-500 text-bold text-blue-500 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline mr-1 w-5/12" onClick={cancel}>Cancel</button>            
                    <button className="shadow pb-2 appearance-none border rounded py-2 px-3 border-blue-500 text-bold text-white bg-blue-500 leading-tight
                    focus:outline-none focus:shadow-outline ml-1 w-5/12" onClick={addBItem}>Add</button>            
                </div>

            </div>
        </>
    )
}