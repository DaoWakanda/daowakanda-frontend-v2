'use client';

import React from 'react';
import { Trash2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { IProposalCardApi } from '@/interface/proposal.interface';
import { useRouter } from 'next/navigation';

export function ProposalCard({ proposal, onDelete }: IProposalCardApi) {
  const router = useRouter();
  const now = Date.now();
  // Status badge component
  const StatusBadge = () => {
    const status =
    now < proposal.endDate
      ? `Active`
      : proposal.yesVotes.length > proposal.noVotes.length
      ? `Approved`
      : `Denied`;
    const timestamp = new Date(proposal.startDate).toLocaleDateString();

    const endsInMs = proposal.endDate - Date.now();
    const endsIn =
      proposal.ongoing && endsInMs > 0
        ? `${Math.floor(Math.max(0, endsInMs) / (1000 * 60 * 60))}h ${Math.floor(
            (Math.max(0, endsInMs) / (1000 * 60)) % 60
          )}m`
        : undefined;

    if (status === 'Active') {
      return (
        <div className="flex justify-between items-center rounded-lg p-2 text-[16px] font-roboto bg-[#FFCC004D]">
          <span className="text-[#FFCC00] rounded">Active </span>
          {endsIn && <span className="text-[white] ">Ends in {endsIn}</span>}
        </div>
      );
    }
    if (status === 'Approved') {
      return (
        <div className="flex justify-between items-center rounded-lg p-2 text-[16px] bg-[#34C7594D]">
          <span className="text-[#34C759] px-2 py-1 rounded">Approved</span>
          {timestamp && <span className="text-[#34C759]">{timestamp}</span>}
        </div>
      );
    }
    return (
      <div className="flex justify-between items-center rounded-lg p-2 text-[16px] bg-[#FF3B304D]">
        <span className="text-[#FF3B30]">Denied</span>
        {timestamp && <span className="text-[#FF3B30]">{timestamp}</span>}
      </div>
    );
  };

  const yesVotes = proposal.yesVotes.length;
  const noVotes = proposal.noVotes.length;
  const totalVotes = yesVotes + noVotes;

  const yesPercentage = totalVotes ? Math.round((yesVotes / totalVotes) * 100) : 0;
  const noPercentage = totalVotes ? Math.round((noVotes / totalVotes) * 100) : 0;

  // Utility function
  const shortenString = (str: string, start = 4, end = 4) =>
    str.length > start + end ? `${str.slice(0, start)}...${str.slice(-end)}` : str;

  return (
    <div 
      onClick={() => router.push(`/proposals/${proposal.appId}`)}
      className="bg-[#2E2D3580] rounded-lg cursor-pointer overflow-hidden border border-gray-800 font-roboto flex flex-col min-h-[300px] cursor-pointer"
    >
      {/* Card Header */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex gap-4 items-center">
          <div className="flex-1">
            <StatusBadge />
          </div>
          {/* 
          <button
            onClick={() => onDelete(proposal.appId)}
            className="text-gray-400 hover:text-white cursor-pointer"
          >
            <Trash2 size={24} />
          </button> 
          */}
        </div>
        <div className="flex justify-between items-start mt-2">
          <h3 className="text-[22px] font-bold text-white">{proposal.title}</h3>
        </div>
        {/* <p className="text-xs text-white">Voting Tag: {votingTag}</p> */}

        <p className="mt-2 text-sm text-gray-300 line-clamp-3">{proposal.description}</p>
      </div>

      {/* Voting Section */}
      <div className="px-4 py-2">
        <div className="flex justify-between text-xs mb-1 text-white">
          <span>Yes ({yesPercentage}%)</span>
          <span>No ({noPercentage}%)</span>
        </div>

        <div className="flex gap-1 mb-3">
          <Progress value={yesPercentage} className="h-2 bg-gray-500/40 [&>div]:bg-green-500" />
        </div>

        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center text-xs text-white">
            <span>By {shortenString(proposal.creator)}</span>
            <div className="ml-1 w-5 h-5 rounded-full overflow-hidden">
              <img
                src="https://res.cloudinary.com/dlinprg6k/image/upload/v1742431389/avatars/1742431389019-6362722285.jpg"
                alt="Creator"
              />
            </div>
          </div>

          <div className="text-xs text-white">
            Total Votes: <span className="text-gray-400">{totalVotes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
