'use client';

import { PageMaxWidth } from '@/components/page-max-width';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { Icons } from './icons';
import { springTransition } from '../motion';
import Link from 'next/link';

const fadeUpSpring = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springTransition,
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

export const HeroSection = () => {
  return (
    <motion.div
      className={classNames(
        'flex flex-col min-h-svh bg-[#FAFAFA] justify-end relative',
        'pb-8 pt-16 lg:pb-[75px] lg:pt-[125px]',
      )}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <Icons.HeroSectionBlur className="absolute top-0 left-0" />
      <Icons.HeroSectionBlur2 className="absolute top-0 left-0" />
      <PageMaxWidth>
        <motion.div
          className="flex flex-col gap-10 items-center lg:gap-[184px]"
          variants={staggerContainer}
        >
          <div className="flex flex-col gap-6 text-center w-full max-w-[683px] mx-auto lg:gap-10">
            <motion.div className="flex flex-col gap-2" variants={fadeUpSpring}>
              <h2
                className={classNames(
                  'text-[#00484F] font-bold font-degular',
                  'text-[28px] leading-[1.2] lg:text-[48px]',
                )}
              >
                Building, Governing, and Scaling Web3 Projects That Actually Ship
              </h2>
              <p
                className={classNames(
                  'text-[#8E8E93] font-[350] font-avenirLtsd',
                  'text-[16px] leading-[24px] lg:text-[20px] lg:leading-[28px]',
                )}
              >
                Daowakanda is a DAO studio focused on execution not speculation. We support serious
                builders with governance, structure, capital alignment, and long-term scale.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col gap-3 justify-center px-4 sm:flex-row sm:gap-5 sm:px-9"
              variants={fadeUpSpring}
            >
              <Link
                href="https://t.me/daowakanda"
                target="_blank"
                rel="noopener noreferrer"
                className={classNames(
                  'bg-[#FCD701] text-black font-semibold font-degular rounded-[1000px] relative hover:bg-[#FCD701]/80',
                  'h-[52px] lg:flex-1 text-[14px] sm:h-[60px] lg:text-[16px] flex items-center justify-center',
                )}
              >
                <span>Join the Community</span>
                <div
                  className={classNames(
                    'absolute right-[5px] top-[5px] rounded-full bg-black flex items-center justify-center',
                    'w-[42px] h-[42px] lg:w-[50px] lg:h-[50px]',
                  )}
                >
                  <Icons.ArrowLine />
                </div>
              </Link>
              <button
                className={classNames(
                  'border border-[#2F3640] text-[#2F3640] font-semibold font-degular rounded-[1000px] lg:flex-1 transition-all duration-300 hover:bg-[#2F3640] hover:text-white relative',
                  'h-[52px] text-[14px] sm:h-[60px] lg:text-[16px]',
                )}
              >
                <span>Apply as a Founder</span>
              </button>
            </motion.div>
          </div>

          <motion.div
            className="flex flex-col w-full border border-[#8E8E93] lg:flex-row"
            variants={fadeUpSpring}
          >
            <div className="flex py-5 px-4 flex-1 border-b border-[#8E8E93] lg:border-b-0 lg:border-r lg:py-[30px] lg:px-5">
              <p
                className={classNames(
                  'text-[#8E8E93] font-[350] font-avenirLtsd text-center lg:text-left',
                  'text-[16px] leading-[24px] lg:text-[20px] lg:leading-[28px]',
                )}
              >
                Trusted by forward-thinking <br className="hidden lg:block" /> community members and
                founders
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:flex-nowrap lg:justify-start">
              <div className="flex flex-col flex-1 min-w-[100px] items-center border-r border-[#8E8E93] p-4 lg:min-w-[220px] lg:items-start lg:border-b-0 lg:p-5">
                <h4
                  className={classNames(
                    'text-black font-semibold text-[28px] font-degular lg:text-[36px]',
                  )}
                >
                  23
                </h4>
                <p className="font-degular text-base text-[#8E8E93] lg:text-xl">Founders</p>
              </div>
              <div className="flex flex-col flex-1 min-w-[100px] items-center border-r border-[#8E8E93] p-4 lg:min-w-0 lg:items-start lg:border-b-0 lg:p-5">
                <h4
                  className={classNames(
                    'text-black font-semibold text-[28px] font-degular lg:text-[36px]',
                  )}
                >
                  300+
                </h4>
                <p className="font-degular text-base text-[#8E8E93] lg:text-xl">
                  Community Members
                </p>
              </div>
              <div className="flex flex-col flex-1 min-w-[100px] items-center p-4 lg:min-w-0 lg:items-start lg:p-5">
                <h4
                  className={classNames(
                    'text-black font-semibold text-[28px] font-degular lg:text-[36px]',
                  )}
                >
                  23
                </h4>
                <p className="font-degular text-base text-[#8E8E93] lg:text-xl">
                  Approved Proposals
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </PageMaxWidth>
    </motion.div>
  );
};
