import { baseAPI } from '../api'

export const userAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    PostUsuario: builder.mutation<ResAPI, User>({
      query: (body) => ({
        url: '/user/add',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Usuario']
    }),
    PostLogin: builder.mutation<ResAPI, UserLogin>({
      query: (body) => ({
        url: '/user/login',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Usuario']
    }),
    GetMe: builder.query<ResUser, void>({
      query: () => ({
        url: '/user/me'
      }),
      providesTags: ['Historico']
    }),
    EditNome: builder.mutation<ResAPI, { newName: string; password: string }>({
      query: ({ newName, password }) => ({
        url: '/user/editNome',
        method: 'PUT',
        params: { newName, password }
      }),
      invalidatesTags: ['Usuario']
    }),
    EditSenha: builder.mutation<
      ResAPI,
      { currentPassword: string; newPassword: string }
    >({
      query: ({ currentPassword, newPassword }) => ({
        url: '/user/editSenha',
        method: 'PUT',
        params: { currentPassword, newPassword }
      }),
      invalidatesTags: ['Usuario']
    }),
    Logout: builder.mutation<ResAPI, void>({
      query: () => ({
        url: '/user/logout',
        method: 'POST'
      }),
      invalidatesTags: ['Usuario']
    }),
    GetHistorico: builder.query<Transaction[], void>({
      query: () => ({
        url: '/user/historico',
        method: 'GET'
      }),
      providesTags: ['Historico']
    })
  })
})

export const {
  usePostUsuarioMutation,
  useEditNomeMutation,
  useEditSenhaMutation,
  useGetHistoricoQuery,
  useLogoutMutation,
  usePostLoginMutation,
  useGetMeQuery
} = userAPI
