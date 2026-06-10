import { configureStore } from '@reduxjs/toolkit'
import coursesReducer from './slices/coursesSlice'
import authReducer from './slices/authSlice'

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    auth: authReducer,
  },
})
