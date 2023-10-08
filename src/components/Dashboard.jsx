import SideBar from "./SideBar"
import { useState } from "react";

export default function Dashboard() {
    return (
        <div>
            <div className="flex">
                <div>
                    <SideBar />
                </div>
               <div>

               <nav className=" ">
                    <h1 className="sm:my-3 sm:mx-[250px] sm:w-max  lg:my-9 lg:mx-[430px] bg-red-50 text-4xl"> My Dashboard </h1>
                </nav>
                <div className="lg:flex flex-wrap sm:flex lg:justify-center sm:flex-col sm: gap-9 sm:items-center lg:flex-row ">
                    <div className='w-[400px] h-[200px] text-3xl mx-4 bg-blue-500 text-white  px-[100px] py-6 rounded-md' >
                        Total Students
                    </div>
                    <div className='w-[400px] h-[200px] text-3xl mx-4 bg-red-500 text-white  px-[100px] py-6 rounded-md' >
                        Total Students
                    </div>
                </div>
               </div>
               <div>

               </div>
            </div>
        </div>
    )
}

