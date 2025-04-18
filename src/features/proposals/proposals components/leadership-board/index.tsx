import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import React from 'react'

const LeadershipBoard = () => {
  return (
  <>
  <div className='flex-1 rounded-2xl p-4 font-roboto bg-[#2E2D3580] flex flex-col justify-center ' >
    <div className='flex items-center gap-4'>
        <h2 className='text-[#8E8E93] text-sm'>Active Voters</h2>
        <span>24h</span>
    </div>
    <div className=" flex  items-center  gap-4">
              <div className="text-[32px] font-bold text-white">1.4k</div>
              <div className="flex items-center text-lime-500 text-[16px]">
                <span className="mr-1">↑</span>
                <span>13.2%</span>
              </div>
     </div>
  </div>
  <div className=' font-roboto bg-[#2E2D3580] rounded-[16px] p-2'>
           <div className="flex pl-3 items-center mb-4">
              <h2 className="text-[22px] font-bold text-white">Voter's Leaderboard</h2>
            </div>

            <div className="  pb-2 mb-2 ">
              <div className="grid grid-cols-3 text-xs text-gray-400 px-5 py-2 rounded-lg bg-[#2E2D3580]">
                <span>Rank</span>
                <span className="text-center">Score</span>
                <span className="text-right">Holdings</span>
              </div>
            </div>

            <div className="space-y-2 text-white px-6">
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="grid grid-cols-4 items-center text-sm">
                  <div className="flex items-center gap-1">
                    <span>{index + 1} .</span>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src={`https://res.cloudinary.com/dlinprg6k/image/upload/v1742431389/avatars/1742431389019-6362722285.jpg`} alt={`Voter ${index + 1}`} />
                      <AvatarFallback>V</AvatarFallback>
                    </Avatar>
                  </div>
                  <span>03xad....7S3</span>
                  <span className="text-center">{95 - index * 1.5}%</span>
                  <span className="text-right">{520 - index * 5} HRT</span>
                </div>
              ))}
            </div>

            <Button variant="link" className="text-lime-500 text-xs mt-2 w-full">
              View full list
            </Button>
          </div>
          
  </>
  )
}

export default LeadershipBoard