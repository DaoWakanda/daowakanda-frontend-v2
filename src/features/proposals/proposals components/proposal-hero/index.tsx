
import { PageMaxWidth } from '@/components/page-max-width'
import React from 'react'

const ProposalHeroSection = () => {
  return (
   <div>
      <section className="relative py-16 pt-[100px] min-h-[322px] items-center  ">
      <img
    src="https://res.cloudinary.com/dlinprg6k/image/upload/v1725102716/African-tech-startups-990x557-810x456-1_1_2_tmtz8t.png"
    alt="Overlay"
    className="w-full h-full object-cover absolute inset-0 z-0"
     />
       <div className="absolute inset-0 bg-custom-lime" />

     <PageMaxWidth>
        <div className="container mx-auto px-4 relative z-5 font-inter">
          <div className="max-w-2xl">
            <p className="text-sm mb-2  md:text-[16px]">DaoWakanda Governance:</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Participate in
              <br />
              decision making
            </h1>
            <p className="text-sm max-w-md md:text-[16px]">
              Focused on revolutionizing community engagement and participation starting with Algorand Nigeria.
            </p>
          </div>
        </div> 
        </PageMaxWidth>
      </section>
   </div>
    
  )
}

export default ProposalHeroSection