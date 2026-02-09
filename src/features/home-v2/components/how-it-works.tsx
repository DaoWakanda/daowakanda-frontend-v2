import { PageMaxWidth } from '@/components/page-max-width';
import classNames from 'classnames';

export const HowItWorks = () => {
  return (
    <div className="bg-[#fafafa] flex flex-col pt-12 gap-10 lg:pt-[96px] lg:gap-20">
      <PageMaxWidth>
        <div className="flex flex-col items-center text-center">
          <h4
            className={classNames(
              'text-black font-semibold font-degularDisplay text-[14px] lg:text-[18px]',
            )}
          >
            The Daowakanda Flow
          </h4>
          <div className="flex flex-col items-center gap-2 lg:gap-3">
            <h1
              className={classNames(
                'text-[#231E15] font-medium font-degularDisplay text-[32px] lg:text-[50px]',
              )}
            >
              How It Works
            </h1>
            <h4
              className={classNames(
                'text-[#231E15] font-[400] font-degularDisplay text-[16px] lg:text-[20px]',
              )}
            >
              How Projects Move Through Daowakanda
            </h4>
          </div>
        </div>
      </PageMaxWidth>
      <div className="flex flex-col lg:flex-row">
        {howItWorks.map((item) => (
          <HowItWorksItem key={item.index} {...item} />
        ))}
      </div>
    </div>
  );
};

interface HowItWorksItemProps {
  index: number;
  title: string;
  description: string;
  image: React.ReactNode;
  textColor: string;
  bgColor: string;
}

const HowItWorksItem = ({
  index,
  title,
  description,
  image,
  textColor,
  bgColor,
}: HowItWorksItemProps) => {
  return (
    <div
      className={classNames(
        'flex flex-col flex-1 min-h-[320px] px-5 pt-6 lg:min-h-[495px] lg:px-[50px] lg:pt-[50px]',
      )}
      style={{ backgroundColor: bgColor }}
    >
      <p
        className={classNames(
          'text-black font-[400] font-degularDisplay text-right mb-2 text-[14px] lg:mb-3 lg:text-[16px]',
        )}
      >
        Step {index}
      </p>

      <div className="flex flex-col gap-1">
        <h4
          className={classNames(
            'text-black font-semibold font-degularDisplay text-[22px] lg:text-[28px]',
          )}
          style={{ color: textColor }}
        >
          {title}
        </h4>
        <p
          className={classNames(
            'text-black font-[400] font-degularDisplay text-[15px] lg:text-[18px]',
          )}
        >
          {description}
        </p>
      </div>

      <div className="flex flex-col flex-1 items-center justify-end relative min-h-[180px] lg:h-[299px]">
        {image}
      </div>
    </div>
  );
};

const howItWorks: HowItWorksItemProps[] = [
  {
    index: 1,
    title: 'Discover',
    description:
      'Ideas, teams, and proposals are validated openly by the community and DAO stewards.',
    image: (
      <img
        src={
          'https://res.cloudinary.com/dlinprg6k/image/upload/v1770557498/daowakanda/black_magnifying_glass_for_searching_lnpadk.png'
        }
        alt="Discover"
        className="w-full max-w-[180px] h-auto object-contain lg:max-w-[238px] lg:w-[238px] lg:h-[238px]"
      />
    ),
    textColor: '#E48500',
    bgColor: '#FFF2E0',
  },
  {
    index: 2,
    title: 'Build',
    description:
      'Selected projects receive structured support, contributors, and weekly accountability.',
    image: (
      <img
        src="https://res.cloudinary.com/dlinprg6k/image/upload/v1770557682/daowakanda/coding_sign_dwohkl.png"
        className="w-full max-w-[200px] h-auto mb-4 object-contain lg:max-w-none lg:w-[324px] lg:h-[180px] lg:mb-[21px]"
      />
    ),
    textColor: '#00474D',
    bgColor: '#ADEED9',
  },
  {
    index: 3,
    title: 'Support',
    description: 'Governance, reviews, and execution tracking ensure momentum doesn’t stall.',
    image: (
      <img
        src="https://res.cloudinary.com/dlinprg6k/image/upload/v1770557760/daowakanda/colorful_puzzle_pieces_with_user_icons_team_collaboration_and_connection_fjhpfh.png"
        className="w-full max-w-[180px] h-auto mb-1 object-contain lg:max-w-none lg:w-[250px] lg:h-[250px] lg:mb-[5px]"
      />
    ),
    textColor: '#AB007C',
    bgColor: '#FFEDFA',
  },
  {
    index: 4,
    title: 'Scale',
    description:
      'High-performing projects graduate, attract partnerships, and expand beyond the DAO.',
    image: (
      <img
        src="https://res.cloudinary.com/dlinprg6k/image/upload/v1770557709/daowakanda/Profit_growth_with_upward_arrow_chnb1q.png"
        className="w-full max-w-[180px] h-auto mb-4 object-contain lg:max-w-none lg:w-[262px] lg:h-[250px] lg:mb-[18px]"
      />
    ),
    textColor: '#004376',
    bgColor: '#B7E0FF',
  },
];
