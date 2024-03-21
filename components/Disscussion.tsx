import { Eye, Heart, MessageSquare, Share2 } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const Disscussion = ({dissucussion, dissucussedBy, comments, likes, time, views,profileUrl}:dissucussion) => {
  return (
    <div className=' flex justify-end border-r-8 border-b-8 border-l-2 border-t-2 border-gray-200 p-2  lg:max-w-[55vw] shadow-inner'>
     <div className='flex  lg:max-w-[95%] '>
        <Image src={profileUrl} height={100} width={100} alt='profile' className='h-10 w-10 md:h-14 md:w-14  rounded-full'/>
       
        <div className=' pt-2 md:pt-3 flex gap-2 lg:gap-5 flex-col ml-1 md:ml-2 lg:ml-5'>
            <div className='flex gap-3 md:gap-5 '>
                <div className='text-sm md:text-lg lg:text-xl font-bold'>
                {dissucussedBy}
                </div>
                <div className='flex px-6  text-white items-center bg-sky-700 rounded-full text-xs md:text-sm'>
                    <p>sector 2</p>
                </div>
            </div>
            <div className='font-semibold text-xs md:text-base lg:text-lg'>
                {dissucussion}
            </div>
            <div className='flex justify-between text-xs md:text-sm lg:text-base'>
                <div className='flex gap-1  items-center font-semibold'>
                    <Heart className='w-[18px] md:w-[23px] lg:w-[28px]'/>
                    <p>{likes}</p>
                </div>
                <div className='flex gap-1  items-center font-semibold'>
                    <Eye className='w-[18px] md:w-[23px] lg:w-[28px]'/>
                    <p>{views}</p>
                </div>
                <div className='flex gap-1 items-center font-semibold'>
                    <MessageSquare className='w-[18px] md:w-[23px] lg:w-[28px]'/>
                    <p>{comments} Comments</p>
                </div>
                <div className='flex gap-1  items-center font-semibold'>
                    <Share2 className='w-[18px] md:w-[23px] lg:w-[28px]'/>
                    <p>Share</p>
                </div>
            </div>
            
        </div>
        <div className='text-blue-600 font-semibold w-28 md:w-40 text-[0.6rem] md:text-sm lg:text-base'>
            
            <p className='text-end'>{time}</p>   
            
        </div>
     </div>
        


    </div>
  )
}

export default Disscussion;