import { PageMaxWidth } from "@/components/page-max-width"
import Link from "next/link"

const HeroSection = () => {
  return (
    <section className="relative h-[980px] md:h-[1024px] w-full overflow-hidden bg-black pt-[89px]">
            <PageMaxWidth>
      {/* Background Image */}
      <div className="absolute inset-x-0 bottom-0  w-full ">
        <div   className="h-[686px] aboslute top-[258px] ">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dramatic-chess-piece%20%282%29%201-ztf3Clp0vPON2nqD5I1d5NQg4CcEyu.png"
          alt="Chess pieces on a board"  
        />
        </div>
      
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/100 to-transparent opacity-90" />
     </div>

      {/* Top Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/100 to-transparent opacity-70" />
      <div className=" absolute top-[480px] h-[499px] w-[385px] left-1/2 transform -translate-x-1/2 lg:h-[578px] lg:w-[391px]">
        <img src="https://res.cloudinary.com/dk5mfu099/image/upload/v1742036962/dramatic-chess-piece__3__1-removebg-preview_vessbm.png"
        alt="" />
      </div>

      {/* Content */}
      <div className="relative ">
      <div className="z-10  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 h-full  flex flex-col items-center justify-center">
        {/* Hackathon Tag */}
        
        {/* <div className="flex px-4 py-1 mb-8 cursor-pointer rounded-full border border-white/10 text-white/80 text-sm h-[36px] items-center w-[282px] justify-center">
          Algorand Regional Hackathon 2024
        </div> */}
        <div>
          
        </div>
           <div className="relative px-6 py-2 mb-8  text-white rounded-full overflow-hidden border-2 w-[282px] h-[36px] flex justify-center items-center text-sm cursor-pointer mx-auto">
            <span className=" absolute inset-0 bg-gradient-to-r from-white/70 to-[#C5EE4F] -z-10 hover:bg-gradient-to-l hover:from-white/70 hover:to-[#C5EE4F]"></span>
            Algorand Regional Hackathon 2024
          </div>


        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-white/70 to-[#C5EE4F] text-transparent bg-clip-text">
          <span className="block ">Naija,</span>
          <span className="block ">Make Your Move</span>

        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 text-center font-normal lg:w-[461px]">
          It's time to make your next move with Algorand and stand a chance to win from a pool of <span className="text-[#C1FF00]">20,000 USDC$</span>
        </p>

        {/* CTA Buttons - Always horizontal */}
        <div className="flex flex-row justify-center gap-4">
          <Link
            href="/register"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#c5ee4f] text-[#00484F] font-semibold hover:bg-[#9FCC00] transition-colors"
          >
            Register Now
          </Link>
          <Link
            href="/learn-more"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border  text-[#C5EE4F] hover:bg-white/10 transition-colors"
          >
            Learn more
          </Link>
        </div>
      </div>
      </div>
            </PageMaxWidth>
        </section>
    
  )
}

export default HeroSection