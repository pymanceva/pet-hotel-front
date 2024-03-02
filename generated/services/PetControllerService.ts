/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { INewPetDto } from './../models/NewPetDto';
import type { IPetDto } from './../models/PetDto';
import type { IUpdatePetDto } from './../models/UpdatePetDto';
import { request as __request } from './../core/request';
import type { ApiRequestOptions } from './../core/ApiRequestOptions';

const addPet = (
  xPetHotelUserId: number,
  requestBody: INewPetDto,
): ApiRequestOptions => ({
  method: 'POST',
  path: `/pets`,
  headers: {
    'X-PetHotel-User-Id': xPetHotelUserId,
  },
  body: requestBody,
  mediaType: 'application/json',
  errors: {
    400: `Запрос составлен некорректно`,
    403: `Доступ запрещён`,
    404: `Пользователь не найден`,
    409: `У этого клиента уже есть питомец с такой кличкой`,
    500: `Internal Server Error`,
  },
});

const getPetById = (
  xPetHotelUserId: number,
  petId: number,
): ApiRequestOptions => ({
  method: 'GET',
  path: `/pets/${petId}`,
  headers: {
    'X-PetHotel-User-Id': xPetHotelUserId,
  },
  errors: {
    400: `Запрос составлен некорректно`,
    403: `Доступ запрещён`,
    404: `Питомец или пользователь не найден`,
    500: `Internal Server Error`,
  },
});

const deletePet = (
  xPetHotelUserId: number,
  petId: number,
): ApiRequestOptions => ({
  method: 'DELETE',
  path: `/pets/${petId}`,
  headers: {
    'X-PetHotel-User-Id': xPetHotelUserId,
  },
  errors: {
    400: `Запрос составлен некорректно`,
    403: `Доступ запрещён`,
    404: `Питомец или пользователь не найден`,
    500: `Internal Server Error`,
  },
});

const updatePet = (
  xPetHotelUserId: number,
  petId: number,
  requestBody: IUpdatePetDto,
): ApiRequestOptions => ({
  method: 'PATCH',
  path: `/pets/${petId}`,
  headers: {
    'X-PetHotel-User-Id': xPetHotelUserId,
  },
  body: requestBody,
  mediaType: 'application/json',
  errors: {
    400: `Запрос составлен некорректно`,
    403: `Доступ запрещён`,
    404: `Питомец или пользователь не найден`,
    409: `У этого клиента уже есть питомец с такой кличкой`,
    500: `Internal Server Error`,
  },
});

export type TPetControllerOptions = {
  addPet: (
    xPetHotelUserId: number,
    requestBody: INewPetDto,
  ) => ApiRequestOptions;
  getPetById: (xPetHotelUserId: number, petId: number) => ApiRequestOptions;
  deletePet: (xPetHotelUserId: number, petId: number) => ApiRequestOptions;
  updatePet: (
    xPetHotelUserId: number,
    petId: number,
    requestBody: IUpdatePetDto,
  ) => ApiRequestOptions;
};

export const PetControllerOptions: TPetControllerOptions = {
  addPet: addPet,
  getPetById: getPetById,
  deletePet: deletePet,
  updatePet: updatePet,
};

export class PetControllerService {
  /**
   * Добавление нового питомца
   * Обратите внимание: добавить нового питомца может пользователь с ролью admin или boss
   * @param xPetHotelUserId Id пользователя осуществляющего запрос
   * @param requestBody данные добавляемого питомца
   * @returns IPetDto Питомец добавлен
   * @throws ApiError
   */
  public static addPet(
    xPetHotelUserId: number,
    requestBody: INewPetDto,
  ): Promise<IPetDto> {
    return __request<IPetDto>(
      PetControllerOptions.addPet(xPetHotelUserId, requestBody),
    );
  }
  /**
   * Получение питомца по его идентификатору
   * @param xPetHotelUserId Id пользователя осуществляющего запрос
   * @param petId ID питомца
   * @returns IPetDto OK
   * @throws ApiError
   */
  public static getPetById(
    xPetHotelUserId: number,
    petId: number,
  ): Promise<IPetDto> {
    return __request<IPetDto>(
      PetControllerOptions.getPetById(xPetHotelUserId, petId),
    );
  }
  /**
   * Удаление питомца по его идентификатору
   * Обратите внимание: удаление питомца не должно быть доступно пользователю
   * @param xPetHotelUserId Id пользователя осуществляющего запрос
   * @param petId ID питомца
   * @returns void
   * @throws ApiError
   */
  public static deletePet(
    xPetHotelUserId: number,
    petId: number,
  ): Promise<void> {
    return __request<void>(
      PetControllerOptions.deletePet(xPetHotelUserId, petId),
    );
  }
  /**
   * Изменение данных о питомце по его идентификатору
   * Обратите внимание: изменить данные о питомце может пользователь с ролью admin или boss
   * @param xPetHotelUserId Id пользователя осуществляющего запрос
   * @param petId ID питомца
   * @param requestBody данные изменяемого питомца
   * @returns IPetDto OK
   * @throws ApiError
   */
  public static updatePet(
    xPetHotelUserId: number,
    petId: number,
    requestBody: IUpdatePetDto,
  ): Promise<IPetDto> {
    return __request<IPetDto>(
      PetControllerOptions.updatePet(xPetHotelUserId, petId, requestBody),
    );
  }
}
