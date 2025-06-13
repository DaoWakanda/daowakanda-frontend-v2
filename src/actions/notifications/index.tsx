import { useClient } from '@/hooks/use-client';
import { useNotify } from '@/hooks/useNotify';
import { IUnclaimedBounty, IClaimResponse } from '@/interface/notifications.interface';

export const useNotificationActions = () => {
  const client = useClient();
  const { notify } = useNotify();

  const getUnclaimedBounties = async (): Promise<IUnclaimedBounty[]> => {
    try {
      const response = await client.get<IUnclaimedBounty[]>('v2/challenges/unclaimed-bounty');
      return response.data || [];
    } catch (error) {
      notify.error('Failed to fetch notifications');
      console.error('Notification fetch error:', error);
      return [];
    }
  };

  const claimBounty = async (submissionId: string) => {
    try {
      const response = await client.patch(`v2/challenges/${submissionId}/claim`);
      if (response.data?.success) {
        notify.success('Algos claimed successfully!');
        // return response.data;
      }
      throw new Error(response.data?.error || 'Claim failed');
    } catch (error) {
      notify.error(error instanceof Error ? error.message : 'Claim failed');
      return { success: false, error: 'Claim failed' };
    }
  };

  return { getUnclaimedBounties, claimBounty };
};
