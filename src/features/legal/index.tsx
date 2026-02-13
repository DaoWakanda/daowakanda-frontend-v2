'use client';

import { PageMaxWidth } from '@/components/page-max-width';
import classNames from 'classnames';

export const TermsAndPrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] py-8 lg:py-16 lg:pt-[124px]">
      <PageMaxWidth>
        <div className="flex flex-col gap-8 lg:gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4 text-center lg:gap-6">
            <h1
              className={classNames(
                'text-[#00484F] font-bold font-degular',
                'text-[28px] leading-[1.2] lg:text-[48px]',
              )}
            >
              Terms and Privacy Policy
            </h1>
            <p
              className={classNames(
                'text-[#8E8E93] font-[350] font-avenirLtsd',
                'text-[16px] leading-[24px] lg:text-[20px] lg:leading-[28px]',
              )}
            >
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content Sections */}
          <div className="flex flex-col gap-12 lg:gap-16">
            {/* Terms of Service */}
            <section className="flex flex-col gap-6">
              <h2
                className={classNames(
                  'text-[#00484F] font-semibold font-degular',
                  'text-[24px] leading-tight lg:text-[36px]',
                )}
              >
                Terms of Service
              </h2>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3
                    className={classNames(
                      'text-black font-semibold font-degular',
                      'text-[20px] lg:text-[28px]',
                    )}
                  >
                    1. Acceptance of Terms
                  </h3>
                  <p
                    className={classNames(
                      'text-[#8E8E93] font-[350] font-avenirLtsd',
                      'text-[14px] leading-[22px] lg:text-[16px] lg:leading-[28px]',
                    )}
                  >
                    By accessing and using DaoWakanda, you accept and agree to be bound by the terms
                    and provision of this agreement. If you do not agree to abide by the above,
                    please do not use this service.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3
                    className={classNames(
                      'text-black font-semibold font-degular',
                      'text-[20px] lg:text-[28px]',
                    )}
                  >
                    2. Use License
                  </h3>
                  <p
                    className={classNames(
                      'text-[#8E8E93] font-[350] font-avenirLtsd',
                      'text-[14px] leading-[22px] lg:text-[16px] lg:leading-[28px]',
                    )}
                  >
                    Permission is granted to temporarily access the materials on DaoWakanda's website
                    for personal, non-commercial transitory viewing only. This is the grant of a
                    license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul
                    className={classNames(
                      'list-disc list-inside text-[#8E8E93] font-[350] font-avenirLtsd',
                      'text-[14px] leading-[22px] lg:text-[16px] lg:leading-[28px]',
                      'ml-4 space-y-2',
                    )}
                  >
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-2">
                  <h3
                    className={classNames(
                      'text-black font-semibold font-degular',
                      'text-[20px] lg:text-[28px]',
                    )}
                  >
                    3. Governance and Voting
                  </h3>
                  <p
                    className={classNames(
                      'text-[#8E8E93] font-[350] font-avenirLtsd',
                      'text-[14px] leading-[22px] lg:text-[16px] lg:leading-[28px]',
                    )}
                  >
                    DaoWakanda operates as a decentralized autonomous organization (DAO). By
                    participating in governance and voting, you acknowledge that:
                  </p>
                  <ul
                    className={classNames(
                      'list-disc list-inside text-[#8E8E93] font-[350] font-avenirLtsd',
                      'text-[14px] leading-[22px] lg:text-[16px] lg:leading-[28px]',
                      'ml-4 space-y-2',
                    )}
                  >
                    <li>All votes are final and cannot be reversed</li>
                    <li>You are responsible for understanding proposals before voting</li>
                    <li>Voting power is determined by your stake in the DAO</li>
                    <li>Proposals are executed automatically based on voting outcomes</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-2">
                  <h3
                    className={classNames(
                      'text-black font-semibold font-degular',
                      'text-[20px] lg:text-[28px]',
                    )}
                  >
                    4. Disclaimer
                  </h3>
                  <p
                    className={classNames(
                      'text-[#8E8E93] font-[350] font-avenirLtsd',
                      'text-[14px] leading-[22px] lg:text-[16px] lg:leading-[28px]',
                    )}
                  >
                    The materials on DaoWakanda's website are provided on an 'as is' basis.
                    DaoWakanda makes no warranties, expressed or implied, and hereby disclaims and
                    negates all other warranties including, without limitation, implied warranties
                    or conditions of merchantability, fitness for a particular purpose, or
                    non-infringement of intellectual property or other violation of rights.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3
                    className={classNames(
                      'text-black font-semibold font-degular',
                      'text-[20px] lg:text-[28px]',
                    )}
                  >
                    5. Limitations
                  </h3>
                  <p
                    className={classNames(
                      'text-[#8E8E93] font-[350] font-avenirLtsd',
                      'text-[14px] leading-[22px] lg:text-[16px] lg:leading-[28px]',
                    )}
                  >
                    In no event shall DaoWakanda or its suppliers be liable for any damages
                    (including, without limitation, damages for loss of data or profit, or due to
                    business interruption) arising out of the use or inability to use the materials
                    on DaoWakanda's website, even if DaoWakanda or a DaoWakanda authorized
                    representative has been notified orally or in writing of the possibility of such
                    damage.
                  </p>
                </div>
              </div>
            </section>

            {/* Privacy Policy */}
            <section className="flex flex-col gap-6">
              <h2
                className={classNames(
                  'text-[#00484F] font-semibold font-degular',
                  'text-[24px] leading-tight lg:text-[36px]',
                )}
              >
                Privacy Policy
              </h2>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3
                    className={classNames(
                      'text-black font-semibold font-degular',
                      'text-[20px] lg:text-[28px]',
                    )}
                  >
                    1. Information We Collect
                  </h3>
                  <p
                    className={classNames(
                      'text-[#8E8E93] font-[350] font-avenirLtsd',
                      'text-[14px] leading-[22px] lg:text-[16px] lg:leading-[28px]',
                    )}
                  >
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul
                    className={classNames(
                      'list-disc list-inside text-[#8E8E93] font-[350] font-avenirLtsd',
                      'text-[14px] leading-[22px] lg:text-[16px] lg:leading-[28px]',
                      'ml-4 space-y-2',
                    )}
                  >
                    <li>Wallet addresses and blockchain transaction data</li>
                    <li>Profile information (name, email, country, state)</li>
                    <li>GitHub profile links</li>
                    <li>Voting history and governance participation</li>
                    <li>Proposal submissions and contributions</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-2">
                  <h3
                    className={classNames(
                      'text-black font-semibold font-degular',
                      'text-[20px] lg:text-[28px]',
                    )}
                  >
                    2. How We Use Your Information
                  </h3>
                  <p
                    className={classNames(
                      'text-[#8E8E93] font-[350] font-avenirLtsd',
                      'text-[14px] leading-[22px] lg:text-[16px] lg:leading-[28px]',
                    )}
                  >
                    We use the information we collect to:
                  </p>
                  <ul
                    className={classNames(
                      'list-disc list-inside text-[#8E8E93] font-[350] font-avenirLtsd',
                      'text-[14px] leading-[22px] lg:text-[16px] lg:leading-[28px]',
                      'ml-4 space-y-2',
                    )}
                  >
                    <li>Facilitate governance and voting processes</li>
                    <li>Verify eligibility for proposals and challenges</li>
                    <li>Display leaderboards and community achievements</li>
                    <li>Send important updates about the DAO</li>
                    <li>Improve our services and user experience</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-2">
                  <h3
                    className={classNames(
                      'text-black font-semibold font-degular',
                      'text-[20px] lg:text-[28px]',
                    )}
                  >
                    3. Blockchain Transparency
                  </h3>
                  <p
                    className={classNames(
                      'text-[#8E8E93] font-[350] font-avenirLtsd',
                      'text-[14px] leading-[22px] lg:text-[16px] lg:leading-[28px]',
                    )}
                  >
                    As a decentralized organization, certain information is stored on public
                    blockchains. This includes:
                  </p>
                  <ul
                    className={classNames(
                      'list-disc list-inside text-[#8E8E93] font-[350] font-avenirLtsd',
                      'text-[14px] leading-[22px] lg:text-[16px] lg:leading-[28px]',
                      'ml-4 space-y-2',
                    )}
                  >
                    <li>Voting records and proposal outcomes</li>
                    <li>Transaction history and asset transfers</li>
                    <li>Smart contract interactions</li>
                  </ul>
                  <p
                    className={classNames(
                      'text-[#8E8E93] font-[350] font-avenirLtsd',
                      'text-[14px] leading-[22px] lg:text-[16px] lg:leading-[28px]',
                      'mt-2',
                    )}
                  >
                    This information is publicly accessible and cannot be deleted or modified once
                    recorded on the blockchain.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3
                    className={classNames(
                      'text-black font-semibold font-degular',
                      'text-[20px] lg:text-[28px]',
                    )}
                  >
                    4. Data Security
                  </h3>
                  <p
                    className={classNames(
                      'text-[#8E8E93] font-[350] font-avenirLtsd',
                      'text-[14px] leading-[22px] lg:text-[16px] lg:leading-[28px]',
                    )}
                  >
                    We implement appropriate technical and organizational measures to protect your
                    personal information. However, no method of transmission over the Internet or
                    electronic storage is 100% secure. While we strive to use commercially
                    acceptable means to protect your information, we cannot guarantee absolute
                    security.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3
                    className={classNames(
                      'text-black font-semibold font-degular',
                      'text-[20px] lg:text-[28px]',
                    )}
                  >
                    5. Your Rights
                  </h3>
                  <p
                    className={classNames(
                      'text-[#8E8E93] font-[350] font-avenirLtsd',
                      'text-[14px] leading-[22px] lg:text-[16px] lg:leading-[28px]',
                    )}
                  >
                    You have the right to:
                  </p>
                  <ul
                    className={classNames(
                      'list-disc list-inside text-[#8E8E93] font-[350] font-avenirLtsd',
                      'text-[14px] leading-[22px] lg:text-[16px] lg:leading-[28px]',
                      'ml-4 space-y-2',
                    )}
                  >
                    <li>Access your personal information</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your account and associated data</li>
                    <li>Opt-out of non-essential communications</li>
                  </ul>
                  <p
                    className={classNames(
                      'text-[#8E8E93] font-[350] font-avenirLtsd',
                      'text-[14px] leading-[22px] lg:text-[16px] lg:leading-[28px]',
                      'mt-2',
                    )}
                  >
                    Note: Blockchain data cannot be deleted as it is immutable.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3
                    className={classNames(
                      'text-black font-semibold font-degular',
                      'text-[20px] lg:text-[28px]',
                    )}
                  >
                    6. Cookies and Tracking
                  </h3>
                  <p
                    className={classNames(
                      'text-[#8E8E93] font-[350] font-avenirLtsd',
                      'text-[14px] leading-[22px] lg:text-[16px] lg:leading-[28px]',
                    )}
                  >
                    We use cookies and similar tracking technologies to track activity on our
                    website and hold certain information. You can instruct your browser to refuse
                    all cookies or to indicate when a cookie is being sent.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3
                    className={classNames(
                      'text-black font-semibold font-degular',
                      'text-[20px] lg:text-[28px]',
                    )}
                  >
                    7. Changes to This Policy
                  </h3>
                  <p
                    className={classNames(
                      'text-[#8E8E93] font-[350] font-avenirLtsd',
                      'text-[14px] leading-[22px] lg:text-[16px] lg:leading-[28px]',
                    )}
                  >
                    We may update our Terms and Privacy Policy from time to time. We will notify
                    you of any changes by posting the new policy on this page and updating the
                    "Last updated" date. You are advised to review this policy periodically for
                    any changes.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h3
                    className={classNames(
                      'text-black font-semibold font-degular',
                      'text-[20px] lg:text-[28px]',
                    )}
                  >
                    8. Contact Us
                  </h3>
                  <p
                    className={classNames(
                      'text-[#8E8E93] font-[350] font-avenirLtsd',
                      'text-[14px] leading-[22px] lg:text-[16px] lg:leading-[28px]',
                    )}
                  >
                    If you have any questions about these Terms and Privacy Policy, please contact
                    us through our community channels or submit a proposal through the governance
                    system.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </PageMaxWidth>
    </div>
  );
};
