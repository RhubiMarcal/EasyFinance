import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type userState = {
  nome: string
  email: string
  transactions: Transaction[]
  goals: Goal[]
  limits: Limit[]
  categorys: Category[]
}

const initialState: userState = {
  nome: '',
  email: '',
  goals: [],
  limits: [],
  transactions: [],
  categorys: []
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
    },
    setHistorico: (state, action: PayloadAction<Transaction[]>) => {
      state.transactions = [...action.payload].sort((a, b) =>
        b.date.localeCompare(a.date)
      )
    },
    addToHistorico: (state, action: PayloadAction<Transaction>) => {
      const index = state.transactions.findIndex(
        (t) => t.id === action.payload.id
      )

      if (index !== -1) {
        state.transactions[index] = action.payload
      } else {
        state.transactions.push(action.payload)
      }
      state.transactions = [...state.transactions].sort((a, b) =>
        b.date.localeCompare(a.date)
      )
    },
    deleteTransaction: (state, action: PayloadAction<number>) => {
      state.transactions = state.transactions
        .filter((t) => t.id !== action.payload)
        .sort((a, b) => b.date.localeCompare(a.date))
    },
    setGoals: (state, action: PayloadAction<Goal[]>) => {
      state.goals = action.payload
    },
    setLimits: (state, action: PayloadAction<Limit[]>) => {
      state.limits = action.payload
    },
    setCategorys: (state, action: PayloadAction<Category[]>) => {
      state.categorys = action.payload
    },
    addToCategory: (state, action: PayloadAction<Category>) => {
      state.categorys.push(action.payload)
    }
  }
})

export const {
  setName,
  setEmail,
  setGoals,
  setHistorico,
  addToHistorico,
  deleteTransaction,
  setLimits,
  setCategorys,
  addToCategory
} = userSlice.actions
export default userSlice.reducer
