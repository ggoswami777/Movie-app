import { configureStore } from '@reduxjs/toolkit'
import movieoReducer from './movieoslice'

export default configureStore({
  reducer: {
    movieData: movieoReducer
  },
})