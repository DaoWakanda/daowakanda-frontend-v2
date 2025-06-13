// components/notifications/claim-button.tsx
import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { IUnclaimedBounty } from '@/interface/notifications.interface';
import { useNotificationActions } from '@/actions/notifications';

interface ClaimButtonProps {
  notification: IUnclaimedBounty;
  onClose: () => void;
}

const ClaimButton = ({ notification, onClose }: ClaimButtonProps) => {
  //function to pathch the action claimBounty with an ID (notification ID as submissin id)
  const [loading, setLoading] = useState(false);
  const { claimBounty } = useNotificationActions();

  const claimReward = async () => {
    setLoading(true);
    const data = await claimBounty(notification?.id);
    if (data.success) {
      console.log('Algos Claimed Successflly');
      setLoading(false);
    }
    console.error('Failed to fetch notifications:', data.error);
    setLoading(false);
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
        <p className="text-white text-sm">{notification.message}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-gray-400 text-sm">Reward:</span>
          <span className="text-[#c5ee4f] font-bold">{notification.bounty} Algo's</span>
        </div>
      </div>

      <button
        onClick={claimReward}
        // disabled={claiming}
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
