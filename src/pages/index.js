import AddBoard from "@/components/add_board";
import DisplayBoard from "@/components/display_board";
import Navbar from "@/components/navbar";
import { userData } from "@/data_store/data";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Home() {

  const router = useRouter();
  const { data, addBoardData } = userData();
  const [event, setEvent] = useState({
    isAddBoard: false,
  });

  useEffect(() => {
    const isLogged = data.some((obj, i) => {
      if (obj.isLoggedIn) {
        return true;
      }
    })

    if (!isLogged) {
      router.push("/login");
  }

  }, []);
  const addBoard = () => {

    // addBoardData(0, { id: 1, value: 'new data' });

    setEvent({ ...event, isAddBoard: true }); 
  }

  const view = () => {
    console.log(data);
  }


  return (
    <>
      <Navbar />
      <div className="container mx-auto">

        <div className="mt-10">
          <h1 className="text-2xl font-bold" onClick={view}>Boards</h1>

          <div className="grid grid-cols-3 gap-3 my-5">

            {/* <div className="max-w-[400px] flex flex-col gap-4 border border-gray-200 p-4 rounded-md cursor-pointer">
              <div className="mb-5">
                <h1 className="font-bold text-lg">Board Title</h1>
                <p className="font-normal text-gray-500">Board Descriptions</p>
              </div>
            </div> */}

            <DisplayBoard />
            {event.isAddBoard ? <AddBoard event={event} setEvent={setEvent} /> : <div className="max-w-[400px] flex flex-col gap-4 border border-gray-200 p-4 rounded-md cursor-pointer" onClick={addBoard}>
              <div className="text-5xl mx-auto text-gray-500">+</div>
            </div>}
            {/* <div className="max-w-[400px] flex flex-col gap-4 border border-gray-200 p-4 rounded-md cursor-pointer" onClick={addBoard}>
              <div className="text-5xl mx-auto text-gray-500">+</div>
            </div> */}
          </div>

        </div>
      </div>
    </>
  )
}
