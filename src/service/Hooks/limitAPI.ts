import { baseAPI } from '../api'

export const limitAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    GetLimits: builder.query<Limit[], void>({
      query: () => ({
        url: '/limit/getAll',
        method: 'GET'
      }),
      providesTags: ['Limit']
    }),
    GetLimitById: builder.query<Limit, number>({
      query: (id) => ({
        url: `/limit/get/${id}`,
        method: 'GET'
      }),
      providesTags: ['Limit']
    }),
    PostLimit: builder.mutation<Limit, LimitReq>({
      query: (body) => ({
        url: '/limit/add',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Limit']
    }),
    PutLimit: builder.mutation<Limit, { id: number; data: LimitReq }>({
      query: ({ id, data }) => ({
        url: `/limit/edit/${id}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['Limit']
    }),
    DeleteLimit: builder.mutation<{ detail: string }, number>({
      query: (id) => ({
        url: `/limit/delete/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Limit']
    })
  })
})

export const {
  useDeleteLimitMutation,
  useGetLimitsQuery,
  usePostLimitMutation,
  usePutLimitMutation,
  useGetLimitByIdQuery
} = limitAPI
