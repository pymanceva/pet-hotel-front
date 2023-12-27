/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NewUserDto = {
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
     * Пароль для входа в учётную запись
     */
    password?: string;
    /**
     * Электронная почта
     */
    email: string;
    /**
     * Роль (определяет уровень доступа)
     */
    role: NewUserDto.role;
    /**
     * Состояние учётной записи (активна/заблокирована)
     */
    isActive?: boolean;
};

export namespace NewUserDto {

    /**
     * Роль (определяет уровень доступа)
     */
    export enum role {
        ROLE_BOSS = 'ROLE_BOSS',
        ROLE_ADMIN = 'ROLE_ADMIN',
        ROLE_USER = 'ROLE_USER',
        ROLE_FINANCIAL = 'ROLE_FINANCIAL',
    }


}
