import { PageMaxWidth } from '@/components/page-max-width';
import classNames from 'classnames';
import { Icons } from './icons';

export const HeroSection = () => {
  return (
    <div
      className={classNames(
        'flex flex-col min-h-svh bg-[#FAFAFA] pb-[75px] pt-[125px] justify-end',
        'relative',
      )}
    >
      <Icons.HeroSectionBlur className="absolute top-0 left-0" />
      <Icons.HeroSectionBlur2 className="absolute top-0 left-0" />
      <PageMaxWidth>
        <div className="flex flex-col gap-[184px] items-center">
          <div className="flex flex-col gap-10 text-center w-full max-w-[683px] mx-auto">
            <div className="flex flex-col gap-2">
              <h2 className={classNames('text-[#00484F] font-bold text-[48px] font-degular')}>
                Building, Governing, and Scaling Web3 Projects That Actually Ship
              </h2>
              <p
                className={classNames(
                  'text-[#8E8E93] font-[350] text-[20px] leading-[28px] font-avenirLtsd',
                )}
              >
                Daowakanda is a DAO studio focused on execution not speculation. We support serious
                builders with governance, structure, capital alignment, and long-term scale.
              </p>
            </div>

            <div className="flex gap-5 justify-center px-9">
              <button
                className={classNames(
                  'bg-[#FCD701] text-black font-semibold text-[16px] font-degular rounded-[1000px] h-[60px] flex-1',
                  'relative hover:bg-[#FCD701]/80',
                )}
              >
                <span>Join the Community</span>

                <div
                  className={classNames(
                    'absolute right-[5px] top-[5px] w-[50px] h-[50px] rounded-full bg-black flex items-center justify-center',
                  )}
                >
                  <Icons.ArrowLine />
                </div>
              </button>
              <button
                className={classNames(
                  'border border-[#2F3640] text-[#2F3640] font-semibold text-[16px] font-degular rounded-[1000px] h-[60px] flex-1',
                  'transition-all duration-300 hover:bg-[#2F3640] hover:text-white',
                  'relative',
                )}
              >
                <span>Apply as a Founder</span>
              </button>
            </div>
          </div>

          <div className="flex w-full border-[#8E8E93] border-b border-l border-r">
            <div className="flex py-[30px] px-5 flex-1 border-r border-[#8E8E93]">
              <p
                className={classNames(
                  'text-[#8E8E93] font-[350] text-[20px] leading-[28px] font-avenirLtsd',
                )}
              >
                Trusted by forward-thinking <br /> community members and founders
              </p>
            </div>

            <div className="flex">
              <div className="flex flex-col border-r border-[#8E8E93] p-5 min-w-[220px]">
                <h4 className={classNames('text-black font-semibold text-[36px] font-degular')}>
                  23
                </h4>
                <p className="font-degular text-xl text-[#8E8E93]">Founders</p>
              </div>
              <div className="flex flex-col border-r border-[#8E8E93] p-5">
                <h4 className={classNames('text-black font-semibold text-[36px] font-degular')}>
                  300+
                </h4>
                <p className="font-degular text-xl text-[#8E8E93]">Community Members</p>
              </div>
              <div className="flex flex-col p-5">
                <h4 className={classNames('text-black font-semibold text-[36px] font-degular')}>
                  23
                </h4>
                <p className="font-degular text-xl text-[#8E8E93]">Approved Proposals</p>
              </div>
            </div>
          </div>
        </div>
      </PageMaxWidth>
    </div>
  );
};
