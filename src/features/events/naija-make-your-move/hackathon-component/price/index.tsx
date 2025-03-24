import { PageMaxWidth } from '@/components/page-max-width'
import React from 'react'



interface Track {
  name: string
  prizes: string[]
}

interface EventDate {
  event: string
  date: string
}

const tracks: Track[] = [
  {
    name: "Financial Inclusion",
    prizes: ["1st Prize: $3,000 USDCa", "2nd Prize: $1,750 USDCa", "3rd Prize: $750 USDCa"],
  },
  {
    name: "Supply Chain",
    prizes: ["1st Prize: $3,000 USDCa", "2nd Prize: $1,750 USDCa", "3rd Prize: $750 USDCa"],
  },
  {
    name: "Decentralized Identity",
    prizes: ["1st Prize: $3,000 USDCa", "2nd Prize: $1,750 USDCa", "3rd Prize: $750 USDCa"],
  },
  {
    name: "Technical Challenges",
    prizes: ["$3,500 USDCa"],
  },
]

const dates: EventDate[] = [
  {
    event: "Registration Opens",
    date: "September 15th",
  },
  {
    event: "Submission Window",
    date: "October 8th - October 15th",
  },
  {
    event: "Shortlist Result Announcement",
    date: "October 21st",
  },
  {
    event: "Hacking Window",
    date: "October 1st - November 2nd",
  },
  {
    event: "Shortlisting Phase",
    date: "October 15th - October 20th",
  },
  {
    event: "Final Demo Date",
    date: "October 26th (IRL)",
  },
]

const PriceSection = () => {
  return (
    <div className='min-h-[1578px] text-white font-roboto bg-[#132420] pb-3'>
          <div className='md:h-[500px] h-[300px] bg-[url("https://res.cloudinary.com/dk5mfu099/image/upload/v1742042443/front-view-latin-friends-hanging-out_1_yocs2u.png")] bg-cover bg-center'>
            </div>
        <PageMaxWidth>   
       <div className='md:pt-16'>
        <div className='flex flex-col  justify-center items-center py-4 md:mt-4 gap-2'>
        <div className="relative px-6 py-2  text-white rounded-full overflow-hidden border-2 w-[282px] h-[36px] flex justify-center items-center text-sm cursor-pointer mx-auto">
            <span className=" absolute inset-0 bg-gradient-to-r from-white/70 to-[#C5EE4F] -z-10 hover:bg-gradient-to-l hover:from-white/70 hover:to-[#C5EE4F]"></span>
            Hackathon Prize Breakdown
          </div>

        <div className='md:text-[32px]'>up to
          <span className='text-[22px] font-bold md:text-[45px]'> $20,000 USDCa in prize</span>
        </div>
        </div>
        <div>
        <div className="space-y-8 p-2 sm:p-4 md:p-6">
      {/* Tracks and Prizes Table */}
      <div className=" overflow-hidden border border-emerald-800 bg-transparent rounded-[32px] min-h-[688px] md:min-h-[500px] mt-4 mb-8">
        {/* Table Header */}
        <div className="grid grid-cols-2 text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl h-[56px] ">
          <div className=" p-5 sm:p-3 md:p-4 bg-emerald-800">Tracks</div>
          <div className="p-5 sm:p-3 md:p-4 bg-emerald-800">Prizes</div>
        </div>

        {/* Table Body */}
        {tracks.map((track, index) => (
          <div
            key={index}
            className="grid grid-cols-2 border-t border-emerald-800 text-white text-[16px] font-normal sm:text-sm md:text-base h-[192px] md:h-[124px]"
          >
            <div className="p-2 sm:p-3 md:p-4 border-r border-emerald-800 flex items-center px-5">{track.name}</div>
            <div className="p-2 sm:p-3 md:p-4 flex flex-col gap-2 justify-center">
              {track.prizes.map((prize, prizeIndex) => (
                <div key={prizeIndex} className="py-0.5  px-3 text-[16px] font-normal">
                  {prize}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Important Dates Table */}
      <div className="overflow-hidden border border-emerald-800 bg-transparent mt-4 mb-8 rounded-[32px] min-h-[342px]">
        {/* Table Header */}
        <div className="p-2 sm:p-3 md:p-4 bg-emerald-800 text-white font-bold text-center  sm:text-base md:text-lg lg:text-xl h-[56px]flex items-center text-[22px]">
          Important Dates
        </div>

        {/* Table Body */}
        <div className="grid grid-cols-2 text-white text-xs sm:text-sm md:text-base">
          {dates.slice(0, 3).map((item, index) => (
            <div key={index} className="border-t border-emerald-800 p-2 sm:p-3 md:p-4 border-r h-[90px] flex flex-col gap-2 justify-center ">
              <div className="font-bold text-[16px]">{item.event}:</div>
              <div>{item.date}</div>
            </div>
          ))}
          {dates.slice(3, 6).map((item, index) => (
            <div key={index} className="border-t border-emerald-800 p-2 sm:p-3 md:p-4">
              <div className="font-semibold text-[16px]">{item.event}:</div>
              <div>{item.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
        </div>
        </div>
        </PageMaxWidth>
    </div>
  )
}

export default PriceSection