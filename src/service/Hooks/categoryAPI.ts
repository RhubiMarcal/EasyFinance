import { baseAPI } from '../api'

export const categoryAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
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
    })
  })
})

export const { useGetCategorysQuery, usePostCategoryMutation } = categoryAPI
