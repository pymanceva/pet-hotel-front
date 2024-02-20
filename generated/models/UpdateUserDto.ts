/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export interface IUpdateUserDto {
    /**
     * Фамилия пользователя
     */
    lastName?: string;
    /**
     * Имя пользователя
     */
    firstName?: string;
    /**
     * Отчество пользователя
     */
    middleName?: string;
    /**
     * Пароль для входа в учётную запись
     */
    password?: string;
    /**
     * Электронная почта
     */
    email?: string;
    /**
     * Роль (определяет уровень доступа)
     */
    role?: IUpdateUserDto.ERole;
}

export namespace IUpdateUserDto {

    /**
     * Роль (определяет уровень доступа)
     */
    export enum ERole {
        ROLE_BOSS = 'ROLE_BOSS',
        ROLE_ADMIN = 'ROLE_ADMIN',
        ROLE_USER = 'ROLE_USER',
        ROLE_FINANCIAL = 'ROLE_FINANCIAL',
    }


}