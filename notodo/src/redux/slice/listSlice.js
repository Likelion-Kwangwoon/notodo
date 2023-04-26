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
      state.suc += 1
    },
    failList : (state, action) => {
      state.fail += 1;
    },
    uncheckList : (state, action) => {
      state.uncheck += 1;
    },
    resetList: (state) => {
      state.suc = 0
      state.fail = 0
      state.uncheck = 0
    }
  },
});

export const { setLength, sucList, failList, uncheckList, resetList } =
  listSlice.actions;


export default listSlice.reducer;