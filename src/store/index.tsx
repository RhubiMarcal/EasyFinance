import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import transactionReducer from './slices/transactionSlice'
import goalReducer from './slices/goalSlice'
import limitReducer from './slices/limitSlice'
import categoryReducer from './slices/categorySlice'
import { baseAPI } from '../service/api'

export const Store = configureStore({
  reducer: {
    user: userReducer,
    transactions: transactionReducer,
    goals: goalReducer,
    limits: limitReducer,
    categories: categoryReducer,
    [baseAPI.reducerPath]: baseAPI.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseAPI.middleware)
})

export type AppDispatch = typeof Store.dispatch
export type RootReducer = ReturnType<typeof Store.getState>
