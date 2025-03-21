import React from 'react'
import HeroSection from '../hackathon-components/Hero-section'
import MainSection from '../hackathon-components/Main-content-section'
import BenefitSection from '../hackathon-components/Benefit-section'
import PriceSection from '../hackathon-components/Price/PriceSection'

const page = () => {
  return (
    <div >
      <HeroSection />
      <MainSection />
      <PriceSection />
      <BenefitSection />
    </div>
  )
}

export default page