import React, { useState } from 'react';
import { BackgroundOverlay } from '@/components/background-overlay';
import { FaThumbsUp } from 'react-icons/fa';
import { useProposalActions } from '@/actions/proposals';
import { useProposalContract } from '@/actions/proposals/proposal.contract';
import { IProposalContract } from '@/interface/proposal.interface';
import { useNotify } from '@/hooks/useNotify';
import toast from 'react-hot-toast';
import { useWallet } from '@txnlab/use-wallet';
import Image from 'next/image';

interface Props {
  isActive: boolean;
  onClose: () => void;
  proposal: IProposalContract;
  updateProposal?: (proposal: IProposalContract) => void;
  voteType?: 'FOR' | 'AGAINST'; // optional, default FOR
  totalVotes: number;

}

export function VoteModal({
  isActive,
  onClose,
  proposal,
  updateProposal,
  voteType = 'FOR',
  totalVotes,
}: Props) {
  const [loading, setLoading] = useState(false);
  const { activeAddress } = useWallet();
  const { notify } = useNotify();
  const { validateWalletAddressAndProposal, voteForProposal: uploadVote } = useProposalActions();
  const { optInToProposalAsa, registerForProposal, voteForProposal } = useProposalContract();

  const submit = async (vote: boolean) => {
    if (loading) return;

    setLoading(true);

    if (!activeAddress) {
      notify.error('Please connect your wallet to continue');
      setLoading(false);
      return;
    }

    if (!proposal.asaId) {
      notify.error('Voting has not started on this proposal yet');
      setLoading(false);
      return;
    }

    toast.loading('Validating your wallet address...', { id: 'loader' });
    const validationRes = await validateWalletAddressAndProposal(proposal.appId, vote);
    toast.dismiss('loader');
    if (!validationRes) return setLoading(false);

    toast.loading('Opting into proposal asset...', { id: 'loader' });
    const optinRes = await optInToProposalAsa(proposal.asaId);
    toast.dismiss('loader');
    if (!optinRes) return setLoading(false);

    if (optinRes['asset-holding']?.amount > 1) {
      toast.error('You have voted already and cannot vote twice.');
      setLoading(false);
      return;
    } else if (optinRes['asset-holding']?.amount === 0) {
      toast.loading('Registering for proposal...', { id: 'loader' });
      const registerRes = await registerForProposal(proposal.appId, proposal.asaId);
      toast.dismiss('loader');
      if (!registerRes) return setLoading(false);
    }

    toast.loading('Voting...', { id: 'loader' });
    const voteRes = await voteForProposal(proposal.appId, proposal.asaId, vote);
    toast.dismiss('loader');
    if (!voteRes) return setLoading(false);

    notify.success('Vote submitted successfully');

    toast.loading('Updating proposal info...', { id: 'loader' });
    const updatedProposal = await uploadVote(voteRes);
    toast.dismiss('loader');

    setLoading(false);
    if (updatedProposal?.appId) {
      notify.success('Proposal information updated');
      updateProposal?.(updatedProposal);
      onClose();
    }
  };

  if (!isActive) return null;

  return (
    <BackgroundOverlay visible={isActive} onClose={onClose}>
      <div className="flex flex-col justify-start items-center bg-white text-black rounded-xl p-[50px] gap-4 relative font-degularDisplay max-w-[500px] w-full shadow">
        {/* Top Icon */}
        <div>
          <Image
            src={
              'https://res.cloudinary.com/dk5mfu099/image/upload/v1770740820/Frame_1000002795_5_ks07ko.png'
            }
            alt="confirm-image"
            width={61}
            height={61}
            className="object-cover mx-auto "
          />
        </div>

        {/* Title */}
        <h2 className="text-center text-xl md:text-[32px] font-medium mt-2">Confirm Vote</h2>

        {/* Message */}
        <p className="text-center text-gray-600 mt-2 mb-4 text-[16px] md:text-[20px] leading-[100%]">
          You are voting{' '}
          <span
            className={`font-semibold  ${voteType === 'FOR' ? 'text-green-500' : 'text-[#EA2727]'}`}
          >
            {voteType}
          </span>{' '}
          proposal #{proposal.appId}. This action cannot be undone.
        </p>

        {/* Vote Counts */}
        <div className="flex flex-col gap-2 p-3 mb-6 w-full bg-[#FAFAFA] rounded-[8px]">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500 text-[16px]"> Votes</p>
            <p className="font-medium text-black text-[16px]">{totalVotes || 0} total</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500 text-[16px]"> Votes</p>
            <p className="font-medium text-black text-[16px]">{totalVotes || 0} total</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 w-full">
          <button
            onClick={onClose}
            className="px-4 py-2 flex-1 text-[16px] rounded-md bg-[#F8F8F8]  text-gray-600 hover:bg-[#F8F8F8]/50"
          >
            No, Cancel
          </button>
          <button
            onClick={() => submit(voteType === 'FOR')}
            disabled={loading}
            className={`px-4 text-[16px] flex-1 py-2 rounded-md bg-green-500 text-white font-semibold hover:bg-green-600 ${
              loading ? 'opacity-60 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Submitting...' : 'Yes, Confirm'}
          </button>
        </div>
      </div>
    </BackgroundOverlay>
  );
}
