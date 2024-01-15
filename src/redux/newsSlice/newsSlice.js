import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentNews: null,
  loading: false,
  error: false
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    fetchNewsStart: (state) => {
      state.loading = true
    },
    fetchNewSuccess: (state,action) => {
      state.loading = false
      state.currentNews = action.payload
    }, 
    fetchNewFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const {fetchNewsStart, fetchNewSuccess, fetchNewFailure} = newsSlice.actions
export default newsSlice.reducer