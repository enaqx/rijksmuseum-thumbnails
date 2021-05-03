import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchThumbnails: any = createAsyncThunk(
  'thumbnails/fetchThumbnails',
  async () => {
    const response = await fetch(
      'https://www.rijksmuseum.nl/api/nl/collection?key=yW6uq3BV&involvedMaker=Rembrandt+van+Rijn',
    )

    const responseObject = await response.json()

    return responseObject.artObjects
  },
)

export const thumbnailsSlice = createSlice({
  name: 'thumbnails',
  initialState: {
    status: 'idle',
    thumbnails: [],
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchThumbnails.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchThumbnails.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.thumbnails = state.thumbnails.concat(action.payload)
    },
    [fetchThumbnails.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    },
  },
})

export const selectAllThumbnails = (state: any) => state.thumbnails.thumbnails

export default thumbnailsSlice.reducer
