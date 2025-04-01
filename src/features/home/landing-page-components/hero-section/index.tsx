import { Button } from "@/components/button"
import { PageMaxWidth } from "@/components/page-max-width"


const HeroSection = () => {
  return (
    <>
    <div>
      <div className='min-h-[975px] lg:h-[1024px] flex  relative pt-[100px]'>
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dk5mfu099/image/upload/v1741874580/05c44bba30b06c1ea4724fa0430481d2_aekbvy.jpg')] bg-no-repeat bg-[65%_70%] lg:bg-[0_0] bg-cover"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,.99)] to-[rgba(0,0,0,.2)]">
          </div>
        <PageMaxWidth>
          <div className="text-white  z-[1] relative  h-[100%] pt-[150px]  md:w-[60%] lg:w-[526px] ">
           <div className=" flex flex-col min-h-[344px] items-center text-center md:text-left gap-[32px]">
              <div className="flex flex-col ">
                <h1 className="text-[61px] font-avenir font-extrabold text-greenColor tracking-[-0.28px] lg:leading-[95.1px] lg:text-[90px] pb-3">DaoWakanda</h1>
                <div className="font-[350px]  font-avenirLtsd text-[20px]  px-3  ">This is a decentralized autonomous organization to revolutionize community engagement and participation within Algorand Nigeria.</div>
              </div>
              <div className="flex gap-8 flex-col md:flex-row mr-auto w-[100%] items-center">
                  <Button >
                    <p className="text-[18px] text-[#00484f] p-4 font-bold">Explore Proposals</p>
                  </Button>
                  <div className="flex items-center justify-center gap-3">
                    <span>
                      <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1741874494/play-circle_r4wiwx.png" alt="" />
                    </span>
                    <p className="text-[18px] font-normal font-plusJarkata">Watch video</p>
                  </div>
              </div>
             </div>
             <div className=" mt-[94px] h-[72px]  relative px-1 md:mt-[20px] md:h-[94px] ">
             <div className="absolute inset-0 bg-gray-100 bg-opacity-10 backdrop-blur-sm "></div>
             <div className="relative z-10  flex gap-[22px] justify-evenly items-center h-[100%] font-plusJarkata">
             <div  className=" flex gap-2 items-center">
                  <h2 className="text-[32px] font-semibold md:text-[42px] ">2943</h2>
                  <p className="text-[10px] font-normal flex flex-col pr-2 text-left md:text-[13px]">Active <span> Projects</span></p>
              </div>
              <div className=" h-[38px] w-[17px] my-auto">
                <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1741940721/Line_yob43x.svg" alt="" />
              </div>
              <div className=" flex gap-2 items-center">
                 <h2 className="text-[32px]  font-semibold md:text-[42px]">$1M+</h2>
                <p className="text-[10px] font-normal flex flex-col pr-2 text-left md:text-[13px]">Community <span> Members</span></p>
              </div>
             </div>    
             </div>
          </div>
        </PageMaxWidth>
        </div>
    </div>
    </>
  )
}

export default HeroSection