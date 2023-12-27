/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UpdateUserDto } from '../models/UpdateUserDto';
import type { UserDto } from '../models/UserDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserControllerService {

    /**
     * Получить список всех пользователей
     * Получение списка всех пользователей. Доступно только для пользователей с ролью BOSS или ADMIN.
     * @param xPetHotelUserId Id пользователя осуществляющего запрос
     * @returns UserDto OK
     * @throws ApiError
     */
    public static getAllUsers(
xPetHotelUserId: number,
): CancelablePromise<Array<UserDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
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
    }

    /**
     * Добавить нового пользователя
     * Добавление нового пользователя.  Создание пользователей с ролью USER и FINANCIAL доступно только пользователям BOSS и ADMIN.  Пользователя ADMIN может создавать только BOSS.  Пользователя BOSS создать нельзя (его добавляют вручную разработчики).
     * @param xPetHotelUserId Id пользователя осуществляющего запрос
     * @param requestBody 
     * @returns UserDto Created
     * @throws ApiError
     */
    public static addUser(
xPetHotelUserId: number,
requestBody: UserDto,
): CancelablePromise<UserDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users',
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
    }

    /**
     * Получить информацию о пользователе
     * Получение пользователя по ID.  Информация о пользователях ADMIN, USER и FINANCIAL доступна только для пользователей с ролью BOSS или ADMIN.  Информацию о пользователе BOSS может просматривать только он сам.  Для пользователей USER и FINANCIAL доступна информация о самом себе.
     * @param xPetHotelUserId Id пользователя осуществляющего запрос
     * @param id ID пользователя в отношении которого совершается действие
     * @returns UserDto OK
     * @throws ApiError
     */
    public static getUserById(
xPetHotelUserId: number,
id: number,
): CancelablePromise<UserDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}',
            path: {
                'id': id,
            },
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
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{id}',
            path: {
                'id': id,
            },
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
    }

    /**
     * Изменить информацию об имеющемся пользователе
     * Редактирование существующего пользователя.  Каждый пользователь может редактировать сам себя.  Кроме того, редактирование пользователей с ролью USER и FINANCIAL доступно пользователям BOSS и ADMIN, а пользователя ADMIN может редактировать BOSS.
     * @param xPetHotelUserId Id пользователя осуществляющего запрос
     * @param id ID пользователя в отношении которого совершается действие
     * @param requestBody 
     * @returns UserDto OK
     * @throws ApiError
     */
    public static updateUser(
xPetHotelUserId: number,
id: number,
requestBody: UpdateUserDto,
): CancelablePromise<UserDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/users/{id}',
            path: {
                'id': id,
            },
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
    }

    /**
     * Изменить состояние учётной записи пользователя - Активна / Заблокирована.
     * Редактирование состояния учётной записи пользователя - Активна / Заблокирована. Редактирование пользователей с ролью USER и FINANCIAL доступно пользователям BOSS и ADMIN, а пользователя ADMIN может редактировать только BOSS.
     * @param xPetHotelUserId Id пользователя осуществляющего запрос
     * @param id ID пользователя в отношении которого совершается действие
     * @param isActive Состояние, которое должно быть присвоено пользователю. isActive=true - учётная запись активна, isActive=false - учётная запись заблокирована.
     * @returns UserDto OK
     * @throws ApiError
     */
    public static setUserState(
xPetHotelUserId: number,
id: number,
isActive: boolean,
): CancelablePromise<UserDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/users/{id}/state',
            path: {
                'id': id,
            },
            headers: {
                'X-PetHotel-User-Id': xPetHotelUserId,
            },
            query: {
                'isActive': isActive,
            },
            errors: {
                400: `Запрос составлен неверно.`,
                403: `Недостаточно прав для совершения действия.`,
                404: `Объект не найден. Ошибка может возникнуть в следующих случаях: 1. не найден пользователь от имени которого производится запрос - requester; 2. не найден пользователь в отношении которого производится запрос - user.`,
                500: `Внутренняя ошибка сервера.`,
            },
        });
    }

}
