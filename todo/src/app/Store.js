import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../Features/Todo'

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
})