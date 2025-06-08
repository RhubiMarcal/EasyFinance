import { baseAPI } from '../api'

export const userAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    PostUsuario: builder.mutation<ResAPI, User>({
      query: (body) => ({
        url: '/user/add',
        method: 'POST',
        body
      })
    }),
    PostLogin: builder.mutation<ResAPI, UserLogin>({
      query: (body) => ({
        url: '/user/login',
        method: 'POST',
        body
      })
    }),
    GetMe: builder.query<ResUser, void>({
      query: () => ({
        url: '/user/me'
      })
    }),
    EditNome: builder.mutation<ResAPI, { newName: string; password: string }>({
      query: ({ newName, password }) => ({
        url: '/user/editNome',
        method: 'PUT',
        params: { newName, password }
      })
    }),
    EditSenha: builder.mutation<
      ResAPI,
      { currentPassword: string; newPassword: string }
    >({
      query: ({ currentPassword, newPassword }) => ({
        url: '/user/editSenha',
        method: 'PUT',
        params: { currentPassword, newPassword }
      })
    }),
    Logout: builder.mutation<ResAPI, void>({
      query: () => ({
        url: '/user/logout',
        method: 'POST'
      })
    }),
    GetHistorico: builder.query<Transaction[], void>({
      query: () => ({
        url: '/user/historico',
        method: 'GET'
      })
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
