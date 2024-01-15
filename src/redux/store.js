import { configureStore } from "@reduxjs/toolkit";
import cryptosReducer from './cryptoSlice/cryptoSlice'

const store = configureStore({
  reducer: {
    cryptos: cryptosReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export default store

