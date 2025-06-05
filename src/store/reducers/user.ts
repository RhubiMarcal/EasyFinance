import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type userState = {
  nome: string
  email: string
  transactions: Transaction[]
  goals: Goal[]
  limits: Limit[]
}

const initialState: userState = {
  nome: '',
  email: '',
  goals: [],
  limits: [],
  transactions: []
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.nome = action.payload
    }
  }
})

export const { setName } = userSlice.actions
export default userSlice.reducer
