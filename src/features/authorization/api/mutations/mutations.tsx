import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { HTTPError } from 'ky';
import Cookies from 'js-cookie';
import { EMutationKeys as EAuthenticationMutationKeys } from '../keys/keys';
import AuthorizationService from '../authorization.service';
import { IAuthorization } from '../../types/types';

import { callNotification } from '@/shared/helper/showNotification';
import { FailIcon } from '@/shared/ui/icons/FailIcon';
import { COOKIE_KEY_ID } from '@/shared/const/const';
import { useUserStore } from '@/app/roles';

export const useAuthorization = () => {
  const navigate = useNavigate();
  const { setUser } = useUserStore();
  const Icon = <FailIcon />;
  return useMutation({
    mutationKey: [EAuthenticationMutationKeys.AUTHORIZE],
    mutationFn: (data: IAuthorization) => AuthorizationService.authorize(data),
    onSuccess: (d) => {
      navigate('/');
      setUser(d);
      Cookies.set(COOKIE_KEY_ID, d.id.toString());
    },
    onError: (e) => {
      if (e instanceof HTTPError) {
        callNotification({
          message: e.message,
          title: 'Неверный логин или пароль',
          icon: Icon,
        });
      } else {
        callNotification({
          message: 'Повторите вашу попытку позже.',
          title: 'Упс, похоже, у нас проблемы. ',
          icon: Icon,
        });
      }
    },
  });
};
