import { configureStore, createAction, createReducer, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import dateReducer from "./slice/dateSlice";
import listReducer from "./slice/listSlice"

export const logIn = createAction("LOGIN");
export const logOut = createAction("LOGOUT");

// const initialState = { token: "" };

const initialState = {
  token : "",
  expirationTime  : "",
}
const persistConfig = {
  key: "token",
  storage,
  whitelist: ["token", "date"],
};

const tokenReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(logIn, (state, action) => {
      state.token = action.payload
      state.expirationTime = new Date().getTime() + 30 * 60 * 1000;
    })
    .addCase(logOut, (state) => {
      state.token = ""
      state.expirationTime = ""
    })
})

const rootReducer = combineReducers({
  token: tokenReducer,
  date: dateReducer,
  list: listReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }),
});

export default store;

