import { useState } from 'react';
import { BackgroundOverlay } from '../background-overlay';

type VoteOption = 'approve' | 'maybe' | 'deny' | null;

export function SubmitVoteModal() {
  const [selectedVote, setSelectedVote] = useState<VoteOption>(null);

  return (
    <BackgroundOverlay>
      <div className="w-[320px] md:w-[400px] bg-black rounded-lg border-2 border-white p-4 md:p-5">
        <h1 className="text-white text-lg font-medium mb-2 md:mb-4">Vote</h1>

        <div className="space-y-2 mb-5">
          {/* Approve Option */}
          <button
            onClick={() => setSelectedVote('approve')}
            className={`w-full flex items-center p-2 rounded-lg ${
              selectedVote === 'approve' ? 'bg-[#23C1AA4D] border-2 border-[#C7F284]' : ''
            }`}
          >
            <div
              className={`h-5 w-5 rounded-full ${
                selectedVote === 'approve'
                  ? 'border-2 border-[#C7F284]'
                  : 'border-2 border-[#48B748]'
              } flex items-center justify-center`}
            >
              {selectedVote === 'approve' && (
                <div className="h-2 w-2 rounded-full bg-[#48B748]"></div>
              )}
            </div>
            <span className="ml-4 text-white">Approve</span>
          </button>

          {/* Maybe Option */}
          <button
            onClick={() => setSelectedVote('maybe')}
            className={`w-full flex items-center p-2 rounded-lg ${
              selectedVote === 'maybe' ? 'bg-[#23C1AA4D] border-2 border-[#C7F284]' : ''
            }`}
          >
            <div
              className={`h-5 w-5 rounded-full ${
                selectedVote === 'maybe' ? 'border-2 border-[#C7F284]' : 'border border-[#48B748]'
              } flex items-center justify-center`}
            >
              {selectedVote === 'maybe' && (
                <div className="h-2 w-2 rounded-full bg-[#48B748]"></div>
              )}
            </div>
            <span className="ml-4 text-white">Maybe</span>
          </button>

          {/* Deny Option */}
          <button
            onClick={() => setSelectedVote('deny')}
            className={`w-full flex items-center p-2 rounded-lg ${
              selectedVote === 'deny' ? 'bg-[#23C1AA4D] border-2 border-[#C7F284]' : ''
            }`}
          >
            <div
              className={`h-5 w-5 rounded-full ${
                selectedVote === 'deny' ? 'border-2 border-[#C7F284]' : 'border border-[#48B748]'
              } flex items-center justify-center`}
            >
              {selectedVote === 'deny' && <div className="h-2 w-2 rounded-full bg-[#48B748]"></div>}
            </div>
            <span className="ml-4 text-white">Deny</span>
          </button>
        </div>

        <button className="w-full py-3 rounded-lg bg-[#C5EE4F] text-[#00484F] text-sm font-semibold">
          Submit vote
        </button>
      </div>
    </BackgroundOverlay>
  );
}
