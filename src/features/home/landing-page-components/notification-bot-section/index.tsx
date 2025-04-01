import { PageMaxWidth } from '@/components/page-max-width'
import React from 'react'

const NotificationBot = () => {
  return (
    <div className='bg-[#2A84EE] text-white min-h-[370px] py-16 md:min-h-[228px] '>
        <PageMaxWidth>
            <div className='flex text-center justify-center flex-col items-center gap-8 md:flex-row md:justify-evenly'>
                <div className='flex flex-col justify-center text-center items-center gap-4 md:flex-row md:gap-8'>
                    <div className='w-[50.12px] h-[50px] md:w-[100.25px] md:h-[100px]'><img src="https://res.cloudinary.com/dlinprg6k/image/upload/v1743365255/Group_qeazvp.png" alt="" /></div>
                    <div className='flex flex-col md:text-left '>
                        <h2 className='font-avenir font-black text-[20px] md:text-[32px]'>Governance notification bot</h2>
                        <p className='text-[#F0F0F0] text-[16px] font-plusJarkata md:text-[20px]'>Stay up to speed with DaoWakanda  governance developments</p>
                    </div>
                </div>
                <div className='bg-white w-[122px]  p-4 text-[#161616] font-plusJarkata text-sm cursor-pointer md:w-[146px] md:rounded-[50px] md:text-[16px]'>
                    <button >
                        Get notified
                    </button>
                </div>
            </div>
        </PageMaxWidth>
    </div>
  )
}

export default NotificationBot