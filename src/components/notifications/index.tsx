import React, { useState, useEffect } from 'react';
import { BackgroundOverlay } from '../background-overlay';
import { IoMdClose } from 'react-icons/io';
import ClaimButton from './claim-button';
import { useMediaQuery } from 'react-responsive';
import { useNotificationActions } from '@/actions/notifications';
import { IUnclaimedBounty } from '@/interface/notifications.interface';
import { NotificationSkeleton } from './notification-skeleton';

interface NotificationsProps {
  onClose: () => void;
}

const Notifications = ({ onClose }: NotificationsProps) => {
  const [selectedNotification, setSelectedNotification] = useState<number | null>(null);
  const [notifications, setNotifications] = useState<IUnclaimedBounty[]>([]);
  const [loading, setLoading] = useState(true);
  const [claiming, setClaiming] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const { getUnclaimedBounties, claimBounty } = useNotificationActions();

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const data = await getUnclaimedBounties();
      setNotifications(data ?? []);
    } catch (error) {
      console.error('Failed to fetch notifications:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const handleNotificationClick = (index: number) => {
    if (isMobile) {
      setSelectedNotification(selectedNotification === index ? null : index);
    } else {
      setSelectedNotification(index);
    }
  };

  const handleClaimReward = async (bountyId: string) => {
    setClaiming(true);
    try {
      const result = await claimBounty(bountyId);
      if (result.success) {
        setNotifications((prev) => prev.filter((n) => n.id !== bountyId));
        setSelectedNotification(null);
      }
    } finally {
      setClaiming(false);
    }
  };

  return (
    <BackgroundOverlay
      onClose={onClose}
      visible={true}
      wrapperStyle={{
        position: 'fixed',
        top: 80,
        height: '100vh',
      }}
    >
      {/* Desktop View - Claim Button */}
      {!isMobile && selectedNotification !== null && notifications[selectedNotification] && (
        <div className="fixed top-[100px] right-[450px] z-50">
          <ClaimButton
            notification={notifications[selectedNotification]}
            onClose={() => setSelectedNotification(null)}
            refresh={fetchNotifications}
          />
        </div>
      )}

      {/* Notifications Panel */}
      <div className="fixed top-[70px] m-5 lg:m-0 lg:right-10 h-[88vh] z-40 w-full lg:w-[400px] border-2 border-white rounded-[20px] bg-black overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-black z-10 p-5 flex justify-between items-center border-b border-gray-700">
          <h1 className="text-white text-lg lg:text-2xl font-bold">Notifications</h1>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Close notifications"
          >
            <IoMdClose size={24} />
          </button>
        </div>

        {/* Notification List */}
        <div className="p-4">
          {loading ? (
            <div className="mt-4">
              <NotificationSkeleton count={4} />
            </div>
          ) : notifications.length === 0 ? (
            <div className="text-center py-10 text-gray-400">No unclaimed rewards available</div>
          ) : (
            <div className="space-y-3 mt-4">
              {notifications.map((notification, index) => (
                <div
                  key={notification.id}
                  className={`bg-gray-800 rounded-lg overflow-hidden transition-all ${
                    isMobile && selectedNotification === index
                      ? 'border border-[#c5ee4f]'
                      : 'hover:bg-gray-700'
                  }`}
                  onClick={() => handleNotificationClick(index)}
                >
                  <div className="p-4 cursor-pointer">
                    <div className="flex justify-between items-start">
                      <h3 className="text-[#c5ee4f] font-bold">{notification.title}</h3>
                      {/* <span className="bg-[#c5ee4f] text-[#00484F] px-2 py-1 rounded text-xs font-bold">
                        {notification?.disbursementStatus} {notification?.bounty}
                      </span> */}
                    </div>
                    <p className="text-white text-sm mt-2 line-clamp-2" title={notification.message}>
                      Congratulations, you have been selected as part of the winners of {notification.title} task. You
                      are entitled to claim {notification.bounty} Algo's as your reward.
                    </p>
                  </div>

                  {isMobile && selectedNotification === index && (
                    <div className="p-4 bg-gray-900 border-t border-gray-700">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleClaimReward(notification.id);
                        }}
                        disabled={claiming}
                        className={`w-full py-2 px-4 rounded-md font-medium ${
                          claiming
                            ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                            : 'bg-[#c5ee4f] hover:bg-[#b5de3f] text-[#00484F]'
                        }`}
                      >
                        {claiming ? 'Processing...' : 'Claim Reward'}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </BackgroundOverlay>
  );
};

export default Notifications;
