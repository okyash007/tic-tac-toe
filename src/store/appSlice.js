import { createSlice } from "@reduxjs/toolkit";
import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";

const appSlice = createSlice({
  name: "app",
  initialState: {
    modal: false,
    chance: cross,
  },
  reducers: {
    setModal: (state, action) => {
      state.modal = !state.modal;
    },
    setChance: (state, action) => {
      state.chance = action.payload;
    },
  },
});

export const { setModal, setChance } = appSlice.actions;

export default appSlice.reducer;
