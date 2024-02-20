/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IOwnerShortDto } from './OwnerShortDto';

export interface IPetDto {
    /**
     * id питомца
     */
    id?: number;
    owner?: IOwnerShortDto;
    /**
     * Тип животного
     */
    type?: IPetDto.EType;
    /**
     * Кличка питомца
     */
    name?: string;
    /**
     * Порода питомца
     */
    breed?: string;
    /**
     * Дата рождения (в формате "dd.MM.yyyy"), должно быть в прошлом
     */
    birthDate?: string;
    /**
     * Возраст питомца, высчитывается автоматически на основании даты рождения
     */
    age?: string;
    /**
     * Пол питомца
     */
    sex?: IPetDto.ESex;
    /**
     * Окрас питомца
     */
    color?: string;
    /**
     * Чип, Клеймо, Особые приметы
     */
    sign?: string;
    /**
     * Выставочная ли собака?
     */
    isExhibition?: boolean;
    /**
     * Дата последнего посещения ветврача (в формате "dd.MM.yyyy"), должно быть в прошлом
     */
    vetVisitDate?: string;
    /**
     * Причина последнего посещения врача
     */
    vetVisitReason?: string;
    /**
     * Даты последних прививок, названия вакцин
     */
    vaccine?: string;
    /**
     * Дата обработки от глистов/паразитов
     */
    parasites?: string;
    /**
     * Даты обработки от блох/клещей с указанием препарата
     */
    fleaMite?: string;
    /**
     * Перенесенные операции (кастрация)
     */
    surgery?: string;
    /**
     * Перенесенные заболевания
     */
    pastDisease?: string;
    /**
     * Особенности состояния здоровья питомца (ФИП)
     */
    healthCharacteristic?: string;
    /**
     * Дата последней сдачи мочи
     */
    urineAnalysis?: string;
    /**
     * Есть ли аллергия?
     */
    allergy?: boolean;
    /**
     * Если предыдущее поле true, тогда в этом поле описание на что аллергия
     */
    allergyType?: string;
    /**
     * Есть ли у питомца хронические заболевания?
     */
    chronicDisease?: boolean;
    /**
     * Если предыдущее поле true, тогда в этом поле описание какие хронические заболевания есть
     */
    chronicDiseaseType?: string;
    /**
     * Предполагаемая дата очередной течки (для сук)(в формате "dd.MM.yyyy"), должно быть в будущем
     */
    heatDate?: string;
    /**
     * Контакты ветврача, к которому следует обращаться в случае необходимости
     */
    vetData?: string;
    /**
     * Есть ли опыт разлуки с хозяином?
     */
    stayWithoutMaster?: string;
    /**
     * Умеет ли питомец спокойно оставаться один?
     */
    stayAlone?: string;
    /**
     * Требуется ли спец уход, какой?
     */
    specialCare?: string;
    /**
     * Лает / воет в одиночестве?
     */
    barkHowl?: string;
    /**
     * Портит ли вещи, мебель?
     */
    furnitureDamage?: string;
    /**
     * Ворует ли еду со стола?
     */
    foodFromTable?: string;
    /**
     * Справляет ли  нужду дома?
     */
    defecateAtHome?: string;
    /**
     * Метит дома?
     */
    markAtHome?: string;
    /**
     * Как относится к незнакомым людям?
     */
    newPeople?: string;
    /**
     * Ваша собака когда-нибудь кого-нибудь кусала?
     */
    isBitePeople?: boolean;
    /**
     * Если предыдущее поле true, тогда в этом поле причина укуса
     */
    reasonOfBite?: string;
    /**
     * Играет / гуляет с другими собаками?
     */
    playWithDogs?: string;
    /**
     * Прошел ли питомец курс послушания?
     */
    isDogTraining?: boolean;
    /**
     * Если предыдущее поле true, тогда в этом поле название курс послушания
     */
    trainingName?: string;
    /**
     * Что любит
     */
    like?: string;
    /**
     * Что не любит
     */
    notLike?: string;
    /**
     * Любимые игрушки, игры питомца
     */
    toys?: string;
    /**
     * Вредные привычки
     */
    badHabit?: string;
    /**
     * Сколько раз в день питомец привык гулять?/гуляет ли на улице
     */
    walking?: string;
    /**
     * Привычное время прогулок Утро
     */
    morningWalking?: string;
    /**
     * Привычное время прогулок День
     */
    dayWalking?: string;
    /**
     * Привычное время прогулок Вечер
     */
    eveningWalking?: string;
    /**
     * Количество кормлений в день (От 1 до 9)
     */
    feedingQuantity?: number;
    /**
     * Вид корма (сухой / натуралка/консервы)
     */
    feedType?: string;
    /**
     * Название корма/консерв
     */
    feedName?: string;
    /**
     * Состав корма/консерв
     */
    feedComposition?: string;
    /**
     * Норма на 1 кормление
     */
    feedingRate?: string;
    /**
     * Особенности кормления
     */
    feedingPractice?: string;
    /**
     * Разрешенные лакомства и их количество
     */
    treat?: string;
    /**
     * Необходимы ли лекарства, витамины?
     */
    isMedicine?: boolean;
    /**
     * Если предыдущее поле true, тогда в этом поле название, режим приема лекарств/витаминов и доза
     */
    medicineRegimen?: string;
    /**
     * Дополнительные комментарии, особенности поведения
     */
    additionalData?: string;
}

export namespace IPetDto {

    /**
     * Тип животного
     */
    export enum EType {
        DOG = 'DOG',
        CAT = 'CAT',
        EXOTIC = 'EXOTIC',
    }

    /**
     * Пол питомца
     */
    export enum ESex {
        FEMALE = 'FEMALE',
        MALE = 'MALE',
        HERMAPHRODITE = 'HERMAPHRODITE',
    }


}