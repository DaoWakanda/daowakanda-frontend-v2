import { BackgroundOverlay } from "../background-overlay"


export function VerificationSentModal() {
 return (
    <BackgroundOverlay>
      <div className="m-10 text-white bg-[#1F2431] w-[289px] md:w-[650px] h-[267px] md:h-[500px] pt-5 md:pt-20 rounded-sm md:rounded-2xl">
        <div className='m-0 md:m-5 flex flex-col justify-center items-center'>
          <img 
          src='https://res.cloudinary.com/dlinprg6k/image/upload/v1743110130/Frame_qal5js.png'
          alt="email"
          className="w-[80px] md:w-[120px]"
          />
          <div className='text-center pt-2 p-5 md:pt-0 md:p-20'>
          <h1 className='text-[#C5EE4F] font-avenir text-[25px] md:text-[50px] font-extrabold'>Verification Sent</h1>
          <p className='text-[#D1D1D6] text-sm'>We’ve sent an email to your inbox user@gmail.com, Check your email and confirm to verify your account.</p>
          <p className='pt-3 md:pt-10 text-[#D1D1D6] text-sm'>Yet to receive an email? <span className='text-[#C5EE4F]'>Resend Link</span></p>
          </div>
        </div>
      </div>
    </BackgroundOverlay>
  );
}