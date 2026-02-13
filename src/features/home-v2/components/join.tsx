'use client';

import { PageMaxWidth } from '@/components/page-max-width';
import { motion } from 'framer-motion';
import { Icons } from './icons';
import { springTransition, viewportOnce } from '../motion';
import Link from 'next/link';

const blockVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springTransition,
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ...springTransition, delay: 0.06 },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.05 },
  },
};

export const Join = () => {
  return (
    <motion.div
      className="flex flex-col bg-[#1F1F1F] py-12 lg:py-[200px]"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={containerVariants}
    >
      <PageMaxWidth>
        <div className="flex flex-col gap-16 lg:gap-[100px]">
          <motion.div
            className="flex flex-col gap-8 items-center lg:flex-row lg:gap-[64px]"
            variants={containerVariants}
          >
            <motion.div
              className="flex flex-col gap-4 w-full lg:max-w-[470px] lg:flex-1 lg:gap-6"
              variants={blockVariants}
            >
              <div className="flex flex-col gap-4 lg:gap-5">
                <h2 className="text-white font-medium font-degularDisplay text-[28px] leading-tight lg:text-[46px]">
                  Join as a Community Member
                </h2>

                <div className="flex flex-col gap-1">
                  <h4 className="text-white font-semibold font-degularDisplay text-[18px] lg:text-[24px]">
                    Who is this for?
                  </h4>
                  <p className="text-white font-[400] font-degularDisplay text-[16px] lg:text-[24px]">
                    Builders, researchers, contributors, and validators.
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <h4 className="text-white font-semibold font-degularDisplay text-[18px] lg:text-[24px]">
                    What You Can Do:
                  </h4>

                  <div className="flex flex-col gap-2 items-start lg:gap-3">
                    {[
                      'Participate in governance',
                      'Validate projects',
                      'Contribute skills',
                      'Earn recognition',
                    ].map((item) => (
                      <div className="px-4 py-[6px] rounded-[100px] bg-[#13C264] lg:px-5">
                        <span className="text-[#FAF1E6] font-medium font-degularDisplay text-[16px] lg:text-[22px]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="https://t.me/daowakanda" target="_blank" rel="noopener noreferrer" className="flex items-center gap-[10px]">
                <span className="text-white font-medium font-degularDisplay text-[16px] lg:text-[18px]">
                  Join the Community
                </span>
                <div className="w-[36px] h-[36px] rounded-full bg-[#182CD1] flex items-center justify-center shrink-0 lg:w-[39px] lg:h-[39px]">
                  <Icons.ArrowRight />
                </div>
              </Link>
            </motion.div>

            <motion.div
              className="flex w-full lg:flex-1 rounded-xl overflow-hidden lg:rounded-[20px] order-first lg:order-none"
              variants={imageVariants}
            >
              <img
                src="https://res.cloudinary.com/dlinprg6k/image/upload/v1770559178/daowakanda/7249c972edee0bce1e35066fc2a472527e850194_f0in3c.jpg"
                className="w-full h-[auto] object-cover rounded-xl lg:rounded-[20px]"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-8 items-center lg:flex-row lg:gap-[64px]"
            variants={containerVariants}
          >
            <motion.div
              className="flex w-full lg:flex-1 rounded-xl overflow-hidden lg:rounded-[20px] order-first lg:order-none"
              variants={imageVariants}
            >
              <img
                src="https://res.cloudinary.com/dlinprg6k/image/upload/v1770559180/daowakanda/088e5f7cacd960fbb726ad765983516b9b8df349_kplpu9.jpg"
                className="w-full h-[auto] object-contain rounded-xl lg:rounded-[20px]"
              />
            </motion.div>
            <motion.div
              className="flex flex-col gap-4 w-full lg:max-w-[470px] lg:flex-1 lg:gap-6"
              variants={blockVariants}
            >
              <div className="flex flex-col gap-4 lg:gap-5">
                <h2 className="text-white font-medium font-degularDisplay text-[28px] leading-tight lg:text-[46px]">
                  Apply as a Founder
                </h2>

                <div className="flex flex-col gap-1">
                  <h4 className="text-white font-semibold font-degularDisplay text-[18px] lg:text-[24px]">
                    Who should apply?
                  </h4>
                  <p className="text-white font-[400] font-degularDisplay text-[16px] lg:text-[24px]">
                    Builders, active teams and projects ready for accountability
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <h4 className="text-white font-semibold font-degularDisplay text-[18px] lg:text-[24px]">
                    What We Provide:
                  </h4>

                  <div className="flex flex-col gap-2 items-start lg:gap-3">
                    {[
                      'Governance structure',
                      'Execution support',
                      'Community & Contributors',
                      'Visibility & Partnerships',
                    ].map((item) => (
                      <div className="px-4 py-[6px] rounded-[100px] bg-white lg:px-5">
                        <span className="text-black font-medium font-degularDisplay text-[16px] lg:text-[22px]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button className="flex items-center gap-[10px]">
                <span className="text-white font-medium font-degularDisplay text-[16px] lg:text-[18px]">
                  Apply as a founder
                </span>
                <div className="w-[36px] h-[36px] rounded-full bg-[#182CD1] flex items-center justify-center shrink-0 lg:w-[39px] lg:h-[39px]">
                  <Icons.ArrowRight />
                </div>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </PageMaxWidth>
    </motion.div>
  );
};
