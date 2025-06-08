import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type categoryState = {
  categorys: Category[]
}

const initialState: categoryState = {
  categorys: []
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategorys: (state, action: PayloadAction<Category[]>) => {
      state.categorys = action.payload
    },
    addToCategory: (state, action: PayloadAction<Category>) => {
      state.categorys.push(action.payload)
    }
  }
})

export const { addToCategory, setCategorys } = categorySlice.actions
export default categorySlice.reducer
