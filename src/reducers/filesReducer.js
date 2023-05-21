import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {}

const filesReducer = createSlice({
  name: 'files',
  initialState: {},
  reducers: {
    ADD: (state, action) => {
      state[action.payload.id] = action.payload
    },
    RESET: (state, action) => {
      state = INITIAL_STATE
    },
  }
})

export const { ADD, RESET } = filesReducer.actions

export default filesReducer.reducer