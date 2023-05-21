import { configureStore } from '@reduxjs/toolkit'
import filesReducer from '../reducers/filesReducer'

export const store = configureStore({
  reducer: {
    files: filesReducer
  }
})