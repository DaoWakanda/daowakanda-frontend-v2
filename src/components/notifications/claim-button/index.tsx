// components/notifications/claim-button.tsx
import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { IUnclaimedBounty } from '@/interface/notifications.interface';
import { useNotificationActions } from '@/actions/notifications';
import { useDeveloperContractActions } from '@/actions/developers/developer.contract';
import toast from 'react-hot-toast';

interface ClaimButtonProps {
  notification: IUnclaimedBounty;
  onClose: () => void;
  refresh: () => void;
}

const ClaimButton = ({ notification, onClose, refresh }: ClaimButtonProps) => {
  const [loading, setLoading] = useState(false);
  const { claimBounty } = useNotificationActions();
  const { claimReward } = useDeveloperContractActions();

  const handleClaimReward = async () => {
    if (loading) return;

    setLoading(true);
    toast.loading('Claiming reward...', {
      id: 'claim-reward',
    });

    try {
      await claimReward(notification.bounty, notification.smartContractId);
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.dismiss('claim-reward');
      toast.error(`Error claiming reward: ${error}`);
      return;
    }

    const res = await claimBounty(notification.id);

    if (res) {
      toast.success('Reward claimed successfully');
      refresh();
    }

    setLoading(false);
    toast.dismiss('claim-reward');
  };

  return (
    <div className="bg-gray-900 border-2 border-[#c5ee4f] rounded-xl p-5 w-[350px] shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#c5ee4f] text-xl font-bold">{notification.title}</h2>
        <button onClick={onClose} className="text-white hover:text-gray-300">
          <IoMdClose size={20} />
        </button>
      </div>

      <div className="mb-4">
        <p className="text-white text-sm">
          Congratulations, you have been selected as part of the winners of {notification.title} task. You
          are entitled to claim {notification.bounty} Algos as your reward.
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-gray-400 text-sm">Reward:</span>
          <span className="text-[#c5ee4f] font-bold">{notification.bounty} Algos</span>
        </div>
      </div>

      <button
        onClick={handleClaimReward}
        disabled={loading}
        className={`w-full py-3 rounded-md font-bold ${
          loading
            ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
            : 'bg-[#c5ee4f] hover:bg-[#b5de3f] text-[#00484F]'
        }`}
      >
        {loading ? 'Claiming...' : 'Claim Now'}
      </button>
    </div>
  );
};

export default ClaimButton;
