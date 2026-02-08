import { PageMaxWidth } from '@/components/page-max-width';
import { Icons } from './icons';

export const Join = () => {
  return (
    <div className="flex flex-col bg-[#1F1F1F] py-[200px]">
      <PageMaxWidth>
        <div className="flex flex-col gap-[100px]">
          <div className="flex gap-[64px] items-center">
            <div className="flex flex-col gap-6 flex-1 max-w-[470px]">
              <div className="flex flex-col gap-5">
                <h2 className="text-white font-medium text-[46px] font-degularDisplay">
                  Join as a Community Member
                </h2>

                <div className="flex flex-col gap-1">
                  <h4 className="text-white font-semibold text-[24px] font-degularDisplay">
                    Who is this for?
                  </h4>
                  <p className="text-white font-[400] text-[24px] font-degularDisplay">
                    Builders, researchers, contributors, and validators.
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <h4 className="text-white font-semibold text-[24px] font-degularDisplay">
                    What You Can Do:
                  </h4>

                  <div className="flex flex-col gap-3 items-start">
                    {[
                      'Participate in governance',
                      'Validate projects',
                      'Contribute skills',
                      'Earn recognition',
                    ].map((item) => (
                      <div className="px-5 py-[6px] rounded-[100px] bg-[#13C264]">
                        <span className="text-[#FAF1E6] font-medium text-[22px] font-degularDisplay">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button className="flex items-center gap-[10px]">
                <span className="text-white font-medium text-[18px] font-degularDisplay">
                  Join the Community
                </span>
                <div className="w-[39px] h-[39px] rounded-full bg-[#182CD1] flex items-center justify-center">
                  <Icons.ArrowRight />
                </div>
              </button>
            </div>

            <div className="flex flex-1 rounded-[20px] overflow-hidden">
              <img
                src="https://res.cloudinary.com/dlinprg6k/image/upload/v1770559178/daowakanda/7249c972edee0bce1e35066fc2a472527e850194_f0in3c.jpg"
                className="w-full h-[auto] object-cover rounded-[20px]"
              />
            </div>
          </div>

          <div className="flex gap-[64px] items-center">
            <div className="flex flex-1 rounded-[20px] overflow-hidden">
              <img
                src="https://res.cloudinary.com/dlinprg6k/image/upload/v1770559180/daowakanda/088e5f7cacd960fbb726ad765983516b9b8df349_kplpu9.jpg"
                className="w-full h-[auto] object-contain rounded-[20px]"
              />
            </div>
            <div className="flex flex-col gap-6 flex-1 max-w-[470px]">
              <div className="flex flex-col gap-5">
                <h2 className="text-white font-medium text-[46px] font-degularDisplay">
                  Apply as a Founder
                </h2>

                <div className="flex flex-col gap-1">
                  <h4 className="text-white font-semibold text-[24px] font-degularDisplay">
                    Who should apply?
                  </h4>
                  <p className="text-white font-[400] text-[24px] font-degularDisplay">
                    Builders, active teams and projects ready for accountability
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <h4 className="text-white font-semibold text-[24px] font-degularDisplay">
                    What We Provide:
                  </h4>

                  <div className="flex flex-col gap-3 items-start">
                    {[
                      'Governance structure',
                      'Execution support',
                      'Community & Contributors',
                      'Visibility & Partnerships',
                    ].map((item) => (
                      <div className="px-5 py-[6px] rounded-[100px] bg-white">
                        <span className="text-black font-medium text-[22px] font-degularDisplay">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button className="flex items-center gap-[10px]">
                <span className="text-white font-medium text-[18px] font-degularDisplay">
                  Apply as a founder
                </span>
                <div className="w-[39px] h-[39px] rounded-full bg-[#182CD1] flex items-center justify-center">
                  <Icons.ArrowRight />
                </div>
              </button>
            </div>
          </div>
        </div>
      </PageMaxWidth>
    </div>
  );
};
