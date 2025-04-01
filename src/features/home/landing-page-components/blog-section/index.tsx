import { PageMaxWidth } from "@/components/page-max-width"


const BlogSection = () => {
  return (
    <div className='min-h-[642px] relative text-white py-16 md:min-h-[851px]'>
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dk5mfu099/image/upload/v1741983342/dao-1_pmz804.jpg')] bg-no-repeat bg-center bg-cover"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,.79)] to-[rgba(0,0,0,.79)]"></div>
        <PageMaxWidth>
          <div className="relative">
              <div className=" flex text-center justify-center flex-col gap-1 mb-8 " >
                  <h2 className="text-[24px] font-avenir font-black md:text-[40px]">From our blog</h2>
                  <p className="text-[#919094] text-[16px] font-plusJarkata md:text-[24px]">Learn more about DaoWakanda, Algorand Nigeria community</p>
              </div>
              <div className=" flex gap-7 md:h-[636px]">
                  <div className="hidden md:flex w-[50%]  overflow-hidden rounded-[20px] flex-col group hover:shadow-xl transition-shadow duration-300">
                    <div className="h-[80%] overflow-hidden">
                      <img src="https://res.cloudinary.com/dlinprg6k/image/upload/v1743079671/dao4_n4axlg.jpg" alt=""
                      className="transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div
                    className="h-[165px]  flex flex-col px-[34px] py-[37px] bg-[#1E1E1E]">
                      <h2 className="text-[24px] font-black font-avenir">DaoWakanda-Connect 2023 Recap</h2>
                      <h3 className="text-[16px] font-plusJarkata font-semibold text-[#D8D8D8]">Author: Micah Tom</h3>
                      <p className="text-[#6F6F6F] text-[16px] font-light">December 31 , 2023</p>
                    </div>
                  </div>
                  <div className=" w-full min-h-[400px] flex flex-col gap-3 md:w-[50%] md:h-full md:gap-5">
                    <div className="flex overflow-hidden bg-[#1E1E1E] min-h-[125px] rounded-[20px] md:h-full group hover:shadow-xl transition-shadow duration-300">
                      <div className="w-[35%] overflow-hidden">
                        <img src="https://res.cloudinary.com/dlinprg6k/image/upload/v1743079670/dao1_picvaq.jpg" className="transition-transform duration-500 group-hover:scale-110" alt="" />
                      </div>
                      <div className="flex flex-col justify-center px-[13px] md:px-[30px] gap-1 ">
                        <h2 className="flex flex-col font-avenir font-black text-[16px] md:text-[24px] ">DaoWakanda Monthly <span>Report: November</span> </h2>
                        <h3 className="font-plusJarkata text-sm font-semibold text-[#D8D8D8] md:text-[16px]">Author: Admin</h3>
                        <p className="font-plusJarkata text-sm font-light text-[#6F6F6F] md:text-[16px]">December 31 , 2023</p>
                     </div>
                    </div>
                    <div className="flex overflow-hidden bg-[#1E1E1E] min-h-[125px] rounded-[20px] md:h-full group hover:shadow-xl transition-shadow duration-300">
                      <div className="w-[35%] overflow-hidden">
                        <img src="https://res.cloudinary.com/dlinprg6k/image/upload/v1743079670/dao2_qyaa9c.jpg" className="transition-transform duration-500 group-hover:scale-110" alt="" />
                      </div>
                      <div className="flex flex-col justify-center px-[13px] gap-1  md:px-[30px] ">
                        <h2 className="flex flex-col font-avenir font-black text-[16px] md:text-[24px]">NFT Launch</h2>
                        <h3 className="font-plusJarkata text-sm font-semibold text-[#D8D8D8] md:text-[16px]">Author: Micah Tom</h3>
                        <p className="font-plusJarkata text-sm font-light text-[#6F6F6F] md:text-[16px]">December 31 , 2023</p>
                     </div>
                    </div><div className="flex overflow-hidden bg-[#1E1E1E] min-h-[125px] rounded-[20px] md:h-full group hover:shadow-xl transition-shadow duration-300">
                      <div className="w-[35%] overflow-hidden">
                        <img src="https://res.cloudinary.com/dlinprg6k/image/upload/v1743079670/dao3_dqqtah.jpg" className="transition-transform duration-500 group-hover:scale-110" alt="" />
                      </div>
                      <div className="flex flex-col justify-center px-[13px] gap-1  md:px-[30px] ">
                        <h2 className="flex flex-col font-avenir font-black text-[16px] md:text-[24px]">Game night </h2>
                        <h3 className="font-plusJarkata text-sm font-semibold text-[#D8D8D8] md:text-[16px]">Author: Micah Tom</h3>
                        <p className="font-plusJarkata text-sm font-light text-[#6F6F6F] md:text-[16px]">December 31 , 2023</p>
                     </div>
                    </div>
                  </div>
              </div>
          </div>  
        </PageMaxWidth>
    </div>
  )
}

export default BlogSection