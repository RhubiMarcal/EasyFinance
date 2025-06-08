import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type goalState = {
  goals: Goal[]
}

const initialState: goalState = {
  goals: []
}

const goalSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {
    setgoals: (state, action: PayloadAction<Goal[]>) => {
      state.goals = [...action.payload].sort((a, b) => b.id - a.id)
    },
    addTogoals: (state, action: PayloadAction<Goal>) => {
      const index = state.goals.findIndex((g) => g.id === action.payload.id)
      if (index !== -1) {
        state.goals[index] = action.payload
      } else {
        state.goals.push(action.payload)
      }
      state.goals = [...state.goals].sort((a, b) => b.id - a.id)
    },
    deletegoal: (state, action: PayloadAction<number>) => {
      state.goals = state.goals
        .filter((g) => g.id !== action.payload)
        .sort((a, b) => b.id - a.id)
    }
  }
})

export const { addTogoals, deletegoal, setgoals } = goalSlice.actions

export default goalSlice.reducer
