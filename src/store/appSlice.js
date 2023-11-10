import { createSlice } from "@reduxjs/toolkit";
import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";

const appSlice = createSlice({
  name: "app",
  initialState: {
    modal: false,
    chance: null,
    initialChance: null,
    winner: null,
  },
  reducers: {
    setModal: (state) => {
      state.modal = true;
    },
    setChance: (state, action) => {
      state.chance = action.payload;
    },
    setInitialChance: (state, action) => {
      state.initialChance = action.payload;
    },
    setWinner: (state, action) => {
      state.winner = action.payload;
    },
  },
});

export const { setModal, setChance, setWinner, setInitialChance } =
  appSlice.actions;

export default appSlice.reducer;
