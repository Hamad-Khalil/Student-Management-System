

import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div>
      <div className="bg-gray-800 text-white sm:h-screen sm:w-44 lg:w-60 lg:h-screen">
        <ul className="list-none flex flex-col justify-center items-center">
          <li
            className="hover:cursor-pointer sm:mt-4 lg:mt-4 lg:my-2 text-xl lg:h-[50px] hover:bg-green-400 lg:w-[240px] lg:px-[70px] lg:py-[10px]"
          >
            <Link to={"/"}>Dashboard</Link>
          </li>
          <li
            className="hover:cursor-pointer my-2 text-xl h-[50px] hover:bg-green-400 w-[240px] px-[70px] py-[10px]"
          >
            <Link to="/student">Student</Link>
          </li>
          <li
            className="hover:cursor-pointer my-2 text-xl h-[50px] hover:bg-green-400 w-[240px] px-[70px] py-[10px]"
          >
            <Link to="course">Courses</Link>
          </li>
          <li
            className="hover:cursor-pointer my-2 text-xl h-[50px] hover:bg-green-400 w-[240px] px-[70px] py-[10px]"
          >
            <Link to="/attendence">Attendances</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
// import { Link } from "react-router-dom"

// export default function SideBar() {
//     return (
//         <div>
//             <div className="bg-gray-800 text-white sm:h-screen sm:w-44 lg:w-60 lg:h-screen  "> 
//                     <ul className="list-none flex flex-col justify-center items-center ">
//                         <li className="  hover:cursor-pointer sm:mt-4 lg:mt-4 lg:my-2  text-xl lg:h-[50px]  hover:bg-green-400 lg:w-[250px]   lg:px-[70px] lg:py-[10px]"><Link to={"/"}>Dashboard</Link></li>
//                         <li className=" hover:cursor-pointer my-2 text-xl h-[50px]  hover:bg-green-400 w-[250px]   px-[70px] py-[10px]"><Link to={"student"}>Student</Link></li>
//                         <li className=" hover:cursor-pointer my-2 text-xl h-[50px]  hover:bg-green-400 w-[250px]   px-[70px] py-[10px]"><Link to={"course"}>Courses</Link></li>
//                         <li className=" hover:cursor-pointer        my-2 text-xl h-[50px]  hover:bg-green-400 w-[250px]   px-[70px] py-[10px]"><Link to={"attendence"}>Attendences</Link></li>
//                     </ul>
//             </div>
//         </div>
//     )
// }