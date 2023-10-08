import SideBar from "./SideBar"
import { useState } from "react"

export default function Students(){
    const [stuname, setstuname]= useState(null)
    const [stuContact, setContact]= useState(null)
    const [stuAddress, setstuAddress]= useState(null)
    const onSubmitHandler =async ()=>{
        let stu ={
          name : stuname,
          contact : stuContact,
          address: stuAddress
        }
        console.log(stuname, stuAddress, stuContact);}
        
    
    return(
        
        <div>
            <div className="flex flex-row">
                <div><SideBar/></div>
            <div>
                <h1 className=" sm:my-3 sm:mx-[250px] sm:w-max  lg:my-9 lg:mx-[430px] bg-red-50 text-4xl     ">Student</h1>
                <div className="  flex flex-col items-center">
                <lable className="text-2xl"   >Name </lable>
                <input className=" border-2  border-black text-xl  w-[400px] h-[50px] rounded-lg" type="text" onChange={(e)=>setstuname(e.target.value)} />
                <lable className="text-2xl">Contact </lable>
                <input className=" border-2  border-black text-xl w-[400px] h-[50px] rounded-lg" type="text" onChange={(e)=>setContact(e.target.value)}/>
                <lable className="  text-2xl">Adress</lable>
                <input className="border-2  border-black text-xl  w-[400px] h-[50px] rounded-lg" type="text" onChange={(e)=>setstuAddress(e.target.value)}/>
                <button className="w-[100px] h-[50px] bg-red-300 rounded-lg my-9" onClick={onSubmitHandler}>
                    Add Student
                </button>
                    
                
            </div>
            </div>
            
            </div>
            
        </div>
    )
}