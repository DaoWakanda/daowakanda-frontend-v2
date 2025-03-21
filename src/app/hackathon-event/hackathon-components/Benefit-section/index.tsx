import { PageMaxWidth } from '@/components/page-max-width'
import React from 'react'

const BenefitSection = () => {
  return (
    <div className='min-h-[999px] py-4 md:pt-16 text-white  font-roboto text-center md:h-[900px]  '>
        <PageMaxWidth>
            <div className='flex flex-col h-[100%] '>
                <div className='text-[28px] font-bold mt-[20px] py-5 lg:text-5xl md:mb-5 '>
                    <h2>Other Benefit</h2>
                </div>
            <div className='grid grid-cols-1 grid-rows-4 gap-4 md:grid-cols-2 md:grid-rows-2   md:h-[660px] '>
                <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-[#4D8C1F] to-[#C1FF00] p-[1px] flex justify-center items-center
               shadow-[0px_0px_5px_5px_rgba(0,72,79,0.5)]">
                    <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-[#4D8C1F] to-[#C1FF00] p-2 sm:p-10">
                    <p className="text-center text-[16px] sm:text-xl leading-relaxed text-[#001F1F]">
                        Engage in various <span className="font-semibold">workshops tailored to developers and entrepreneurs</span>.
                        These workshops will provide hands-on experience with Algorand's blockchain technology, helping developers
                        deepen their technical skills and leverage the possibility of building smart contracts using Python, while
                        offering entrepreneurs valuable insights on how to build scalable blockchain-based solutions.
                    </p>
                    </div>
                    
              </div>
              <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-[#4D8C1F] to-[#C1FF00] p-[1px] flex justify-center items-center
               shadow-[0px_0px_5px_5px_rgba(0,72,79,0.5)]">
                    <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-[#4D8C1F] to-[#C1FF00] p-2 sm:p-10">
                    <p className="text-center text-[16px] sm:text-xl leading-relaxed text-[#001F1F]">
                    Don't worry if you don't have a team. All registrants will have the opportunity to join <span className="font-semibold"> team formation sessions</span>.
                     in order to find suitable members to take their idea to the hackathon final. Fostering collaboration and facilitating introductions amongst registants is extremely important to us as we believe the best startups stem from combination development and entrepreneurial skills.
                    </p>
                    </div>
                    
              </div>
              <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-[#4D8C1F] to-[#C1FF00] p-[1px] flex justify-center items-center
               shadow-[0px_0px_5px_5px_rgba(0,72,79,0.5)]">
                    <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-[#4D8C1F] to-[#C1FF00] p-2 sm:p-10">
                    <p className="text-center text-[16px] sm:text-xl leading-relaxed text-[#001F1F]">
                    Participants will receive <span className="font-semibold">guidance on how to pitch their ideas effectively</span>.
                    preparing them for the final pitch competition. The event will also foster networking opportunities, allowing attendees to connect with like-minded peers, industry experts, mentors, and potential collaborators.
                    </p>
                    </div>
                    
              </div>
              <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-[#4D8C1F] to-[#C1FF00] p-[1px] flex justify-center items-center
               shadow-[0px_0px_5px_5px_rgba(0,72,79,0.5)]">
                    <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-[#4D8C1F] to-[#C1FF00] p-2 sm:p-10">
                    <p className="text-center text-[16px] sm:text-xl leading-relaxed text-[#001F1F]">
                    The winners of the regional hackathons will go directly to the last round of judging for the next Global hackathon, providing you with another opportunity to secure prize money and gain great exposure for your project. 
                    </p>
                    </div>
                    
              </div>
                  
                </div>
            </div>
        </PageMaxWidth>
    </div>
  )
}

export default BenefitSection