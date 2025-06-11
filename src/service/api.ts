import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseAPI = createApi({
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://easyfinanceapi-backend-production.up.railway.app/',
    baseUrl: 'http://127.0.0.1:8000/',
    credentials: 'include'
  }),
  tagTypes: ['Historico', 'Categoria', 'Usuario', 'Goal', 'Limit'],
  endpoints: () => ({})
})
