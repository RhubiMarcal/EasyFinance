import { baseAPI } from '../api'

export const transactionAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
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
  useDeleteTransactionMutation,
  usePostTransactionMutation,
  usePutTransactionMutation
} = transactionAPI
