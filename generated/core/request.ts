/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { ApiError } from './ApiError';
import type { ApiRequestOptions } from './ApiRequestOptions';
import type { ApiResult } from './ApiResult';
import { OpenAPI } from './OpenAPI';
import { EHTTP_STATUS_CODES, EHTTP_STATUS_NAME } from './HttpStatusCode';

function isDefined<T>(value: T | null | undefined): value is Exclude<T, null | undefined> {
    return value !== undefined && value !== null;
}

function isString(value: any): value is string {
    return typeof value === 'string';
}

function isStringWithValue(value: any): value is string {
    return isString(value) && value !== '';
}

function isBlob(value: any): value is Blob {
    return value instanceof Blob;
}

function isSuccess(status: number): boolean {
    return status >= 200 && status < 300;
}

function getQueryString(params: Record<string, any>): string {
    const qs: string[] = [];
    Object.keys(params).forEach(key => {
        const value = params[key];
        if (isDefined(value)) {
            if (Array.isArray(value)) {
                value.forEach(value => {
                    qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
                });
            } else {
                qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
            }
        }
    });
    if (qs.length > 0) {
        return `?${qs.join('&')}`;
    }
    return '';
}

function getUrl(options: ApiRequestOptions): string {
    const path = options.path.replace(/[:]/g, '_');
    const url = `${OpenAPI.BASE}${path}`;

    if (options.query) {
        return `${url}${getQueryString(options.query)}`;
    }
    return url;
}

function getFormData(params: Record<string, any>): FormData {
    const formData = new FormData();
    Object.keys(params).forEach(key => {
        const value = params[key];
        if (isDefined(value)) {
            formData.append(key, value);
        }
    });
    return formData;
}

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;

async function resolve<T>(options: ApiRequestOptions, resolver?: T | Resolver<T>): Promise<T | undefined> {
    if (typeof resolver === 'function') {
        return (resolver as Resolver<T>)(options);
    }
    return resolver;
}

async function getHeaders(options: ApiRequestOptions): Promise<Headers> {
    const token = await resolve(options, OpenAPI.TOKEN);
    const username = await resolve(options, OpenAPI.USERNAME);
    const password = await resolve(options, OpenAPI.PASSWORD);
    const defaultHeaders = await resolve(options, OpenAPI.HEADERS);

    const headers = new Headers({
        Accept: 'application/json',
        ...defaultHeaders,
        ...options.headers,
    });

    if (isStringWithValue(token)) {
        headers.append('Authorization', `Bearer ${token}`);
    }

    if (isStringWithValue(username) && isStringWithValue(password)) {
        const credentials = btoa(`${username}:${password}`);
        headers.append('Authorization', `Basic ${credentials}`);
    }

    if (options.body) {
        if (options.mediaType) {
            headers.append('Content-Type', options.mediaType);
        } else if (isBlob(options.body)) {
            headers.append('Content-Type', options.body.type || 'application/octet-stream');
        } else if (isString(options.body)) {
            headers.append('Content-Type', 'text/plain');
        } else {
            headers.append('Content-Type', 'application/json');
        }
    }
    return headers;
}

function getRequestBody(options: ApiRequestOptions): any {
    if (options.formData) {
        return getFormData(options.formData);
    }
    if (options.body) {
        if (options.mediaType?.includes('/json')) {
            return JSON.stringify(options.body)
        } else if (isString(options.body) || isBlob(options.body)) {
            return options.body;
        } else {
            return JSON.stringify(options.body);
        }
    }
    return undefined;
}

async function sendRequest(options: ApiRequestOptions, url: string): Promise<XMLHttpRequest> {

    const xhr = new XMLHttpRequest();
    xhr.open(options.method, url, true);
    xhr.withCredentials = OpenAPI.WITH_CREDENTIALS;

    const headers = await getHeaders(options);
    headers.forEach((value: string, key: string) => {
        xhr.setRequestHeader(key, value);
    });

    return new Promise<XMLHttpRequest>((resolve) => {
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                resolve(xhr);
            }
        };
        xhr.send(getRequestBody(options));

    });
}

function getResponseHeader(xhr: XMLHttpRequest, responseHeader?: string): string | null {
    if (responseHeader) {
        const content = xhr.getResponseHeader(responseHeader);
        if (isString(content)) {
            return content;
        }
    }
    return null;
}

function getResponseBody(xhr: XMLHttpRequest): any {
    try {
        const contentType = xhr.getResponseHeader('Content-Type');
        if (contentType) {
            const isJSON = contentType.toLowerCase().startsWith('application/json');
            if (isJSON) {
                return JSON.parse(xhr.responseText);
            } else {
                return xhr.responseText;
            }
        }
    } catch (error) {
        console.error(error);
    }
    return null;
}

function catchErrors(options: ApiRequestOptions, result: ApiResult): void {
    const errors: Record<string, string> = {
        [EHTTP_STATUS_CODES.BAD_GATEWAY]: EHTTP_STATUS_NAME.BAD_GATEWAY,
        [EHTTP_STATUS_CODES.BAD_REQUEST]: EHTTP_STATUS_NAME.BAD_REQUEST,
        [EHTTP_STATUS_CODES.FORBIDDEN]: EHTTP_STATUS_NAME.FORBIDDEN,
        [EHTTP_STATUS_CODES.INTERNAL_SERVER_ERROR]: EHTTP_STATUS_NAME.INTERNAL_SERVER_ERROR,
        [EHTTP_STATUS_CODES.NOT_FOUND]: EHTTP_STATUS_NAME.NOT_FOUND,
        [EHTTP_STATUS_CODES.SERVICE_UNAVAILABLE]: EHTTP_STATUS_NAME.SERVICE_UNAVAILABLE,
        [EHTTP_STATUS_CODES.UNAUTHORIZED]: EHTTP_STATUS_NAME.UNAUTHORIZED,
        ...options.errors,
    }

    const error = errors[result.status];
    if (error) {
        throw new ApiError(result, error);
    }

    if (!result.ok) {
        throw new ApiError(result, 'Generic Error');
    }
}

/**
 * Request using XHR client
 * @param options The request options from the the service
 * @returns ApiResult
 * @throws ApiError
 */
export async function request<T>(options: ApiRequestOptions): Promise<T> {
    return new Promise(async (resolve, reject) => {
        try {
            const url = getUrl(options);
            const response = await sendRequest(options, url);
            const responseBody = getResponseBody(response);
            const responseHeader = getResponseHeader(response, options.responseHeader);

            const result: ApiResult = {
                url,
                ok: isSuccess(response.status),
                status: response.status,
                statusText: response.statusText,
                body: responseHeader || responseBody,
            };

            catchErrors(options, result);
            resolve(result.body);
        } catch (error) {
            reject(error);
        }
    });
}
