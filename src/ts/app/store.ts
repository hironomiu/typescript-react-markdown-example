import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feature/counter/counterSlice'
import authReducer from '../feature/auth/authSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
