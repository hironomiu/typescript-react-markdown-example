import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

type State = {
  isAuthentication: boolean
}

const initialState: State = {
  isAuthentication: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isAuthentication = true
    },
    logout(state) {
      state.isAuthentication = false
    },
  },
})

export const { login, logout } = authSlice.actions
export const selectIsAuthentication = (state: RootState) =>
  state.auth.isAuthentication

export default authSlice.reducer
