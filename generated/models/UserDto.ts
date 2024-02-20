/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export interface IUserDto {
    id?: number;
    /**
     * Фамилия пользователя
     */
    lastName?: string;
    /**
     * Имя пользователя
     */
    firstName: string;
    /**
     * Отчество пользователя
     */
    middleName?: string;
    /**
     * Электронная почта
     */
    email: string;
    /**
     * Пароль для входа в учётную запись
     */
    password?: string;
    /**
     * Роль (определяет уровень доступа)
     */
    role: IUserDto.ERole;
    /**
     * Состояние учётной записи (активна/заблокирована)
     */
    isActive: boolean;
}

export namespace IUserDto {

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