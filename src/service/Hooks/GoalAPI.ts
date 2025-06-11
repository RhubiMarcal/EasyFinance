import { baseAPI } from '../api'

export const goalAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    GetGoals: builder.query<Goal[], void>({
      query: () => ({
        url: '/goal/getAll',
        method: 'GET'
      }),
      providesTags: ['Goal']
    }),
    PostGoal: builder.mutation<Goal, GoalReq>({
      query: (body) => ({
        url: '/goal/add',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Goal']
    }),
    PutGoal: builder.mutation<Goal, { id: number; data: GoalReqEdit }>({
      query: ({ id, data }) => ({
        url: `/goal/edit/${id}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['Goal']
    }),
    DeleteGoal: builder.mutation<{ detail: string }, number>({
      query: (id) => ({
        url: `/goal/delete/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Goal']
    }),
    GetGoalById: builder.query<Goal, number>({
      query: (id) => ({
        url: `/goal/get/${id}`,
        method: 'GET'
      }),
      providesTags: ['Goal']
    }),
    GetGoalHistorico: builder.query<Transaction[], number>({
      query: (id) => ({
        url: `/goal/${id}/historico`,
        method: 'GET'
      }),
      providesTags: ['Goal']
    })
  })
})

export const {
  useGetGoalsQuery,
  usePostGoalMutation,
  usePutGoalMutation,
  useDeleteGoalMutation,
  useGetGoalByIdQuery,
  useGetGoalHistoricoQuery
} = goalAPI
