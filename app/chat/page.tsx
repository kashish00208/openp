"use client"
import { PiBookOpenUserLight } from "react-icons/pi";
const page = () => {
  return (
    <div className='h-full w-full flex justify-center items-center'>
      <div className='flex w-full'>
        {/* sidebar */}
        <div className='w-1/6 border-r h-screen border-white/15 p-5'>
          <div className="flex justify-between ">
            <li className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity">
              <span>OPEN</span>
              <span className="text-black bg-white text-sm px-2 py-1 font-bold">PAPERS</span>
            </li>

            <PiBookOpenUserLight className="text-3xl"/>
          </div>
        </div>


        {/* chat */}
        <div className='w-5/6'>
          chat
        </div>

      </div>
    </div>
  )
}

export default page
