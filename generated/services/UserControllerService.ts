/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IUpdateUserDto } from './../models/UpdateUserDto';
import type { IUserDto } from './../models/UserDto';
import { request as __request } from './../core/request';
import type { ApiRequestOptions } from './../core/ApiRequestOptions';

const getAllUsers = (xPetHotelUserId: number): ApiRequestOptions => ({
  method: 'GET',
  path: `/users`,
  headers: {
    'X-PetHotel-User-Id': xPetHotelUserId,
  },
  errors: {
    400: `Запрос составлен неверно.`,
    403: `Недостаточно прав для совершения действия.`,
    404: `Объект не найден. Ошибка может возникнуть в следующих случаях: 1. не найден пользователь от имени которого производится запрос - requester; 2. не найден пользователь в отношении которого производится запрос - user.`,
    500: `Внутренняя ошибка сервера.`,
  },
});

const addUser = (
  xPetHotelUserId: number,
  requestBody: IUserDto,
): ApiRequestOptions => ({
  method: 'POST',
  path: `/users`,
  headers: {
    'X-PetHotel-User-Id': xPetHotelUserId,
  },
  body: requestBody,
  mediaType: 'application/json',
  errors: {
    400: `Запрос составлен неверно.`,
    403: `Недостаточно прав для совершения действия.`,
    404: `Объект не найден. Ошибка может возникнуть в следующих случаях: 1. не найден пользователь от имени которого производится запрос - requester.`,
    409: `Ошибка уникальности полей базы данных.`,
    500: `Внутренняя ошибка сервера.`,
  },
});

const getUserById = (
  xPetHotelUserId: number,
  id: number,
): ApiRequestOptions => ({
  method: 'GET',
  path: `/users/${id}`,
  headers: {
    'X-PetHotel-User-Id': xPetHotelUserId,
  },
  errors: {
    400: `Запрос составлен неверно.`,
    403: `Недостаточно прав для совершения действия.`,
    404: `Объект не найден. Ошибка может возникнуть в следующих случаях: 1. не найден пользователь от имени которого производится запрос - requester; 2. не найден пользователь в отношении которого производится запрос - user.`,
    500: `Внутренняя ошибка сервера.`,
  },
});

const deleteUserById = (
  xPetHotelUserId: number,
  id: number,
): ApiRequestOptions => ({
  method: 'DELETE',
  path: `/users/${id}`,
  headers: {
    'X-PetHotel-User-Id': xPetHotelUserId,
  },
  errors: {
    400: `Запрос составлен неверно.`,
    403: `Недостаточно прав для совершения действия.`,
    404: `Объект не найден. Ошибка может возникнуть в следующих случаях: 1. не найден пользователь от имени которого производится запрос - requester; 2. не найден пользователь в отношении которого производится запрос - user.`,
    500: `Внутренняя ошибка сервера.`,
  },
});

const updateUser = (
  xPetHotelUserId: number,
  id: number,
  requestBody: IUpdateUserDto,
): ApiRequestOptions => ({
  method: 'PATCH',
  path: `/users/${id}`,
  headers: {
    'X-PetHotel-User-Id': xPetHotelUserId,
  },
  body: requestBody,
  mediaType: 'application/json',
  errors: {
    400: `Запрос составлен неверно.`,
    403: `Недостаточно прав для совершения действия.`,
    404: `Объект не найден. Ошибка может возникнуть в следующих случаях: 1. не найден пользователь от имени которого производится запрос - requester; 2. не найден пользователь в отношении которого производится запрос - user.`,
    409: `Ошибка уникальности полей базы данных.`,
    500: `Внутренняя ошибка сервера.`,
  },
});

const setUserState = (
  xPetHotelUserId: number,
  id: number,
  isActive: boolean,
): ApiRequestOptions => ({
  method: 'PATCH',
  path: `/users/${id}/state`,
  headers: {
    'X-PetHotel-User-Id': xPetHotelUserId,
  },
  query: {
    isActive: isActive,
  },
  errors: {
    400: `Запрос составлен неверно.`,
    403: `Недостаточно прав для совершения действия.`,
    404: `Объект не найден. Ошибка может возникнуть в следующих случаях: 1. не найден пользователь от имени которого производится запрос - requester; 2. не найден пользователь в отношении которого производится запрос - user.`,
    500: `Внутренняя ошибка сервера.`,
  },
});

export type TUserControllerOptions = {
  getAllUsers: (xPetHotelUserId: number) => ApiRequestOptions;
  addUser: (
    xPetHotelUserId: number,
    requestBody: IUserDto,
  ) => ApiRequestOptions;
  getUserById: (xPetHotelUserId: number, id: number) => ApiRequestOptions;
  deleteUserById: (xPetHotelUserId: number, id: number) => ApiRequestOptions;
  updateUser: (
    xPetHotelUserId: number,
    id: number,
    requestBody: IUpdateUserDto,
  ) => ApiRequestOptions;
  setUserState: (
    xPetHotelUserId: number,
    id: number,
    isActive: boolean,
  ) => ApiRequestOptions;
};

