import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  length: 0,
  suc: 0,
  fail: 0,
  uncheck: 0,
}

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setLength : (state, action) => {
      state.length = action.payload.length
    },
    sucList : (state, action) => {
      state.list = action.payload.length;
    },
    failList : (state, action) => {
      state.list = action.payload.length;
    },
    uncheckList : (state, action) => {
      state.list = action.payload.length;
    },
  },
});

export const { setLength, sucList, failList, uncheckList } = listSlice.actions;


export default listSlice.reducer;