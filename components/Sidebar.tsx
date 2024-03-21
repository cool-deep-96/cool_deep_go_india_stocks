"use client"
import { sidebarText } from "@/data/sidebarText";
import { Bell, Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";



const Sidebar = () => {
    const [siderbarOpen, setSiderbarOpen] = useState<boolean>(true);

  return (
    <div className={`fixed left-0 top-0  lg:relative bg-sky-700 h-[100vh] text-white text-sm md:text-xl lg:text-2xl font-bold ${siderbarOpen? 'md:mr-8 w-[50vw] md:w-[30vw] ':'w-0'}`}>
        <div className={`absolute h-full left-[100%] top-0 flex flex-col justify-center ${siderbarOpen? 'bg-gray-200':'bg-transparent'} hover:cursor-pointer`}>
            <div className=" h-28 bg-sky-700 flex flex-col justify-center  w-[20px] items-end top-[50%]  " onClick={()=>setSiderbarOpen(!siderbarOpen)}>
                <Play fill="#ffffff" className="text-white  w-[16px]" />
            </div>
        </div>
        

        <div className={`${siderbarOpen? '':'hidden'}`}>
            <div className="p-2 md:p-5 flex items-center  justify-between py-5 border-b border-white">
                <div className="flex items-center gap-3 ">
                    <Image src='/images/profiles/sampleProfile.png' width={100} height={100} className="h-8 w-8 md:h-14 md:w-14 rounded-full" alt="user Profile"/>
                    <p>Hello, user</p>
                </div>
                <Bell fill="#ffffff"/>
            </div>

            <div className=" flex flex-col gal-5 md:gap-5 mt-5 md:mt-12">
                {
                    sidebarText.map((text, index)=>(
                        <div key={index} className="p-2 md:px-5 flex items-center gap-3 hover:cursor-pointer">
                            
                            <p>{text.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>


    </div>
  )
}

export default Sidebar;
