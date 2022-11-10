import type {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError
} from '@reduxjs/toolkit/query'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { RootState } from '../app/store'
import { unauthenticate } from '../features/authentication/authSlice'

const API_URL = process.env.REACT_APP_API_URL ?? 'http://localhost:8000'

const baseQuery = fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
        const { accessToken } = (getState() as RootState).auth;
        if (accessToken) {
            headers.set('Authorization', `Bearer ${accessToken}`);
        }
        return headers;
    },
})

const baseQueryInterceptor: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    // TODO: Refresh access token
    let result = await baseQuery(args, api, extraOptions)
    if (result.error && result.error.status === 401) {
        api.dispatch(unauthenticate())
    }
    return result
}

export default baseQueryInterceptor