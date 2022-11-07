import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryInterceptor from '../utils/RtkQueryInterceptor';

export const tagTypes = [];

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryInterceptor,
    endpoints: () => ({}),
    tagTypes: tagTypes,
})

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({}),
})