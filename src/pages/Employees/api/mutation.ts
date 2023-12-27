import { useMutation, useQueryClient } from '@tanstack/react-query';
import { EmployeeMutationKeys } from './keys';
import { UserControllerService } from '../../../../generated/services/UserControllerService';
import { UserDto } from '../../../../generated/models/UserDto';
import { EmployeeQueryKeys } from '@/widgets/EmployeesGrid/model/api/keys';
import { UpdateUserDto } from '../../../../generated/models/UpdateUserDto';

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [EmployeeMutationKeys.CREATE_EMPLOYEE],
    mutationFn: (data: UserDto) => UserControllerService.addUser(1, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [EmployeeQueryKeys.GET_ALL_EMPLOYEE],
      });
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [EmployeeMutationKeys.DELETE_EMPLOYEE],
    mutationFn: (id: number) => UserControllerService.deleteUserById(1, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [EmployeeQueryKeys.GET_ALL_EMPLOYEE],
      });
    },
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [EmployeeMutationKeys.UPDATE_EMPLOYEE],
    mutationFn: (data: UpdateUserDto & { id: number }) =>
      UserControllerService.updateUser(1, data.id!, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [EmployeeQueryKeys.GET_ALL_EMPLOYEE],
      });
    },
  });
};
