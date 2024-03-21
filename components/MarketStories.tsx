import Image from "next/image";


const MarketStories = ({details,heading, imageUrl}:marketStories) => {
  return (
    <div className=" md:max-w-[24rem]">
        <Image src={imageUrl} alt="marketStories" height={720} width={720} className="max-h-[12rem]"/>

        <div className="px-10 py-5 md:p-5 border-l border-r flex flex-col gap-2">
            <h1 className="font-bold">
                {heading}
            </h1>
            <div className="text-sm">
                {details}
            </div>
        </div>

    </div>
  )
}

export default MarketStories;
