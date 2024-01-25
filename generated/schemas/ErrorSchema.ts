/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const IErrorSchema = {
    properties: {
        errors: {
    type: 'array',
    contains: {
    type: 'string',
},
},
        message: {
    type: 'string',
},
        reason: {
    type: 'string',
},
        httpStatus: {
    type: 'Enum',
},
        timeStamp: {
    type: 'string',
    format: 'date-time',
},
    },
};