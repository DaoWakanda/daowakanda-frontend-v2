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
}

const BlogArray: BlogArrayProp[] = [
  {
    date: 'June 10, 2025',
    title: 'Navigating the Future of NFTs: Trends to Watch',
    description:
      'Explore the evolving landscape of NFTs and how they are reshaping digital ownership and creativity.',
    author: {
      name: 'Linda Chen',
      role: 'Digital Asset Analyst',
    },
  },
  {
    date: 'July 20, 2025',
    title: 'Decentralized Finance: The Next Big Leap',
    description:
      'Join industry leaders as they discuss the potential of DeFi in transforming traditional finance systems.',
    author: {
      name: 'Mark Spencer',
      role: 'Co-Founder of DeFi Innovations',
    },
  },
  {
    date: 'August 8, 2025',
    title: 'The Metaverse: Challenges Ahead',
    description:
      'Uncover the implications of the metaverse and how it might shape new economic models & interactions.',
    author: {
      name: 'Sarah Lee',
      role: 'Metaverse Strategist',
    },
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
              Daowakanda Blogs
            </h1>
            <p className="text-sm md:text-[20px]">
              Stay up to date with Pandascrow company news and media coverage
            </p>
          </motion.div>
          <div className=" w-full overflow-hidden flex flex-col md:flex-row gap-5 mt-8">
            {BlogArray.map((data, i) => (
              <motion.div
                key={i}
                className="w-full md:w-[567px]  group bg-white rounded-[8px] p-5"
                variants={stepCardVariants}
              >
                <div className="relative overflow-hidden rounded-[4px] h-[163px]">
                  <Image
                    src={
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
                  <h2 className="font-semibold text-[28px] leading-[100%] ">{data.title}</h2>
                  <p className="font-medium text-[16px] md:text-[18px] leading-[100%] ">
                    {data.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <Image
                      src="https://res.cloudinary.com/dk5mfu099/image/upload/v1770641667/5d3def7ca464ae5365be191398199d7010963edb_zeguzf.jpg"
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
              </motion.div>
            ))}
          </div>
        </div>
      </PageMaxWidth>
    </motion.div>
  );
};
