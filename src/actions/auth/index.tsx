import { useClient } from '@/hooks/use-client';
import { Token } from '@/interface';
import { ILogin } from '@/interface/auth.interface';
import { authAtom } from '@/state';
import { useWallet } from '@txnlab/use-wallet';
import { useCallback } from 'react';
import toast from 'react-hot-toast';
import { useSetRecoilState } from 'recoil';

export const useAuthActions = () => {
  const client = useClient();
  const setAuth = useSetRecoilState(authAtom);
  const { providers } = useWallet();

  const logout = useCallback(async () => {
    providers?.forEach((provider) => {
      provider.disconnect();
    });
    setAuth(null);
    localStorage.removeItem('auth');
  }, []);

  const login = useCallback(async (dto: ILogin) => {
    const url = `/auth/admin/login`;

    const response = await client.post<Token>(url, dto, { redirectIfUnauthorized: false });

    if (response.data) {
      setAuth(response.data);
      await saveTokenToCookie(response.data);
    } else {
      toast.error(String(response.error?.toString()));
    }

    return response;
  }, []);

  const saveTokenToCookie = async (token: Token) => {
    fetch('/api/auth', {
      method: 'POST',
      body: JSON.stringify(token),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return {
    login,
    logout,
  };
};
