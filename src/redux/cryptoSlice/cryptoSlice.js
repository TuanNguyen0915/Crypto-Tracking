import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  currentCryptos: null,
  loading: false,
  error: false
}

const cryptoSlice = createSlice({
  name: 'cryptos',
  initialState,
  reducers: {
    fetchCryptoStart: (state) => {
      state.loading = true
    },
    fetchCryptoSuccess: (state, action) => {
      state.currentCryptos = action.payload
      state.loading = false
      state.error = false
    },
    fetchCryptoFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const {fetchCryptoStart, fetchCryptoSuccess, fetchCryptoFailure} = cryptoSlice.actions
export default cryptoSlice.reducer