import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cryptosReducer from './cryptoSlice/cryptoSlice'
import newsReducer from './newsSlice/newsSlice'
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const rootReducer = combineReducers({ cryptos: cryptosReducer, news: newsReducer })
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export const persistor = persistStore(store)

