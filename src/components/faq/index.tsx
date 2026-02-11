"use client"
import { useState } from 'react';
import { PageMaxWidth } from '../page-max-width';
import { Minus, Plus } from 'lucide-react';

interface FAQProps {
  question: string;
  answer: string;
}

const FaqData: FAQProps[] = [
  {
    question: 'What is Daowakanda?',
    answer:
      "Daowakanda is a DAO studio that helps Web3 projects move from idea to execution and scale. We don't just fund or launch projects. We govern, support, and host teams accountable while they build.",
  },
  {
    question: 'How is Daowakanda different from a traditional DAO or launchpad?',
    answer:
      "Unlike traditional DAOs that only provide funding or launchpads that simply list projects, Daowakanda offers end-to-end support. We combine governance, mentorship, technical resources, and community building to ensure project success. Our studio model means we're actively involved in helping teams execute their vision, not just voting on proposals.",
  },
  {
    question: 'Is Daowakanda only for Algorand projects?',
    answer:
      'While we have strong roots in the Algorand ecosystem, Daowakanda supports Web3 projects across multiple blockchains. We believe in blockchain agnostic innovation and welcome projects building on any major blockchain platform that aligns with our values of sustainability, scalability, and decentralization.',
  },
  {
    question: 'How does governance work on Daowakanda?',
    answer:
      "Daowakanda operates on a token-based governance model where token holders can propose, discuss, and vote on key decisions. This includes project funding, resource allocation, strategic partnerships, and platform improvements. Every token holder has a voice proportional to their stake, ensuring democratic decision-making while maintaining alignment with the community's best interests.",
  },
  {
    question: 'Who can submit proposals?',
    answer:
      'Any token holder can submit proposals to the DAO. We encourage both internal team members and external community members to bring forward ideas. Proposals must meet certain minimum requirements including a clear description, budget breakdown, timeline, and success metrics. Our governance forum provides templates and guidelines to help proposers create comprehensive submissions.',
  },
  {
    question: 'What do DAO votes actually affect?',
    answer:
      'DAO votes determine critical aspects of the ecosystem including which projects receive funding, how treasury funds are allocated, partnerships and collaborations, platform feature development, governance parameter changes, and community initiatives. Major decisions require a quorum and super-majority, while routine decisions use simple majority voting.',
  },
  {
    question: 'Are there rewards for participating in governance?',
    answer:
      "Yes! Active governance participants earn rewards through multiple mechanisms: voting rewards for consistent participation, proposal bonuses for successful proposals that benefit the ecosystem, early access to projects launched through Daowakanda, and reputation-based benefits that unlock additional platform features. We believe in rewarding those who actively contribute to the DAO's success.",
  },
  {
    question: 'What types of projects does Daowakanda support?',
    answer:
      'We support a diverse range of Web3 projects including DeFi protocols, NFT platforms and marketplaces, gaming and metaverse applications, infrastructure and developer tools, social and community platforms, and sustainability-focused blockchain solutions. We prioritize projects with strong teams, clear value propositions, and alignment with our mission of advancing Web3 adoption.',
  },
  {
    question: 'What stages of projects are accepted?',
    answer:
      'Daowakanda supports projects at various stages from early-stage concepts with strong founding teams and validated ideas, to MVPs and prototypes ready for market testing, to growth-stage projects looking to scale. Each stage receives tailored support whether you need initial funding and technical guidance or growth capital and partnership connections.',
  },
  {
    question: 'What does Daowakanda provide to founders?',
    answer:
      "Founders receive comprehensive support including direct funding from the DAO treasury, technical resources and development support, strategic guidance and mentorship from experienced Web3 builders, access to our network of partners and investors, marketing and community building assistance, legal and compliance guidance, and ongoing governance support. We're committed to your long-term success, not just a quick launch.",
  },
];
export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="bg-[#fafafa] py-[120px] ">
      <PageMaxWidth>
        <div className="mx-auto max-w-4xl font-plusJarkata">
          {' '}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 md:mb-16 leading-[56px] tracking-[-1%] ">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FaqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-[#F6F8FA] overflow-hidden transition duration-500 ease-in-out "
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-start justify-between text-left gap-4 transition-colors "
                >
                  <span className="flex-1 text-base  font-medium text-gray-900 leading-relaxed">
                    <span className="text-gray-500 mr-2">{index + 1}.</span>
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 mt-1">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-[#0A0D14]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#868C98]" />
                    )}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-2 ">
                    <p className="text-[#475467] leading-[160%] tracking-[-0.6%] text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageMaxWidth>
    </div>
  );
};
