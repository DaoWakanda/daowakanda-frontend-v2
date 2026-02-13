'use client';
import { PageMaxWidth } from '@/components/page-max-width';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { springTransition, viewportOnce } from '../motion';

interface BlogArrayProp {
  date: string;
  title: string;
  description: string;
  author: {
    name: string;
    role: string;
  };
  href?: string;
  imageUrl?: string;
}

const BlogArray: BlogArrayProp[] = [
  {
    date: 'July 9, 2024',
    title: 'Daowakanda: Pioneering Community Engagement and Participation on the Algorand Blockchain',
    description:
      'In the evolving landscape of Web3, the community has often been overlooked in favor of the tools(technology)...',
    author: {
      name: 'Daowakanda',
      role: '',
    },
    href: 'https://medium.com/@daowakanda/daowakanda-pioneering-community-engagement-and-participation-on-the-algorand-blockchain-782012f1cbbb',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:600/format:webp/1*csPxHRPuE02PS5gSI3voOA.jpeg'
  },
  {
    date: 'July 9, 2024',
    title: 'Introducing the DaoWakanda Testnet: Claim Your Free NFT and Engage in Governance',
    description:
      'As we prepare for the launch of our Mainnet, DaoWakanda is excited to announce the integration of a faucet page for our community. This page allows you to claim a Testnet NFT',
    author: {
      name: 'Daowakanda',
      role: '',
    },
    href: 'https://medium.com/@daowakanda/daowakanda-pioneering-community-engagement-and-participation-on-the-algorand-blockchain-782012f1cbbb',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:640/format:webp/1*uemT0pyyLufAMzMbucOcPA.png'
  },
];
export const Blog = () => {
  const titleVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: springTransition,
    },
  };
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.08 },
    },
  };
  const stepCardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: springTransition,
    },
  };

  return (
    <motion.div
      className="bg-[#fafafa] py-[120px]  w-full "
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={containerVariants}
    >
      <PageMaxWidth>
        <div>
          <motion.div className="flex flex-col gap-3 font-degularDisplay" variants={titleVariants}>
            <h1 className="text-3xl md:text-[50px] font-medium text-[#231E15] leading-[100%]">
              Daowakanda Blog
            </h1>
            <p className="text-sm md:text-[20px]">
              Stay up to date with Dawoakada news and media coverage
            </p>
          </motion.div>
          <div className=" w-full overflow-hidden flex flex-col md:flex-row gap-5 mt-8">
            {BlogArray.map((data, i) => (
              <motion.a
                key={i}
                className="w-full md:w-[567px]  group bg-white rounded-[8px] p-5"
                variants={stepCardVariants}
                href={data.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative overflow-hidden rounded-[4px] h-[163px]">
                  <img
                    src={
                      data.imageUrl ||
                      'https://res.cloudinary.com/dk5mfu099/image/upload/v1770641670/1a1ab82a8e610c512d2a83099bbc75df6fa02865_dlc0iu.png'
                    }
                    alt="blog-images"
                    className="object-cover w-full h-full group-hover:scale-110 transition duration-500 ease-in-out"
                    width={480}
                    height={150}
                  />
                </div>
                <div className="flex flex-col gap-3 py-5 font-degularDisplay">
                  <h3 className="font-semibold text-sm">{data.date}</h3>
                  <h2 className="font-semibold text-[28px] leading-[100%] line-clamp-2">{data.title}</h2>
                  <p className="font-medium text-[16px] md:text-[18px] leading-[100%] line-clamp-3">
                    {data.description}
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <img
                      src="	https://miro.medium.com/v2/da:true/resize:fill:32:32/0*xTjTU3R4PT1Jrvrl"
                      alt="author-image"
                      width={38}
                      height={38}
                      className="object-cover rounded-full shadow w-[38px] h-[38px]"
                    />
                    <p>
                      {data.author.name}
                      <span className="text-[17.45px] leading-[100%]">{data.author.role}</span>
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </PageMaxWidth>
    </motion.div>
  );
};
