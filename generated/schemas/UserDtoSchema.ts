/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const IUserDtoSchema = {
    properties: {
        id: {
    type: 'number',
    format: 'int64',
},
        lastName: {
    type: 'string',
    maxLength: 30,
    minLength: 2,
},
        firstName: {
    type: 'string',
    isRequired: true,
    maxLength: 15,
    minLength: 2,
},
        middleName: {
    type: 'string',
    maxLength: 15,
    minLength: 2,
},
        email: {
    type: 'string',
    isRequired: true,
    maxLength: 254,
    minLength: 6,
},
        password: {
    type: 'string',
    maxLength: 10,
    minLength: 5,
},
        role: {
    type: 'Enum',
    isRequired: true,
},
        isActive: {
    type: 'boolean',
    isRequired: true,
},
    },
};