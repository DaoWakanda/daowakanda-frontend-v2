import React, { useState } from 'react';
import { BackgroundOverlay } from '@/components/background-overlay';
import { useWallet } from '@txnlab/use-wallet-react';
import {
  MdOutlineRadioButtonChecked,
  MdOutlineRadioButtonUnchecked,
} from 'react-icons/md';
import { useProposalActions } from '@/actions/proposals';
import { useProposalContract } from '@/actions/proposals/proposal.contract';
import { IProposalContract } from '@/interface/proposal.interface';
import { useNotify } from '@/hooks/useNotify';
import toast from 'react-hot-toast';

interface Props {
  isActive: boolean;
  onclick: () => any;
  proposal: IProposalContract;
  updateProposal?: (proposal: IProposalContract) => void;
}

enum Vote {
  APPROVE = 'Approve',
  DENY = 'Deny',
  MAYBE = 'Maybe',
}

export function VoteModal({
  isActive,
  onclick,
  proposal,
  updateProposal,
}: Props) {
  const [checked, setChecked] = useState('');
  const [loading, setLoading] = useState(false);
  const { activeAddress } = useWallet();
  const { notify } = useNotify();
  const { validateWalletAddressAndProposal, voteForProposal: uploadVote } =
    useProposalActions();
  const { optInToProposalAsa, registerForProposal, voteForProposal } =
    useProposalContract();

  const submit = async () => {
    if (loading) return;

    setLoading(true);

    if (!activeAddress) {
      notify.error(`Please connect your wallet to continue`);
      setLoading(false);
      return;
    }

    if (!proposal.asaId) {
      notify.error(`Voting has not started on this proposal yet`);
      setLoading(false);
      return;
    }

    toast.loading('Validating your wallet address...', { id: 'loader' });
    const validationRes = await validateWalletAddressAndProposal(
      proposal.appId,
      checked === 'Approve',
    );
    toast.dismiss('loader');

    if (!validationRes) {
      setLoading(false);
      return;
    }

    toast.loading('Opting into proposal asset...', { id: 'loader' });
    const optinRes = await optInToProposalAsa(proposal.asaId);
    toast.dismiss('loader');

    if (!optinRes) {
      setLoading(false);
      return;
    }

    if (optinRes['asset-holding']?.amount > 0) {
      // Skip registration
      if (optinRes['asset-holding']?.amount > 1) {
        // user voted already.
        toast.error('You have voted already and cannot vote twice.');
        setLoading(false);
        return;
      }
    } else {
      // Register
      toast.loading('Registering for proposal...', { id: 'loader' });
      const registerRes = await registerForProposal(
        proposal.appId,
        proposal.asaId,
      );
      toast.dismiss('loader');

      if (!registerRes) {
        setLoading(false);
        return;
      }
    }

    // Vote
    toast.loading('Voting...', { id: 'loader' });
    const voteRes = await voteForProposal(
      proposal.appId,
      proposal.asaId,
      checked === 'Approve',
    );
    toast.dismiss('loader');

    if (!voteRes) {
      setLoading(false);
      return;
    }

    notify.success('Vote submitted successfully');

    toast.loading('Updating proposal information...', { id: 'loader' });
    const updatedProposal = await uploadVote(voteRes);
    toast.dismiss('loader');

    setLoading(false);

    if (updatedProposal?.appId) {
      notify.success('The proposal information was successfully updated');
      updateProposal?.(updatedProposal);
      onclick();
    }
  };

  return (
    <>
      <BackgroundOverlay visible={isActive} onClose={onclick}>
        <div className="flex flex-col justify-start items-start bg-black text-white rounded-xl w-[90%] md:w-[444px] min-h-[308px] p-8 md:p-6 gap-2.5 border-2 border-white">
          <div className="font-['Inter'] text-lg font-semibold leading-7 text-left text-[#e8f9fff2]">
            Vote
          </div>

          <div className="flex flex-col pt-5 w-full gap-2.5">
            <div
              className={`flex p-2 items-center gap-2 cursor-pointer text-[#e8f9ff] h-10 w-full font-['Inter'] text-sm font-normal leading-5 ${
                checked === Vote.APPROVE
                  ? 'bg-[#23c1aa4d] border border-[#c7f284] rounded-lg'
                  : ''
              }`}
              onClick={() => setChecked(Vote.APPROVE)}
            >
              {checked === Vote.APPROVE ? (
                <MdOutlineRadioButtonChecked className="border-2 border-[#c7f284] text-[#c7f284] rounded-full w-5 h-5" />
              ) : (
                <MdOutlineRadioButtonUnchecked className="border-2 border-[#c7f284] rounded-full w-5 h-5" />
              )}
              Approve
            </div>

            <div
              className={`flex p-2 items-center gap-2 cursor-pointer text-[#e8f9ff] h-10 w-full font-['Inter'] text-sm font-normal leading-5 ${
                checked === Vote.DENY
                  ? 'bg-[#23c1aa4d] border border-[#c7f284] rounded-lg'
                  : ''
              }`}
              onClick={() => setChecked(Vote.DENY)}
            >
              {checked === Vote.DENY ? (
                <MdOutlineRadioButtonChecked className="border-2 border-[#c7f284] text-[#c7f284] rounded-full w-5 h-5" />
              ) : (
                <MdOutlineRadioButtonUnchecked className="border-2 border-[#c7f284] rounded-full w-5 h-5" />
              )}
              Deny
            </div>
          </div>

          <button
            onClick={submit}
            disabled={!checked}
            className="flex w-full cursor-pointer bg-[#c5ee4f] border border-[#c5ee4f] rounded-lg h-11 py-3 px-0 text-[#00484f] font-['Inter'] text-[15px] font-semibold leading-7 items-center justify-center my-2.5 hover:bg-[#bbe45f] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Submitting...' : 'Submit vote'}
          </button>
        </div>
      </BackgroundOverlay>
    </>
  );
}
