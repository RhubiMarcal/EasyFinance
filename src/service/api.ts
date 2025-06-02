import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://easyfinanceapi-backend-production.up.railway.app',
    credentials: 'include'
  }),
  endpoints: (builder) => ({
    PostUsuario: builder.mutation<ResUser, User>({
      query: (body) => ({
        url: '/user/add',
        method: 'POST',
        body,
        credentials: 'include'
      })
    }),
    PostLogin: builder.mutation<ResUser, UserLogin>({
      query: (body) => ({
        url: '/user/login',
        method: 'POST',
        body,
        credentials: 'include'
      })
    })
  })
})

export const { usePostUsuarioMutation, usePostLoginMutation } = api
export default api
