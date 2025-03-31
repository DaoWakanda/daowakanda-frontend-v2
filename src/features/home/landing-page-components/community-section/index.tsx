import { PageMaxWidth } from '@/components/page-max-width'
import React from 'react'

const CommunitySection = () => {
  return (
    <div className='min-h-[800px] relative text-white py-16'>
      <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dlinprg6k/image/upload/v1743278537/e074c2d61b466294eed2c723b6ed3e62_ib2ua3.jpg')] bg-no-repeat bg-center bg-cover"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,.79)] to-[rgba(0,0,0,.79)]"></div>
      <PageMaxWidth>
        <div className='relative flex flex-col '>
          <div className=''>
              <div className='flex flex-col justify-center text-center gap-1 mb-8'>
                <h2 className='text-white text-[24px] font-avenir font-black md:text-[40px]'>Join Our Community</h2>
                <p className='text-[16px] font-plusJarkata text-[#919094] md:text-[24px]'>Be part of the community and have a say in the future of the Algorand Nigeria community</p>
              </div>
              <div className='grid grid-cols-2 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-2  min-h-[302px] mb-16'>
                    <div className='flex w-full  p-4 rounded-[16px] bg-[#1E1E1E] cursor-pointer gap-4  items-center hover:bg-[#056da1] transition duration-100 ease-in-out'>
                        <div className='w-[50px] h-[50px] md:w-[100.25px] md:h-[100px] '>
                          <img src="https://res.cloudinary.com/dlinprg6k/image/upload/v1743279224/telegram_crbgnz.png" alt="" />
                        </div>
                        <div className='flex flex-col'>
                          <h2 className='font-avenir text-[16px] font-black md:text-[24px]'>Telegram</h2>
                          <p className='text-[#919094] text-sm font-plusJarkata md:text-[16px]'>Join chat</p>
                        </div>
                    </div>
                    <div className='flex w-full  p-4 rounded-[16px] bg-[#1E1E1E] cursor-pointer gap-4 items-center hover:bg-black transition duration-100 ease-in-out'>
                        <div className='w-[50px] h-[50px] md:w-[100px] md:h-[100px]'>
                          <img src="https://res.cloudinary.com/dlinprg6k/image/upload/v1743279224/x_sosgwc.png" alt="" />
                        </div>
                        <div className='flex flex-col'>
                          <h2 className='font-avenir text-[16px] font-black md:text-[24px]'>Twitter(x)</h2>
                          <p className='text-[#919094] text-sm font-plusJarkata'>Follow us</p>
                        </div>
                    </div>
                    <div className='flex w-full  p-4 rounded-[16px] bg-[#1E1E1E] cursor-pointer gap-4 items-center hover:bg-[#cd62161f] transition duration-100 ease-in-out'>
                        <div className='w-[50px] h-[50px] md:w-[102.4px] md:h-[99.8px]'>
                          <img src="https://res.cloudinary.com/dlinprg6k/image/upload/v1743279224/github_swt7hk.png" alt="" />
                        </div>
                        <div className='flex flex-col'>
                          <h2 className='font-avenir text-[16px] font-black md:text-[24px]'>Github</h2>
                          <p className='text-[#919094] text-sm font-plusJarkata'>Follow us</p>
                        </div>
                    </div>
                    <div className='flex w-full  p-4 rounded-[16px] bg-[#1E1E1E] cursor-pointer gap-4 items-center'>
                        <div className='w-[50px] h-[50px] md:w-[100.25px] md:h-[100px]'>
                          <img src="https://res.cloudinary.com/dlinprg6k/image/upload/v1743279223/envelope_n0o0bx.png" alt="" />
                        </div>
                        <div className='flex flex-col'>
                          <h2 className='font-avenir text-[16px] font-black md:text-[24px]'>Contact us</h2>
                          <p className='text-[#919094] text-sm font-plusJarkata'>Get in touch</p>
                        </div>
                    </div>
                    <div className='flex w-full  p-4 rounded-[16px] bg-[#1E1E1E] cursor-pointer gap-4 col-span-2 items-center'>
                        <div className='w-[50px] h-[50px] md:w-[100px] md:h-[100px]'>
                          <img src="https://res.cloudinary.com/dlinprg6k/image/upload/v1743279223/blog_uth15p.png" alt="" />
                        </div>
                        <div className='flex flex-col'>
                          <h2 className='font-avenir text-[16px] font-black md:text-[24px]'>Blog</h2>
                          <p className='text-[#919094] text-sm font-plusJarkata'>learn about daowakanda</p>
                        </div>
                    </div>
              </div>
          </div>
          <div className=' flex flex-col text-center justify-center h-[270px] gap-8 '>
            <div className='flex flex-col gap-1'>
              <h3 className='text-[20px] font-avenir font-black md:text-[40px]'>Subscribe to our mailing list</h3>
              <p className='font-plusJarkata text-[16px] text-[#919094] md:text-[24px]'>Stay up to date with Algorand projects developments</p>
            </div>
            <div>
              <form className='border-green-700 relative md:w-[629px] md:h-[64px] mx-auto' >
                <input type="text" placeholder='Email address'
                className='w-full outline-none pl-5 py-5 pr-[150px] md:pr-[190px] z-0 rounded-[50px] font-plusJarkata text-sm font-light text-[#919094]' />
                <button type='submit' className='absolute bg-black h-[40px]  top-[8px] md:top-[5px] right-[8px]  rounded-[100px] w-[126px] py-2 px-8 font-avenir text-sm font-black cursor-pointer md:h-[48px] md:w-[153px] text-[20px] '>Subscribe</button>
              </form>
            </div>

          </div>
        </div>
      </PageMaxWidth>
    </div>
  )
}

export default CommunitySection