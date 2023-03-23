import AddBoardItem from "@/components/add_board_item";
import DisplayBoardItem from "@/components/display_board_item";
import Navbar from "@/components/navbar";
import { userData } from "@/data_store/data";
import { useRouter } from "next/router";
import { useState,useEffect } from "react";




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

const Board = () => {
    const { asPath } = useRouter();
    const router = useRouter();
    const [event, setEvent] = useState({
        isAddBoard: false,
    });

    const { user } = userData();

    const addBoardItem = () => {
        setEvent({ ...event, isAddBoard: true });
    }

    useEffect(() => {
        const isLogged = user.some((obj, i) => {
            if (obj.isLoggedIn) {
                return true;
            }
        })

        if (!isLogged) {
            router.push("/login");
        }

    }, []);


    const view = () => {
        // console.log(asPath.split('/').at(1) );   
        console.log(user);
    }

    return (
        <>
            <Navbar />
            <div className="container mx-auto">
                <div className="mt-10">
                    {user.map((boards) => {
                        if (boards.isLoggedIn) {
                            return boards.data.map((data, i) => {
                                if (i == asPath.split('/').at(1)) {
                                    return (
                                        <div key={data.title + i}>
                                            <h1 className="text-2xl font-bold" onClick={view}>{data.title !== '' ? data.title : 'Title'}</h1>
                                            <h4 className="text-lg font-normal text-slate-500">{data.description !== '' ? data.description : 'Description'}</h4>

                                        </div>)
                                }
                            })
                        }
                    })
                    }

                    <div className="grid grid-cols-3 gap-3 my-5">

                        <DisplayBoardItem />

                        {event.isAddBoard ? <AddBoardItem event={event} setEvent={setEvent} /> : <div className="max-w-[400px] flex flex-col gap-4 border border-gray-200 p-4 rounded-md cursor-pointer" onClick={addBoardItem}>
                            <div className="text-5xl mx-auto text-gray-500">+</div>
                        </div>}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Board;