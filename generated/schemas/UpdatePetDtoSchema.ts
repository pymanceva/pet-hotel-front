/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const IUpdatePetDtoSchema = {
    properties: {
        type: {
    type: 'Enum',
},
        name: {
    type: 'string',
    maxLength: 30,
    minLength: 1,
},
        breed: {
    type: 'string',
    maxLength: 30,
    minLength: 1,
},
        birthDate: {
    type: 'string',
},
        sex: {
    type: 'Enum',
},
        color: {
    type: 'string',
    maxLength: 30,
},
        sign: {
    type: 'string',
    maxLength: 150,
},
        isExhibition: {
    type: 'boolean',
},
        vetVisitDate: {
    type: 'string',
},
        vetVisitReason: {
    type: 'string',
    maxLength: 250,
},
        vaccine: {
    type: 'string',
    maxLength: 250,
},
        parasites: {
    type: 'string',
    maxLength: 250,
},
        fleaMite: {
    type: 'string',
    maxLength: 250,
},
        surgery: {
    type: 'string',
    maxLength: 250,
},
        pastDisease: {
    type: 'string',
    maxLength: 500,
},
        healthCharacteristic: {
    type: 'string',
    maxLength: 500,
},
        urineAnalysis: {
    type: 'string',
    maxLength: 250,
},
        allergy: {
    type: 'boolean',
},
        allergyType: {
    type: 'string',
    maxLength: 250,
},
        chronicDisease: {
    type: 'boolean',
},
        chronicDiseaseType: {
    type: 'string',
    maxLength: 500,
},
        heatDate: {
    type: 'string',
},
        vetData: {
    type: 'string',
    maxLength: 500,
},
        stayWithoutMaster: {
    type: 'string',
    maxLength: 500,
},
        stayAlone: {
    type: 'string',
    maxLength: 250,
},
        specialCare: {
    type: 'string',
    maxLength: 500,
},
        barkHowl: {
    type: 'string',
    maxLength: 250,
},
        furnitureDamage: {
    type: 'string',
    maxLength: 250,
},
        foodFromTable: {
    type: 'string',
    maxLength: 250,
},
        defecateAtHome: {
    type: 'string',
    maxLength: 250,
},
        markAtHome: {
    type: 'string',
    maxLength: 250,
},
        newPeople: {
    type: 'string',
    maxLength: 500,
},
        isBitePeople: {
    type: 'boolean',
},
        reasonOfBite: {
    type: 'string',
    maxLength: 250,
},
        playWithDogs: {
    type: 'string',
    maxLength: 500,
},
        isDogTraining: {
    type: 'boolean',
},
        trainingName: {
    type: 'string',
    maxLength: 500,
},
        like: {
    type: 'string',
    maxLength: 500,
},
        notLike: {
    type: 'string',
    maxLength: 500,
},
        toys: {
    type: 'string',
    maxLength: 500,
},
        badHabit: {
    type: 'string',
    maxLength: 250,
},
        walking: {
    type: 'string',
    maxLength: 250,
},
        morningWalking: {
    type: 'string',
    maxLength: 150,
},
        dayWalking: {
    type: 'string',
    maxLength: 150,
},
        eveningWalking: {
    type: 'string',
    maxLength: 150,
},
        feedingQuantity: {
    type: 'number',
    format: 'int32',
},
        feedType: {
    type: 'string',
    maxLength: 250,
},
        feedName: {
    type: 'string',
    maxLength: 250,
},
        feedComposition: {
    type: 'string',
    maxLength: 250,
},
        feedingRate: {
    type: 'string',
    maxLength: 250,
},
        feedingPractice: {
    type: 'string',
    maxLength: 500,
},
        treat: {
    type: 'string',
    maxLength: 250,
},
        isMedicine: {
    type: 'boolean',
},
        medicineRegimen: {
    type: 'string',
    maxLength: 500,
},
        additionalData: {
    type: 'string',
    maxLength: 1000,
},
    },
};