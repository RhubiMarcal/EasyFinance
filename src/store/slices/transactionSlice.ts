import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TransactionState = {
  transactions: Transaction[]
}

const initialState: TransactionState = {
  transactions: []
}

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
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
    }
  }
})

export const { setHistorico, addToHistorico, deleteTransaction } =
  transactionSlice.actions

export default transactionSlice.reducer
