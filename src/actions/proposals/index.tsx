import { useSetRecoilState } from 'recoil';
import { generateQueryFromObject } from '@/utils';
import { useNotify } from '@/hooks/useNotify';
import { useClient } from '@/hooks/use-client';
import { FetchProposalsDto } from '@/interface/proposal.interface';
import { ProposalsAtom } from '@/state/proposal.atom';

export const useProposalActions = () => {
  const client = useClient();
  const { notify } = useNotify();
  const setProposals = useSetRecoilState(ProposalsAtom);

  const getAllProposals = async (dto: FetchProposalsDto) => {
    setProposals([]);

    try {
      const query = generateQueryFromObject(dto);
      const url = `proposal/all?query=${query}`;
      const response = await client.get(url);

      if (response.data) {
        setProposals(response.data as any);
        return response.data;
      }

      notify.error(response.error?.toString() || 'Something went wrong');
    } catch (error) {
      notify.error(error?.toString() || 'Something went wrong');
    }
  };

  return {
    getAllProposals,
  };
};
