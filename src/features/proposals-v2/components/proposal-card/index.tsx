"use client"
import { IProposalCardApi } from '@/interface/proposal.interface';
import { Clock, Users2, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useState } from 'react';


import { VoteModal } from '../voting-modal';




type ProposalStatus = 'Open' | 'Approved' | 'Rejected';

export function ProposalCard({ proposal, onDelete, updateProposal }: IProposalCardApi) {
  const [showVoteModal, setShowVoteModal] = useState(false);
  const [voteType, setVoteType] = useState<'FOR' | 'AGAINST'>('FOR');

  const yesCount = proposal.yesVotes.length;
  const noCount = proposal.noVotes.length;
  const totalVotes = yesCount + noCount || 1;
  const yesPercentage = Math.round((yesCount / totalVotes) * 100);
  const now = Date.now();

  // get the status of the proposal
  const getProposalStatus = (): ProposalStatus => {
    if (now < proposal.endDate) return 'Open';

    if (proposal.yesVotes.length > proposal.noVotes.length) {
      return 'Approved';
    }

    return 'Rejected';
  };

  const status = getProposalStatus();

  // get the status styling of the proposal
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Open':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Approved':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Rejected':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const timestamp = new Date(proposal.startDate).toLocaleDateString();

  const endsInMs = proposal.endDate - Date.now();
  const endsIn =
    proposal.ongoing && endsInMs > 0
      ? `${Math.floor(Math.max(0, endsInMs) / (1000 * 60 * 60))}h ${Math.floor(
          (Math.max(0, endsInMs) / (1000 * 60)) % 60,
        )}m`
      : undefined;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-medium md:text-[20px]  mb-2">{proposal.title}</h3>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span
              className={`px-3 py-1 rounded-full text-sm md:text-[16px] border ${getStatusStyles(status)}`}
            >
              {status}
            </span>
            <span className="text-sm text-gray-500"># 24</span>
            {/* {proposal.tags.map((tag) => ( */}
            <span className="text-sm text-gray-500"> Web development</span>
            {/* ))} */}
          </div>

          <p className="text-[16px] font-light text-gray-600 mb-4 md:text-[18px]">
            {proposal.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              {status === 'Open' && endsIn && <span className="text-sm">Ends in {endsIn}</span>}

              {status !== 'Open' && timestamp && <span className="text-sm">{timestamp}</span>}
            </div>
            <div className="flex items-center space-x-1">
              <Users2 className="w-4 h-4" />
              <span>75.3% participation</span>
            </div>
          </div>
        </div>

        <div className="lg:min-w-[300px]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Votes</span>
            <span className="text-sm font-medium text-gray-900">
              {totalVotes.toLocaleString()} total
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 mb-3 overflow-hidden">
            <div
              className="bg-green-500 h-full transition-all"
              style={{ width: `${yesPercentage}%` }}
            />
          </div>

          <div className="flex items-center justify-between mb-4 text-sm">
            <div className="flex items-center space-x-1 text-green-600">
              <ThumbsUp className="w-4 h-4" />
              <span className="font-medium">For: {yesCount}</span>
            </div>
            <div className="flex items-center space-x-1 text-red-600">
              <ThumbsDown className="w-4 h-4" />
              <span className="font-medium">Against: {noCount}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              className="flex-1 bg-green-50 hover:bg-green-100 text-green-700 py-2 px-4 rounded-lg font-medium text-sm transition-colors flex items-center justify-center space-x-1"
              onClick={() => {
                setVoteType('FOR');
                setShowVoteModal(true);
              }}
            >
              <ThumbsUp className="w-4 h-4" />
              <span>Vote For</span>
            </button>
            <button
              className="flex-1 bg-red-50 hover:bg-red-100 text-red-700 py-2 px-4 rounded-lg font-medium text-sm transition-colors flex items-center justify-center space-x-1"
              onClick={() => {
                setVoteType('AGAINST');
                setShowVoteModal(true);
              }}
            >
              <ThumbsDown className="w-4 h-4" />
              <span>Vote For</span>
            </button>
          </div>
        </div>
      </div>

      <VoteModal
        isActive={showVoteModal}
        onClose={() => setShowVoteModal(false)}
        proposal={proposal}
        voteType={voteType}
        updateProposal={updateProposal}
        totalVotes={totalVotes}
      />
    </div>
  );
}