export const UserControllerOptions: TUserControllerOptions = {
  getAllUsers: getAllUsers,
  addUser: addUser,
  getUserById: getUserById,
  deleteUserById: deleteUserById,
  updateUser: updateUser,
  setUserState: setUserState,
};

export class UserControllerService {
  /**
   * Получить список всех пользователей
   * Получение списка всех пользователей. Доступно только для пользователей с ролью BOSS или ADMIN.
   * @param xPetHotelUserId Id пользователя осуществляющего запрос
   * @returns any OK
   * @throws ApiError
   */
  public static getAllUsers(xPetHotelUserId: number): Promise<IUserDto[]> {
    return __request<any>(UserControllerOptions.getAllUsers(xPetHotelUserId));
  }
  /**
   * Добавить нового пользователя
   * Добавление нового пользователя.  Создание пользователей с ролью USER и FINANCIAL доступно только пользователям BOSS и ADMIN.  Пользователя ADMIN может создавать только BOSS.  Пользователя BOSS создать нельзя (его добавляют вручную разработчики).
   * @param xPetHotelUserId Id пользователя осуществляющего запрос
   * @param requestBody
   * @returns any Created
   * @throws ApiError
   */
  public static addUser(
    xPetHotelUserId: number,
    requestBody: IUserDto,
  ): Promise<any> {
    return __request<any>(
      UserControllerOptions.addUser(xPetHotelUserId, requestBody),
    );
  }
  /**
   * Получить информацию о пользователе
   * Получение пользователя по ID.  Информация о пользователях ADMIN, USER и FINANCIAL доступна только для пользователей с ролью BOSS или ADMIN.  Информацию о пользователе BOSS может просматривать только он сам.  Для пользователей USER и FINANCIAL доступна информация о самом себе.
   * @param xPetHotelUserId Id пользователя осуществляющего запрос
   * @param id ID пользователя в отношении которого совершается действие
   * @returns any OK
   * @throws ApiError
   */
  public static getUserById(xPetHotelUserId: number, id: number): Promise<any> {
    return __request<any>(
      UserControllerOptions.getUserById(xPetHotelUserId, id),
    );
  }
  /**
   * Удалить информацию о пользователе (безвозвратно)
   * Удаление существующего пользователя.  Удаление пользователей с ролью USER и FINANCIAL доступно только пользователям BOSS и ADMIN.  Пользователя ADMIN может удалить только BOSS.  Пользователя BOSS удалить нельзя (его удаляют вручную разработчики).
   * @param xPetHotelUserId Id пользователя осуществляющего запрос
   * @param id ID пользователя в отношении которого совершается действие
   * @returns void
   * @throws ApiError
   */
  public static deleteUserById(
    xPetHotelUserId: number,
    id: number,
  ): Promise<void> {
    return __request<void>(
      UserControllerOptions.deleteUserById(xPetHotelUserId, id),
    );
  }
  /**
   * Изменить информацию об имеющемся пользователе
   * Редактирование существующего пользователя.  Каждый пользователь может редактировать сам себя.  Кроме того, редактирование пользователей с ролью USER и FINANCIAL доступно пользователям BOSS и ADMIN, а пользователя ADMIN может редактировать BOSS.
   * @param xPetHotelUserId Id пользователя осуществляющего запрос
   * @param id ID пользователя в отношении которого совершается действие
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public static updateUser(
    xPetHotelUserId: number,
    id: number,
    requestBody: IUpdateUserDto,
  ): Promise<any> {
    return __request<any>(
      UserControllerOptions.updateUser(xPetHotelUserId, id, requestBody),
    );
  }
  /**
   * Изменить состояние учётной записи пользователя - Активна / Заблокирована.
   * Редактирование состояния учётной записи пользователя - Активна / Заблокирована. Редактирование пользователей с ролью USER и FINANCIAL доступно пользователям BOSS и ADMIN, а пользователя ADMIN может редактировать только BOSS.
   * @param xPetHotelUserId Id пользователя осуществляющего запрос
   * @param id ID пользователя в отношении которого совершается действие
   * @param isActive Состояние, которое должно быть присвоено пользователю. isActive=true - учётная запись активна, isActive=false - учётная запись заблокирована.
   * @returns any OK
   * @throws ApiError
   */
  public static setUserState(
    xPetHotelUserId: number,
    id: number,
    isActive: boolean,
  ): Promise<any> {
    return __request<any>(
      UserControllerOptions.setUserState(xPetHotelUserId, id, isActive),
    );
  }
}
