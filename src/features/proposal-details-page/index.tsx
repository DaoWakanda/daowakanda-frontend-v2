'use client';

import React, { useEffect, useState } from 'react';
import { PageMaxWidth } from '@/components/page-max-width';
import Link from 'next/link';
import { useProposalActions } from '@/actions/proposals';
import { ProposalApi } from '@/interface/proposal.interface';
import { useWallet } from '@txnlab/use-wallet';
import { useNotify } from '@/hooks/useNotify';
import Skeleton from 'react-loading-skeleton';
import { VoteModal } from './vote-modal';


interface ProposalDetailsProps {
  proposalId: string;
}

const ProposalDetails = ({ proposalId }: ProposalDetailsProps) => {
  const [proposal, setProposal] = useState<ProposalApi | null>(null);
  const { activeAddress } = useWallet();
  const [voteModalActive, setVoteModalActive] = useState(false);
  const { getProposal } = useProposalActions();
  const {notify} = useNotify();
  const loading = !proposal;
  
  const fetchProposal = async () => {
    const response = await getProposal(proposalId);
    if (response) {
      setProposal(response);
    }
  };

  const calculatePercentage = () => {
    if (!proposal) {
      return {
        yes: 50,
        no: 50,
      };
    }

    const yesPercentage =
      (100 * proposal.yesVotes.length) /
      (proposal.yesVotes.length + proposal.noVotes.length);
    const finalYesPercentage = isNaN(yesPercentage) ? 50 : yesPercentage;

    return {
      yes: finalYesPercentage,
      no: 100 - finalYesPercentage,
    };
  };

  const percentage = calculatePercentage();
  const now = Date.now();

  const openVoteModal = () => {
    if (!activeAddress) {
      notify.error('Please connect your wallet to vote');
      return;
    }
    setVoteModalActive(true);
  };
  const closeVoteModal = () => {
    setVoteModalActive(false);
  };

  useEffect(() => {
    fetchProposal();
  }, [proposalId]);

  return (
    <PageMaxWidth>
      <div className="mt-10 w-full font-inter h-full flex flex-col justify-center items-center">
        <div className="mt-[60px] ml:mt-20 w-full h-[240px] rounded-[12px] p-[15px] md:p-[30px] border-[1px] border-white bg-[#4D4D4D4D] bg-[url('https://res.cloudinary.com/dlinprg6k/image/upload/v1744623266/Ellipse_3_cpmbt5.png')] bg-cover bg-center">
          <div className="flex items-center text-[#E8F9FF80]">
            <Link href="/proposals">
              <h1 className="text-sm">Governance</h1>
            </Link>
            <p className="ml-2">
              <img
                src="https://res.cloudinary.com/dlinprg6k/image/upload/v1744636481/SVG_kqi79j.png"
                alt="Governance icon"
                className="h-[20px] w-[20px]"
              />
            </p>
            <Link href="/proposals">
              <button className="ml-2 text-sm cursor-pointer">Proposal</button>
            </Link>
          </div>
          <div className="w-full mt-2 font-bold text-18 md:text-[22px] text-white">
          {loading ? (
              <Skeleton width={150} />
            ) : (
              `#${proposal.appId}: ${proposal.title}`
            )}
          </div>
          <div className="w-full text-[13px] md:text-[15px] text-white mt-3">
          {loading ? (
              <Skeleton width={200} count={2} />
            ) : (
              `${proposal.description}`
            )}
          </div>
          <div className="flex justify-end mt-3">
            {(proposal?.endDate || 0) > now && (
              <button onClick={openVoteModal} className="p-[10px] w-full md:w-[15%] rounded-lg bg-[#C5EE4F] text-sm text-[#00484F] font-semibold">
                Proceed to vote
              </button>
            )}
          </div>
        </div>
        {/* Cards section*/}
        <div className="mt-5 md:mt-5 w-full h-auto flex flex-col md:flex-row justify-center items-center gap-5">
          {/* Results */}
          <div className="w-full md:flex-1 h-[250px] border-[0.5px] border-[#8E8E93] rounded-lg bg-[#4D4D4D4D] bg-[url('https://res.cloudinary.com/dlinprg6k/image/upload/v1744623317/Ellipse_4_bz10oa.png')] bg-cover bg-center">
            <div className="flex flex-col w-full text-[#E8F9FFF2] p-5">
              <div className="flex gap-24">
                <h1 className="text-[18px] font-bold">Results</h1>
                <p className="text-sm">{loading ? (
                    <Skeleton width={100} />
                  ) : (
                    `${
                      proposal.yesVotes.length + proposal.noVotes.length
                    } votes`
                  )}</p>
              </div>

              <div className="mt-5">
                <div className="w-full h-5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full flex animate-pulse">
                    <div
                      className="bg-green-500 transition-all duration-1000"
                      style={{ width: `${percentage.yes}%` }}
                    ></div>
                    <div className="bg-gray-400" style={{ width: '0%' }}></div>
                    <div className="bg-red-500" style={{ width: `${percentage.no}%` }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex justify-between">
                  <div className="bg-[#48B748] h-5 w-5 rounded-full">
                    <h1 className="ml-8 ">Approved</h1>
                  </div>
                  <p>{loading ? (
                    <Skeleton width={150} />
                  ) : (
                    `${proposal.yesVotes.length} (${percentage.yes}%)`
                  )}</p>
                </div>
                <div className="flex justify-between mt-2">
                  <div className=" h-5 w-5 rounded-full bg-[#AEAEB2] ">
                    <h1 className="ml-8 ">Maybe</h1>
                  </div>
                  <p>0 (0%)</p>
                </div>
                <div className="flex justify-between mt-2">
                  <div className="bg-[#FF3B30] h-5 w-5 rounded-full">
                    <h1 className="ml-8 ">Denied</h1>
                  </div>
                  <p>  {loading ? (
                    <Skeleton width={150} />
                  ) : (
                    `${proposal.noVotes.length} (${percentage.no}%)`
                  )}</p>
                </div>
              </div>
            </div>
          </div>

          {/* progress card */}
          <div className="w-full md:flex-1 h-[250px] border-[0.5px] border-[#8E8E93] rounded-lg bg-[#4D4D4D4D] bg-[url('https://res.cloudinary.com/dlinprg6k/image/upload/v1744623317/Ellipse_4_bz10oa.png')] bg-cover bg-center">
            <div className="flex flex-col w-full text-[#E8F9FFF2] p-5">
              {/*created */}
              <div className="flex gap-3 items-start">
                <div className="flex flex-col items-center pt-1">
                  <div className="bg-[#C7F284] w-5 h-5 rounded-full flex items-center justify-center text-black text-xs font-bold">
                    ✓
                  </div>
                  <div className="mt-1 w-0.5 h-6 bg-[#C7F284] rounded-md"></div>
                </div>
                <div className="flex-1">
                  <h1 className="text-sm">Created</h1>
                  <p className="text-[11px] text-[#AEAEB2]">{loading ? (
                      <Skeleton width={150} />
                    ) : (
                      `${new Date(proposal.startDate).toString()}`
                    )}</p>
                </div>
              </div>
              {/* In progress */}
              <div className="flex gap-3 items-start">
                <div className="flex flex-col items-center pt-1">
                  <div className="bg-[#C7F284] w-5 h-5 rounded-full flex items-center justify-center text-black text-xs font-bold">
                    ✓
                  </div>
                  <div className="mt-1 w-0.5 h-6 bg-[#C7F284] rounded-md"></div>
                </div>
                <div className="flex-1">
                  <h1 className="text-sm">In Progress</h1>
                  <p className="text-[11px] text-[#AEAEB2]"> {loading ? (
                      <Skeleton width={150} />
                    ) : (
                      `${(proposal?.endDate || 0) > now ? new Date(Date.now()).toDateString() : ''}`
                    )}</p>
                </div>
              </div>
              {/* Ended */}
              <div className="flex gap-3 items-start">
                <div className="flex flex-col items-center pt-1">
                  <div className="relative w-5 h-5 rounded-full bg-[#23C1AA4D] border-2 border-[#C7F284] flex items-center justify-center">
                    {/* Small inner circle */}
                    <div className="w-2 h-2 rounded-full bg-[#C7F284]"></div>
                  </div>
                  <div className="mt-1 w-0.5 h-5 bg-[#D1D5DB] rounded-md"></div>
                </div>
                <div className="flex-1">
                  <h1 className="text-sm">Ended</h1>
                  <p className="text-[11px] text-[#AEAEB2]">
                    {loading ? (
                      <Skeleton width={150} />
                    ) : (
                      `${(proposal?.endDate || 0) > now ? new Date(Date.now()).toDateString() : ''}`
                    )}
                  </p>
                </div>
              </div>
              {/* Queued */}
              <div className="flex gap-3 items-start">
                <div className="flex flex-col items-center pt-1">
                  {(proposal?.endDate || 0) < now ? (
                    <div className="bg-[#C7F284] w-5 h-5 rounded-full flex items-center justify-center text-black text-xs font-bold">
                      ✓
                    </div>
                  ) : (
                    <div className="relative w-5 h-5 rounded-full border-2 border-[#D1D5DB]"></div>
                  )}
                  <div className="mt-1 w-0.5 h-1 bg-[#D1D5DB] rounded-md"></div>
                </div>
                <h1 className="text-sm">Queued</h1>
              </div>
              {/* Executed */}
              <div className="flex gap-3 items-start">
                <div className="flex flex-col items-center pt-1">
                  {(proposal?.endDate || 0) < now ? (
                    <div className="bg-[#C7F284] w-5 h-5 rounded-full flex items-center justify-center text-black text-xs font-bold">
                      ✓
                    </div>
                  ) : (
                    <div className="relative w-5 h-5 rounded-full border-2 border-[#D1D5DB]"></div>
                  )}
                </div>
                <h1 className="text-sm">Executed</h1>
              </div>
            </div>
          </div>
          {/* Status card */}
          <div className="w-full md:flex-1 h-[250px] border-[0.5px] border-[#8E8E93] rounded-lg bg-[#4D4D4D4D] bg-[url('https://res.cloudinary.com/dlinprg6k/image/upload/v1744623317/Ellipse_4_bz10oa.png')] bg-cover bg-center">
            <div className="flex flex-col w-full text-[#E8F9FFF2] p-5">
              <div className="flex gap-3 justify-start items-center">
                <img
                  src="https://res.cloudinary.com/dlinprg6k/image/upload/v1744849335/Vector_4_n9y3zy.png"
                  alt="status"
                  className="w-4"
                />
                <p className="text-[#AEAEB2]">Status: </p>
                <div className="border-[1px] border-[#75E0A74D] rounded-full w-[100px] h-auto text-[#75E0A7] text-bold text-center"
                style={{
                  color: loading ? '#FFF' :
                    now < proposal.endDate
                      ? '#FFF'
                      : proposal.yesVotes.length >=
                        proposal.noVotes.length
                      ? undefined
                      : '#FF3B30',
                }}
                >
                   {`${
                        loading ? <Skeleton width={100} /> :
                        now < proposal?.endDate || 0
                          ? 'Ongoing'
                          : proposal.yesVotes.length >= proposal.noVotes.length
                          ? 'Approved'
                          : 'Rejected'
                      }`}
                </div>
              </div>
              <div className="flex justify-start items-center gap-3 mt-3">
                <img
                  src="https://res.cloudinary.com/dlinprg6k/image/upload/v1744849312/Vector_1_jgfxn9.png"
                  alt="created"
                  className="w-4"
                />
                <p className="text-[#AEAEB2]">
                  Created by: <span className="text-white"> {loading ? (
                    <Skeleton width={200} />
                  ) : (
                    `${proposal.creator.slice(0, 10)}...`
                  )}</span>
                </p>
              </div>
              <div className="flex justify-start items-center gap-3 mt-3">
                <img
                  src="https://res.cloudinary.com/dlinprg6k/image/upload/v1744849312/Vector_2_s0rpcx.png"
                  alt="start"
                  className="w-4"
                />
                <p className="text-[#AEAEB2]">
                  Start: <span className="text-white">{loading ? (
                    <Skeleton width={150} />
                  ) : (
                    `${new Date(proposal.startDate).toDateString()}`
                  )} </span>
                </p>
              </div>
              <div className="flex justify-start items-center gap-3 mt-3">
                <img
                  src="https://res.cloudinary.com/dlinprg6k/image/upload/v1744849312/Vector_3_hxownb.png"
                  alt="end"
                  className="w-4"
                />
                <p className="text-[#AEAEB2]">
                  End:<span className="text-white"> {loading ? (
                    <Skeleton width={150} />
                  ) : (
                    `${new Date(proposal.endDate).toDateString()}`
                  )}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {voteModalActive && !!proposal && (
        <VoteModal
          proposal={proposal}
          isActive={voteModalActive}
          onclick={closeVoteModal}
          updateProposal={setProposal}
        />
      )}
    </PageMaxWidth>
  );
};

export default ProposalDetails;
