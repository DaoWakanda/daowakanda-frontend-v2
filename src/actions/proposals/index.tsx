import { generateQueryFromObject } from '@/utils';
import { useNotify } from '@/hooks/useNotify';
import { useClient } from '@/hooks/use-client';
import { FetchProposalsDto, IBootstrapProposalDto, ICreateProposalContract, ICreateProposalContractApi, IProposalContract, ProposalApi, ValidateWalletAddressResponse } from '@/interface/proposal.interface';
import { PaginationResponse } from '@/interface/pagination.interface';
import { useCallback } from 'react';

export const useProposalActions = () => {
  const client = useClient();
  const { notify } = useNotify();

  const getAllProposals = async (
    dto: FetchProposalsDto,
  ): Promise<PaginationResponse<ProposalApi> | null> => {
    const query = generateQueryFromObject(dto);
    const url = `proposal/all?${query}`;
    const response = await client.get<PaginationResponse<ProposalApi>>(url);

    if (response.data) {
      return response.data;
    }

    notify.error(response.error?.toString() || 'Something went wrong');
    return null;
  };

  const getProposal = async (appId: string) => {
    const url = `proposal/${appId}`;
      const response = await client.get<ProposalApi>(url);
      if (response.data) {
        return response.data;
      }
      notify.error(response.error?.toString() || 'Something went wrong');
      return null;
  };

  const validateWalletAddressAndProposal = useCallback(
    async (appId: string, vote: boolean) => {
      const response = await client.post<{ valid: boolean; address: string; assetId: string }>(
        'v2/proposal/validate-address-vote',
        {
          appId,
          vote,
        },
      );

      if (response.data) {
        return response.data;
      }

      notify.error(
        response.error?.toString() ||
          'You cannot vote for this proposal at this time.',
      );
    },
    [],
  );

  const voteForProposal = useCallback(async (dto: { appId: string; vote: boolean }) => {
    const response = await client.post<ProposalApi>(`v2/proposal/${dto.appId}/vote`, {
      vote: dto.vote,
    });

    if (response.data) {
      return response.data;
    }

    notify.error(response.error?.toString() || 'Something went wrong.');
  }, []);

  const createProposal = useCallback(async (dto: ICreateProposalContractApi) => {
    const response = await client.post<ProposalApi>(`v2/proposal`, dto);
    if (response.data) {
      return response.data;
    }

    notify.error(response.error?.toString() || 'Something went wrong.');
  }, []);

  const bootstrapProposal = useCallback(async (dto: IBootstrapProposalDto) => {
    const response = await client.post<IProposalContract>(
      `v2/proposal/${dto.appId}/bootstrap`,
      { asaId: dto.asaId },
    );

    if (response.data) {
      return response.data as IProposalContract;
    }

    notify.error(response.error?.toString() || 'Something went wrong.');
  }, []);

  const validateWalletAddress = useCallback(async () => {
    const response = await client.post<ValidateWalletAddressResponse>('v2/proposal/validate-address');

      if (response.data) {
        return response.data;
      }

      notify.error(
        response.error?.toString() || 'Invalid algorand wallet address.',
      );
  }, []);

  const deleteProposal = async (appId: string): Promise<void> => {
    try {
      await client.delete(`/proposal/${appId}`);

      notify.success('Proposal deleted successfully');
    } catch (error: any) {
      const message = error?.response?.data?.message || 'Failed to delete proposal';

      notify.error(message);
      throw error;
    }
  };

  return {
    getAllProposals,
    getProposal,
    validateWalletAddressAndProposal,
    voteForProposal,
    createProposal,
    bootstrapProposal,
    validateWalletAddress,
    deleteProposal
  };
};
