import { useQuery } from '@tanstack/react-query';
import { UserControllerService } from '../../../../../generated/services/UserControllerService';
import { EmployeeQueryKeys } from './keys';

export const useGetUsers = () => {
  return useQuery({
    queryKey: [EmployeeQueryKeys.GET_ALL_EMPLOYEE],
    queryFn: () => {
      return UserControllerService.getAllUsers(1);
    },
  });
};

export const useGetUser = (id: number) => {
  return useQuery({
    queryKey: [`${EmployeeQueryKeys.GET_SINGLE_EMPLOYEE} ${id}`],
    queryFn: () => UserControllerService.getUserById(1, id),
  });
};
