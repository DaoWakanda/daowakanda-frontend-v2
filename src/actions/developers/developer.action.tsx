import { useSetRecoilState } from 'recoil';
import { generateQueryFromObject } from '@/utils';
import { useNotify } from '@/hooks/useNotify';
import {
  FetchTriviaDto,
  ITrivia,
  LeaderBoardItem,
  SubmitTriviaAnswer,
} from '@/interface/challenge.interface';
import { TriviasAtom } from '@/state/trivia.atom';
import { useClient } from '@/hooks/use-client';

export const useDeveloperActions = () => {
  const client = useClient();
  const { notify } = useNotify();
  const setTrivias = useSetRecoilState(TriviasAtom);

  const getAllTrivia = async (dto: FetchTriviaDto) => {
    setTrivias(null);

    try {
      const query = generateQueryFromObject(dto);
      const url = `user-trivia/all?query=${query}`;
      const response = await client.get(url);

      if (response.data) {
        setTrivias(response.data as any);
        return response.data;
      }

      notify.error(response.error?.toString() || 'Something went wrong');
    } catch (error) {
      notify.error(error?.toString() || 'Something went wrong');
    }
  };

  const getTriviaById = async (id: string) => {
    try {
      const url = `user-trivia/${id}/detail`;
      const response = await client.get(url);
      if (response.data) {
        return response.data as ITrivia;
      }
      notify.error(response.error?.toString() || 'Something went wrong');
    } catch (error) {
      notify.error(error?.toString() || 'Something went wrong');
    }
  };

  const submitTriviaAnswer = async (dto: SubmitTriviaAnswer) => {
    try {
      const url = `v2/challenges/${dto.triviaId}/submit`;
      const response = await client.post(url, {
        githubRepoLink: dto.githubRepoLink,
      });

      if (response.data) {
        return response.data;
      }

      notify.error(response.error?.toString() || 'Something went wrong');
    } catch (error) {
      notify.error(error?.toString() || 'Something went wrong');
    }
  };

  const fetchLeaderboard = async () => {
    try {
      const url = 'user-trivia/leaderboard';
      const response = await client.get(url);

      if (response.data) {
        return response.data as Array<LeaderBoardItem>;
      }

      notify.error(response.error?.toString() || 'Something went wrong');
    } catch (error) {
      notify.error(error?.toString() || 'Something went wrong');
    }
  };

  // const uploadImage = async (base64: string, userId: string) => {
  //   try {
  //     const url = `user/${userId}/upload-image`;
  //     const response = await fetchWrapper.post(url, { base64 });

  //     if (response.data) {
  //       return response.data;
  //     }

  //     notify.error(response.error?.toString() || 'Something went wrong');
  //   } catch (error) {
  //     notify.error(error?.toString() || 'Something went wrong');
  //   }
  // };

  // const getUnclaimedRewards = async (address: string) => {
  //   try {
  //     const url = `user-trivia/unclaimed-bounty/${address}`;
  //     const response = await fetchWrapper.get(url);

  //     if (response.data) {
  //       return response.data as ITriviaBounty[];
  //     }

  //     notify.error(response.error?.toString() || 'Something went wrong');
  //   } catch (error) {
  //     notify.error(error?.toString() || 'Something went wrong');
  //   }
  // };

  // const claimReward = async (id: string) => {
  //   try {
  //     const url = `user-trivia/${id}/claim`;
  //     const response = await fetchWrapper.patch(url);

  //     if (response.data) {
  //       return response.data;
  //     }

  //     notify.error(response.error?.toString() || 'Something went wrong');
  //   } catch (error) {
  //     notify.error(error?.toString() || 'Something went wrong');
  //   }
  // };

  return {
    getAllTrivia,
    getTriviaById,
    submitTriviaAnswer,
    fetchLeaderboard,
  };
};
