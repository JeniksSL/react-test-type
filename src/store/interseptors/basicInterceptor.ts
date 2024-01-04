import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { Mutex } from 'async-mutex'
//import { AuthResponse } from '../../types/responses/AuthResponse'
//import { removeUser } from '../slices/user.service'
import { LocalStorage } from '../../helpers/localStorage/localStorage'

const baseUrl = `${process.env.REACT_APP_SERVER_ENDPOINT}`

const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: 'include',
  prepareHeaders: (headers) => {
    const token = LocalStorage.getAccessToken()
    if (token) {
      //headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },
})

const basicInterceptor: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)
  if (result.error?.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        const refreshResult = await baseQuery(
          { credentials: 'include', url: 'refresh-token', method: 'POST' },
          api,
          extraOptions,
        )

       /* if (refreshResult.data) {
          const data = refreshResult.data as AuthResponse
          LocalStorage.setAccessToken(data.tokens.accessToken)
          result = await baseQuery(args, api, extraOptions)
        } else {
          // api.dispatch(userApi.endpoints.logoutUser.initiate());
          LocalStorage.removeAccessToken()
          api.dispatch(removeUser())
        }*/
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }
  return result
}

export default basicInterceptor
