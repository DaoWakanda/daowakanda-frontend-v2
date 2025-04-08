import { BackgroundOverlay } from '../background-overlay';

export function EmailConfirmedModal() {
  return (
    <BackgroundOverlay>
      <div className="m-10 text-white bg-[#1F2431] w-[289px] md:w-[650px] h-[267px] md:h-[500px] pt-5 md:pt-20 rounded-sm md:rounded-2xl">
        <div className="m-0 md:m-5 flex flex-col justify-center items-center">
          <img
            src="https://res.cloudinary.com/dlinprg6k/image/upload/v1744018640/Frame_sdr0x4.png"
            alt="email"
            className="w-[80px] md:w-[120px]"
          />
          <div className="text-center pt-2 p-5 md:pt-0 md:p-20">
            <h1 className="text-[#C5EE4F] font-avenir text-[25px] md:text-[50px] font-extrabold">
              Email Confirmed
            </h1>
            <p className="mt-0 md:pt-3 text-[#D1D1D6] text-sm md:text-[18px]">
              Your email has been confirmed. Proceed to your dashboard to continue using DaoWakanda{' '}
            </p>
            <button className="mt-2 md:mt-5 bg-[#C5EE4F] rounded-md p-3 w-[200px] text-black text-sm">
              Proceed
            </button>
          </div>
        </div>
      </div>
    </BackgroundOverlay>
  );
}
