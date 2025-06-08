import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type limitState = {
  limits: Limit[]
  historico: Transaction[]
}

const initialState: limitState = {
  limits: [],
  historico: []
}

const limitSlice = createSlice({
  name: 'limit',
  initialState,
  reducers: {
    setLimits: (state, action: PayloadAction<Limit[]>) => {
      state.limits = [...action.payload].sort((a, b) => b.id - a.id)
    },
    addToLimits: (state, action: PayloadAction<Limit>) => {
      const index = state.limits.findIndex((l) => l.id === action.payload.id)
      if (index !== -1) {
        state.limits[index] = action.payload
      } else {
        state.limits.push(action.payload)
      }
      state.limits = [...state.limits].sort((a, b) => b.id - a.id)
    },
    deleteLimit: (state, action: PayloadAction<number>) => {
      state.limits = state.limits
        .filter((l) => l.id !== action.payload)
        .sort((a, b) => b.id - a.id)
    }
  }
})

export const { addToLimits, deleteLimit, setLimits } = limitSlice.actions

export default limitSlice.reducer
