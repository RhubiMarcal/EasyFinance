import { baseAPI } from '../api'

export const limitAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    GetLimits: builder.query<Limit[], void>({
      query: () => ({
        url: '/limit/getAll',
        method: 'GET'
      })
    }),
    PostLimit: builder.mutation<Limit, LimitReq>({
      query: (body) => ({
        url: '/limit/add',
        method: 'POST',
        body
      })
    }),
    PutLimit: builder.mutation<Limit, { id: number; data: LimitReq }>({
      query: ({ id, data }) => ({
        url: `/limit/edit/${id}`,
        method: 'PUT',
        body: data
      })
    }),
    DeleteLimit: builder.mutation<{ detail: string }, number>({
      query: (id) => ({
        url: `/limit/delete/${id}`,
        method: 'DELETE'
      })
    })
  })
})

export const {
  useDeleteLimitMutation,
  useGetLimitsQuery,
  usePostLimitMutation,
  usePutLimitMutation
} = limitAPI
