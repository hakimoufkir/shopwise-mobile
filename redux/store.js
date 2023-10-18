import { configureStore } from '@reduxjs/toolkit'
import userRedux from './slices/user'
export const store = configureStore({
  reducer: {
    userRedux
  },
})