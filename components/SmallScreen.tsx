"use client"
import { dissucussions } from "@/data/disscussionData";
import Disscussion from "./Disscussion";
import { marketStories } from "@/data/marketStoriesData";
import MarketStories from "./MarketStories";
import { useState } from "react";



const SmallScreen = () => {
    const [first, setFirst] = useState<boolean>(true);
    return (
        <div>

            <div className="w-[100vw] border-l-4 border-r-4 flex border-black hover:cursor-pointer -translate-x-[8px]">
                <div className={`w-[48vw] my-1 py-2 text-lg text-white ${first ? 'bg-sky-950 border-red-600' : 'bg-sky-800 border-sky-800'}  text-center font-semibold border-b-4 `} onClick={() => setFirst(true)}>
                    Disscussion Forum
                </div>
                <div className={`w-[48vw] my-1 p-2 text-lg text-white ${first ? 'bg-sky-800 border-sky-800' : 'bg-sky-950 border-red-600'}  text-center font-semibold border-b-4 `} onClick={() => setFirst(false)}>
                    Market Strories
                </div>
            </div>



                <div className={`${first ? 'flex' : 'hidden'} gap-4 flex-col my-10`}>

                    <div className="md:flex hidden">
                        <p className="px-3 py-2 font-bold text-2xl bg-gray-200 text-red-500">DISSCUSSION FOURM</p>
                    </div>

                    <div className="flex flex-col gap-16 ">
                        {
                            dissucussions.map((dissucussion, index) => (
                                <div key={index}>
                                    <Disscussion  {...dissucussion} />
                                </div>
                            ))
                        }
                    </div>
                </div>
 



            <div className={`${first ? 'hidden' : 'flex'}   flex-col gap-4 my-10`}>
                <div className="hidden md:flex">
                    <p className="px-3 py-2 font-bold text-xl bg-gray-200 text-red-500 mt-3">MARKET STORIES</p>
                </div>
                <div className="flex flex-col gap-10">
                    {
                        marketStories.map((marketStory, index) => (
                            <div key={index}>
                                <MarketStories {...marketStory} />
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default SmallScreen;