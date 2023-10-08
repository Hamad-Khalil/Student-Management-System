import SideBar from "./SideBar"
export default function Courses(){
    return(
        <div className="sm:" > 
            <div className="flex">
                <SideBar/>
                <div> 
                <div className="sm:my-3 sm:mx-[250px] sm:w-max  lg:my-9 lg:mx-[430px] bg-red-50 text-4xl">
                    Course Details
                </div>
                <div className="flex flex-col sm:mx-9 lg:items-center">
                <label className="text-2xl">Course Name</label>
                <input className="border-2  border-black  text-xl w-[400px] h-[50px] rounded-lg" type="text"/>
                <lable className="text-2xl" type="text"/>
                <label className="text-2xl" >Course Duration</label>
                <input className="border-2  border-black  text-xl w-[400px] h-[50px] rounded-lg" type="text"/>
                <lable className="text-2xl" type="text"/>
                </div>
               <div>
            </div>
           
                
               </div>
            </div>
        </div>
    )
}