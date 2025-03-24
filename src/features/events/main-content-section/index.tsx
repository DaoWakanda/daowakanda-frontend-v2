import { PageMaxWidth } from '@/components/page-max-width'
import React from 'react'
import Link from "next/link"

const MainSection = () => {
  return (
        <section className="w-full py-24 bg-black font-roboto">
        <PageMaxWidth>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="relative px-6 py-2  text-white rounded-full overflow-hidden border-2 w-[282px] h-[36px] flex justify-center items-center text-sm cursor-pointer mx-auto">
            <span className=" absolute inset-0 bg-gradient-to-r from-white/70 to-[#C5EE4F] -z-10 hover:bg-gradient-to-l hover:from-white/70 hover:to-[#C5EE4F]"></span>
            Algorand Regional Hackathon 2024
          </div>


          {/* <button className="relative px-6 py-2 font-semibold text-white rounded-lg overflow-hidden border-2">
  <span className="absolute inset-0 bg-gradient-to-l from-white/70 to-[#C5EE4F] -z-10"></span>
  Button Text
</button> */}

          <p className="text-white/90 text-lg sm:text-xl max-w-3xl mx-auto">
            We are thrilled to announce our upcoming regional hackathons in Nigeria following the immense success of our
            global hackathon earlier this year.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Card */}
          <div className="bg-[#00484F] rounded-2xl p-8 sm:p-10">
            <h3 className="text-[#C1FF00] text-lg lg:text-xl  font-medium mb-8 ">This is an exciting step towards our effort to:</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <img
                src='https://res.cloudinary.com/dk5mfu099/image/upload/v1742036683/checkmark-badge-04_i9bhev.png'
                alt=''
                 className="w-5 h-5 mt-1 text-[#C1FF00]" />
                <div>
                  <span className="text-white font-medium">Connect</span>
                  <span className="text-white/90"> with our regional audience</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <img
                src='https://res.cloudinary.com/dk5mfu099/image/upload/v1742036683/checkmark-badge-04_i9bhev.png'
                alt=''
                 className="w-5 h-5 mt-1 text-[#C1FF00]" />
                <div>
                  <span className="text-white font-medium">Recognize</span>
                  <span className="text-white/90">
                    {" "}
                    the abundance of talent in the entrepreneurial and development fields
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <img
                src='https://res.cloudinary.com/dk5mfu099/image/upload/v1742036683/checkmark-badge-04_i9bhev.png'
                alt=''
                 className="w-5 h-5 mt-1 text-[#C1FF00]" />
                <div>
                  <span className="text-white font-medium">Empower</span>
                  <span className="text-white/90">
                    {" "}
                    local developers and innovators to explore the unique capabilities of this cutting-edge blockchain
                    technology
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <img
                src='https://res.cloudinary.com/dk5mfu099/image/upload/v1742036683/checkmark-badge-04_i9bhev.png'
                alt=''
                 className="w-5 h-5 mt-1 text-[#C1FF00]" />
                <div>
                  <span className="text-white font-medium">Enable collaboration</span>
                  <span className="text-white/90"> between developers and entrepreneurs</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6 text-center md:text-left text-[22px] font-roboto">
            <p className="text-white/80 text-lg leading-relaxed">
            These regional hackathons will serve as a stepping-stone to our next global event, allowing us to focus on building stronger community ties, fostering collaboration, and encouraging the creation of higher-quality projects.
            </p>

            <p className="text-white/80 text-lg leading-relaxed">
            Our goal is to showcase the talent in these countries and enable participants to build impactful solutions on Algorand that address regional challenges and set the stage for success in the global ecosystem.
            </p>

            <Link
              href="/get-started"
              className="inline-flex items-center text-[#C1FF00] hover:text-[#C1FF00]/90 transition-colors mt-4 font-normal"
            >
              Get started
              <img className="ml-2 w-4 h-4" src="https://res.cloudinary.com/dk5mfu099/image/upload/v1742501223/Vector_Stroke_euisfe.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
    
        </PageMaxWidth>
        </section>
  )
}


export default MainSection