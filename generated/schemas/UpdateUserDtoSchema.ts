/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const IUpdateUserDtoSchema = {
    properties: {
        lastName: {
    type: 'string',
    maxLength: 30,
    minLength: 2,
},
        firstName: {
    type: 'string',
    maxLength: 15,
    minLength: 2,
},
        middleName: {
    type: 'string',
    maxLength: 15,
    minLength: 2,
},
        password: {
    type: 'string',
    maxLength: 10,
    minLength: 5,
},
        email: {
    type: 'string',
    maxLength: 254,
    minLength: 6,
},
        role: {
    type: 'Enum',
},
    },
};