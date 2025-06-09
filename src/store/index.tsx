import { configureStore } from '@reduxjs/toolkit'
import { baseAPI } from '../service/api'

export const Store = configureStore({
  reducer: {
    [baseAPI.reducerPath]: baseAPI.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseAPI.middleware)
})

export type AppDispatch = typeof Store.dispatch
export type RootReducer = ReturnType<typeof Store.getState>
