import { useSetRecoilState } from 'recoil';
import { useNotify } from '@/hooks/useNotify';
import { useClient } from '@/hooks/use-client';
import { ProfileAtom } from '@/state/profile.atom';
import { ICreateProfile, IProfile, IUpdateProfile } from '@/interface/profile.interface';

export const useProfileActions = () => {
  const client = useClient();
  const { notify } = useNotify();
  const setProfile = useSetRecoilState(ProfileAtom);

  const createAccount = async (dto: ICreateProfile) => {
    try {
      const url = 'v2/user/create';
      const response = await client.post(url, dto);

      if (response.data) {
        return response.data;
      }

      notify.error(response.error?.toString() || 'Something went wrong');
    } catch (error) {
      notify.error(error?.toString() || 'Something went wrong');
    }
  };

  const getProfile = async () => {
    try {
      const url = `v2/user/profile`;
      const response = await client.get<IProfile>(url);

      if (response.data) {
        setProfile(response.data);
      }

      return response;
    } catch (error) {
      return { error, status: 500, data: undefined };
    }
  };

  const updateProfile = async (dto: IUpdateProfile) => {
    try {
      const url = `v2/user/profile/update`;
      const response = await client.post(url, dto);

      if (response.data) {
        return response.data;
      }

      notify.error(response.error?.toString() || 'Something went wrong');
    } catch (error) {
      notify.error(error?.toString() || 'Something went wrong');
    }
  };

  const uploadImage = async (base64: string) => {
    try {
      const url = `v2/user/profile/upload-image`;
      const response = await client.post(url, { base64 });

      if (response.data) {
        return response.data;
      }

      notify.error(response.error?.toString() || 'Something went wrong');
    } catch (error) {
      notify.error(error?.toString() || 'Something went wrong');
    }
  };

  //   try {update 
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
    createAccount,
    getProfile,
    updateProfile,
    uploadImage,
  };
};
