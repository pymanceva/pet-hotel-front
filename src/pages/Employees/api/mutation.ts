import { useMutation, useQueryClient } from '@tanstack/react-query';
import { EmployeeMutationKeys } from './keys';
import { UserControllerService } from '../../../../generated/services/UserControllerService';
import { IUserDto } from '../../../../generated/models/UserDto';
import { EmployeeQueryKeys } from '@/widgets/EmployeesGrid/model/api/keys';
import { IUpdateUserDto } from '../../../../generated/models/UpdateUserDto';
import { callNotification } from '@/shared/helper/showNotification';
import { getFullName } from '@/entities/employee/utils/getFullName';

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [EmployeeMutationKeys.CREATE_EMPLOYEE],
    mutationFn: (data: IUserDto) => UserControllerService.addUser(1, data),
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
    mutationFn: (data: IUpdateUserDto & { id: number }) =>
      UserControllerService.updateUser(1, data.id!, data),
    onSuccess: (d) => {
      queryClient.invalidateQueries({
        queryKey: [EmployeeQueryKeys.GET_ALL_EMPLOYEE],
      });
      callNotification({
        message: `Данные пользователя ${d.firstName} ${d.lastName} успешно обновлены`,
        title: 'Успех',
      });
    },
    onError(_, variables) {
      callNotification({
        message: `Ошибка при обновлении данных пользователя ${getFullName(
          variables?.firstName!,
          variables?.lastName,
          variables?.middleName,
        )}`,
        title: 'Ошибка',
      });
    },
  });
};
