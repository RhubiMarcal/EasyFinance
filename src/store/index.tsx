import { configureStore } from '@reduxjs/toolkit'
import api from '../service/api'
import userReducer from './reducers/user'

export const Store = configureStore({
  reducer: {
    user: userReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type AppDispatch = typeof Store.dispatch
export type RootReducer = ReturnType<typeof Store.getState>
