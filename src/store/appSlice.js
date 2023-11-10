import { createSlice } from "@reduxjs/toolkit";
import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";

const appSlice = createSlice({
  name: "app",
  initialState: {
    modal: false,
    chance: cross,
    winner: null,
  },
  reducers: {
    setModal: (state) => {
      state.modal = true;
    },
    setChance: (state, action) => {
      state.chance = action.payload;
    },
    setWinner: (state, action) => {
      state.winner = action.payload;
    },
  },
});

export const { setModal, setChance, setWinner } = appSlice.actions;

export default appSlice.reducer;
