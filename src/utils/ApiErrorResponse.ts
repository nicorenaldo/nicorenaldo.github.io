export declare type RTKQueryError = {
    status: number;
    data: APIErrorResponse;
} | {
    status: 'FETCH_ERROR';
    error: string;
}

export interface APIErrorResponse {
    data: unknown;
    message: string;
    error: boolean;
}