import Disscussion from "@/components/Disscussion";
import MarketStories from "@/components/MarketStories";
import Sidebar from "@/components/Sidebar";
import SmallScreen from "@/components/SmallScreen";
import { dissucussions } from "@/data/disscussionData";
import { marketStories } from "@/data/marketStoriesData";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black md:flex justify-between px-2 md:px-0 md:pr-3 lg:pr-6 gap-3">



      <div className="md:hidden">
        <SmallScreen/>
      </div>


      <div className="flex">
        <Sidebar/>
        <div className="hidden md:flex gap-4 flex-col">

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
      </div>




      <div className="hidden md:flex flex-col gap-4 ">
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




    </main>
  );
}
