import { configureStore } from '@reduxjs/toolkit'
import thumbnailsReducer from '../features/thumbnails/thumbnailsSlice'

export const store = configureStore({
  reducer: {
    thumbnails: thumbnailsReducer,
  },
})
