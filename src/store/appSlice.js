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
    score: JSON.parse(localStorage.getItem("score")) || {
      wins: 0,
      ties: 0,
      lose: 0,
    },
  },
  reducers: {
    setModal: (state) => {
      state.modal = true;
    },
    closeModal: (state) => {
      state.modal = false;
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
    incWins: (state) => {
      state.score.wins = state.score.wins + 1;
      localStorage.setItem("score", JSON.stringify(state.score));
    },
    incTies: (state) => {
      state.score.ties = state.score.ties + 1;
      localStorage.setItem("score", JSON.stringify(state.score));
    },
    incLose: (state) => {
      state.score.lose = state.score.lose + 1;
      localStorage.setItem("score", JSON.stringify(state.score));
    },
  },
});

export const {
  setModal,
  setChance,
  setWinner,
  setInitialChance,
  closeModal,
  incWins,
  incTies,
  incLose,
} = appSlice.actions;

export default appSlice.reducer;
