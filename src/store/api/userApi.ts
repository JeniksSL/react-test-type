import basicInterceptor from "../../store/interseptors/basicInterceptor";
import {createApi} from "@reduxjs/toolkit/query/react";
import {IUser} from "../../types/IUser";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: basicInterceptor,
    endpoints: (build) => ({
        getCurrentUser:build.query<IUser, void>({
            query() {
                return {
                    url: 'auth-server/users',
                    credentials: 'include'
                }
            },
        })
    })
})
export const {
    useGetCurrentUserQuery
} = userApi