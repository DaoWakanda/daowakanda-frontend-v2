import React from 'react';
import { IoMdClose } from 'react-icons/io';

interface NotificationType {
  title: string;
  message: string;
}

interface ClaimButtonProps {
  notification: NotificationType;
  onClose?: () => void;
}

const ClaimButton = ({ notification, onClose }: ClaimButtonProps) => {
  return (
    <div className="relative p-6 lg:p-8 bg-[#313030] rounded-[20px] border-2 border-white w-[300px] lg:w-[480px] shadow-lg">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-[#c5ee4f] transition-colors"
        >
          <IoMdClose size={20} />
        </button>
      )}
      <div className="mb-6 text-center">
        <h1 className="text-white text-sm lg:text-lg font-bold mb-2">{notification.title}</h1>
        <p className="text-[#8E8E93] text-sm">{notification.message}</p>
      </div>
      <div className="text-center space-y-3">
        <button className="w-full bg-[#c5ee4f] hover:bg-[#b5de3f] text-[#00484F] py-3 px-4 rounded-md font-medium transition-colors">
          Claim Reward
        </button>
      </div>
    </div>
  );
};

export default ClaimButton;
