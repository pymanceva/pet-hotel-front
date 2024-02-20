/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const IOwnerShortDtoSchema = {
    properties: {
        name: {
    type: 'string',
    maxLength: 30,
    minLength: 1,
},
        rating: {
    type: 'number',
    format: 'int32',
},
    },
};