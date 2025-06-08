import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type userState = {
  nome: string
  email: string
}

const initialState: userState = {
  nome: '',
  email: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.nome = action.payload
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    }
  }
})

export const { setName, setEmail } = userSlice.actions
export default userSlice.reducer
