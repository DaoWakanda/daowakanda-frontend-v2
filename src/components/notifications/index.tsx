import React, { useState } from 'react';
import { BackgroundOverlay } from '../background-overlay';
import { IoMdClose } from 'react-icons/io';
import ClaimButton from './claim-button';
import { useMediaQuery } from 'react-responsive';

interface NotificationsProps {
  onClose: () => void;
}

const Notifications = ({ onClose }: NotificationsProps) => {
  const [selectedNotification, setSelectedNotification] = useState<number | null>(null);
  const isMobile = useMediaQuery({ maxWidth: 1023 }); // lg breakpoint

  const notifications = [
    {
      title: 'Congratulations, Algo Task winners',
      message:
        "Congratulations Micah, you've been selected as part of the winners who participated in the 'Transfer of ownership'",
    },
    {
      title: 'New Reward Available',
      message: "You've unlocked a new reward for your participation in the DAO governance",
    },
    {
      title: 'Voting Reminder',
      message: "Don't forget to vote on the current proposal before Friday",
    },
    {
      title: 'Transaction Completed',
      message: 'Your recent transaction of 100 ALGOs has been successfully processed',
    },
  ];

  const handleNotificationClick = (index: number) => {
    if (isMobile) {
      setSelectedNotification(selectedNotification === index ? null : index);
    } else {
      setSelectedNotification(index);
    }
  };

  return (
    <BackgroundOverlay>
      {/* Desktop View - Claim Button */}
      {!isMobile && selectedNotification !== null && (
        <div className="fixed top-[100px] right-[450px] z-50">
          <ClaimButton
            notification={notifications[selectedNotification]}
            onClose={() => setSelectedNotification(null)}
          />
        </div>
      )}

      {/* Notifications Panel */}
      <div className="fixed top-[70px] m-5 lg:m-0 lg:right-10 h-[88vh] z-40 w-full lg:w-[400px] border-2 border-white rounded-[20px] bg-black overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-black z-10 p-5 flex justify-between items-center">
          <h1 className="text-white text-lg lg:text-2xl">Notifications</h1>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Close notifications"
          >
            <IoMdClose size={24} />
          </button>
        </div>

        {/* Notification List */}
        <div className="cursor-pointer p-4 pt-0">
          <div className="space-y-3 mt-4">
            {notifications.map((notification, index) => (
              <div
                key={index}
                className={`bg-white rounded-md text-white w-full border transition-all duration-200 ${
                  isMobile && selectedNotification === index
                    ? 'pl-1 h-auto'
                    : 'pl-1 overflow-hidden'
                }`}
                onClick={() => handleNotificationClick(index)}
              >
                <div className="pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-5 bg-[#313030] hover:bg-[#404040] rounded-md">
                  <h1 className="lg:text-lg font-bold">{notification.title}</h1>
                  <p
                    className={`lg:text-[12px] ${isMobile && selectedNotification === index ? 'block' : 'truncate'}`}
                  >
                    {notification.message}
                  </p>

                  {/* Mobile-only Claim Button */}
                  {isMobile && selectedNotification === index && (
                    <button className="mt-5 mb-3 bg-[#c5ee4f] hover:bg-[#b5de3f] text-[#00484F] py-3 px-4 rounded-md text-[18px] font-medium transition-colors">
                      Claim Reward
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BackgroundOverlay>
  );
};

export default Notifications;
