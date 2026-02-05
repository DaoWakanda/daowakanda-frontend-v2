import { useClient } from '@/hooks/use-client';
import { useNotify } from '@/hooks/useNotify';
import { IUnclaimedBounty } from '@/interface/notifications.interface';
import { UnclaimedBountiesAtom } from '@/state/trivia.atom';
import { useSetRecoilState } from 'recoil';

export const useNotificationActions = () => {
  const client = useClient();
  const { notify } = useNotify();
  const setUnclaimedBounties = useSetRecoilState(UnclaimedBountiesAtom);

  const getUnclaimedBounties = async () => {
    const response = await client.get<IUnclaimedBounty[]>('v2/challenges/unclaimed-bounty');
    if (response.data) {
      setUnclaimedBounties(response.data);
      return response.data;
    }
    // notify.error(response.error?.toString() || 'Failed to fetch notifications');
  };

  const claimBounty = async (submissionId: string) => {
    const response = await client.patch(`v2/challenges/${submissionId}/claim`);
    if (response.data) {
      notify.success('Algos claimed successfully!');
      return response.data;
    }
    notify.error(response.error?.toString() || 'Failed to claim bounty');
  };

  return { getUnclaimedBounties, claimBounty };
};
