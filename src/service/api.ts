import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://easyfinanceapi-backend-production.up.railway.app',
    credentials: 'include'
  }),
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
    }),
    GetCategorys: builder.query<Category[], void>({
      query: () => ({
        url: '/category/getAll',
        method: 'GET'
      })
    }),
    PostCategory: builder.mutation<Category, CategoryReq>({
      query: (body) => ({
        url: '/category/add',
        method: 'POST',
        body
      })
    }),
    PostTransaction: builder.mutation<Transaction, TransactionReq>({
      query: (body) => ({
        url: '/transaction/add',
        method: 'POST',
        body
      })
    }),
    PutTransaction: builder.mutation<
      Transaction,
      { id: number; data: TransactionReq }
    >({
      query: ({ id, data }) => ({
        url: `/transaction/edit/${id}`,
        method: 'PUT',
        body: data
      })
    }),
    DeleteTransaction: builder.mutation<{ detail: string }, number>({
      query: (id) => ({
        url: `/transaction/delete/${id}`,
        method: 'DELETE'
      })
    })
  })
})

export const {
  usePostUsuarioMutation,
  usePostLoginMutation,
  useGetMeQuery,
  useEditNomeMutation,
  useEditSenhaMutation,
  useLogoutMutation,
  useGetHistoricoQuery,
  useGetCategorysQuery,
  usePostCategoryMutation,
  usePostTransactionMutation,
  usePutTransactionMutation,
  useDeleteTransactionMutation
} = api
export default api
