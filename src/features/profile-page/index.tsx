import ProfileForm from '@/features/profile-page/profile-form/index';
import { PageMaxWidth } from '@/components/page-max-width';

const ProfilePage = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden pt-[100px] lg:pt-[85px]  bg-[#282C35] text-white font-[Inter] relative">
      <PageMaxWidth>
        <div className="max-w-7xl mx-auto px-4 py-8 flex justify-between gap-8">
          {/* Main content */}
          <div className=" w-full md:w-[618px]  relative z-[1] flex ">
            <ProfileForm />
          </div>
          <div className="w-full md:w-[528px]  mt-[65px] hidden lg:block ">
            <div className="text-center md:text-left mb-6 font-avenir">
              <h2 className="text-[32px] font-extrabold text-[#C5EE4F] mb-2">
                Let's Know Who You Are.
              </h2>
              <p className="text-gray-300 text-[20px] font-light">
                Complete KYC and tell community members about you.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative background elements */}

        <div className="absolute hidden bottom-[-30px] md:right-[-100px] z-0 md:w-[585px] md:h-[585px]  lg:block">
          <img
            src="https://res.cloudinary.com/dlinprg6k/image/upload/v1730466442/Frame_3_iujvnt.png"
            alt=""
          />
        </div>
        <div className="absolute block md:hidden bottom-[-30px]  z-0 w-[235px] h-[235px] left-[130px]">
          <img
            src="https://res.cloudinary.com/dlinprg6k/image/upload/v1730053686/Frame_2_vma7g6.png"
            alt=""
          />
        </div>
      </PageMaxWidth>
    </div>
  );
};

export default ProfilePage;
