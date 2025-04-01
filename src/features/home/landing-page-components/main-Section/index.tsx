import { PageMaxWidth } from '@/components/page-max-width'
import React from 'react'

const MainSection = () => {
  return (
    <div className='min-h-[985px] bg-[#212121] text-white py-14 md:min-h-[556px] pt-[64px]'>
        <PageMaxWidth>
           <div className='flex justify-center pb-3 items-center md:py-6'>
             <h2 className='text-[24px] font-avenir tracking-[-0.37px] md:text-[40px] '>How it works</h2>
           </div>
           {/* section two */}
           <div className='grid grid-rows-3 grid-cols-1 py-4 gap-8 md:grid-cols-3 md:grid-rows-1 md:gap-0 md:pt-[32px]'>
            <div className=' flex flex-col items-center text-center p-4 rounded-[8px] gap-2 md:gap-5
                  min-h-[240px] bg-[#1b1b1f]  md:bg-transparent md:p-0 relative'>
                  <div className='flex flex-col gap-2 md:gap-5 md:items-center  md:w-[100%] '>
                    <h2 className='font-avenirLtsd text-[20px] font-normal'>Step 1</h2>
                    <div className='h-[60px] w-[60px] z-[1]'>
                      <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1741968737/Frame_61_fvbk0o.png" alt="" />
                    </div>
                    <div className='hidden md:block md:absolute w-[169px] h-[3px] bg-[#2e2e2e] top-[27%] right-[0]'></div>
                  </div>
                  <div  className='flex flex-col gap-2 md:h-[146px]  justify-center md:mt-4 px-3 md:bg-[#1b1b1f] md:rounded-[8px]
                  cursor-pointer md:mr-3'>
                  <h2 className='font-avenir text-[20px] tracking-[-0.37px] font-normal'>Connect Your Wallet</h2>
                <p className='font-avenirLtsd text-[18px] text-[#ababaf] tracking-[-0.37px] md:text-[16px]'>Connecting your wallet automatically makes you a member of the community.</p>
                  </div>
            </div>
            <div className=' flex flex-col items-center text-center p-4 rounded-[8px] gap-2 md:gap-5 
                  min-h-[240px] bg-[#1b1b1f]  md:p-0 md:bg-transparent relative '>
                    <div className='flex flex-col gap-2 md:gap-5 md:items-center  md:w-[100%] '>
                    <h2 className='font-avenirLtsd text-[20px] font-normal'>Step 2</h2>
                    <div  className='h-[60px] w-[60px] z-[1]'>
                      <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1741968799/Frame_62_dio1uj.png" alt="" />
                    </div>
                    <div className='hidden md:block md:absolute w-[169px] h-[3px] bg-[#2e2e2e] top-[27%] right-0'></div>
                    <div className='hidden md:block md:absolute w-[169px] h-[3px] bg-[#2e2e2e] top-[27%] left-0'></div>
                    </div>
                    <div className='flex flex-col gap-2 md:h-[146px]  justify-center md:mt-4 px-3  md:bg-[#1b1b1f] md:rounded-[8px]
                    cursor-pointer md:mr-3'>
                      <h2 className='font-avenir text-[20px] tracking-[-0.37px] font-normal'>Buy Wakanda NFT</h2>
                    <p  className='font-avenirLtsd text-[18px] text-[#ababaf] tracking-[-0.37px] md:text-[16px]'>To have the right to vote for or against proposals you must possess our WAKANDA NFTs. If you do not have, kindly buy.</p></div>
            </div>
            <div className=' flex flex-col items-center text-center p-4 rounded-[8px] gap-2 
                  min-h-[240px] bg-[#1b1b1f]  md:p-0 md:bg-transparent md:gap-5 relative'>
                    <div className='flex flex-col gap-2 md:gap-5 md:items-center  md:w-[100%]'>
                    <h2 className='font-avenirLtsd text-[20px] font-normal'>Step 3</h2>
                    <div  className='h-[60px] w-[60px] z-[1]'>
                      <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1741968798/Frame_63_zhlysj.png" alt="" />
                    </div>
                    <div className='hidden md:block md:absolute w-[169px] h-[3px] bg-[#2e2e2e] top-[27%] left-0'></div>
                    </div>
                    <div className='flex flex-col gap-2 md:h-[146px]  justify-center md:mt-4 px-3  md:bg-[#1b1b1f] md:rounded-[8px]
                    cursor-pointer md:mr-3'>
                    <h2 className='font-avenir text-[20px] tracking-[-0.37px] font-normal'>Vote </h2>
                    <p  className='font-avenirLtsd text-[18px] text-[#ababaf] tracking-[-0.37px] md:text-[16px]'>You may now vote during proposals. Your voice matters in the community. Your are one of us, vote wisely.</p>
                    </div>    
               
            </div>
           </div>
        </PageMaxWidth>
    </div>
  )
}

export default MainSection