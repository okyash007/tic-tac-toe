import { createSlice } from "@reduxjs/toolkit";
import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";

const appSlice = createSlice({
  name: "app",
  initialState: {
    buttons: JSON.parse(localStorage.getItem("buttons")) || Array(9).fill(null),
    modal: false,
    loading: false,
    chance: JSON.parse(localStorage.getItem("initialChance")),
    initialChance: JSON.parse(localStorage.getItem("initialChance")),
    winner: null,
    score: JSON.parse(localStorage.getItem("score")) || {
      wins: 0,
      ties: 0,
      lose: 0,
    },
  },
  reducers: {
    setButtonsRedux: (state, action) => {
      state.buttons = action.payload;
      localStorage.setItem("buttons", JSON.stringify(state.buttons));
    },
    resetButtons: (state) => {
      state.buttons = Array(9).fill(null);
      localStorage.setItem("buttons", JSON.stringify(state.buttons));
    },
    setModal: (state, action) => {
      state.modal = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setChance: (state, action) => {
      state.chance = action.payload;
    },
    setInitialChance: (state, action) => {
      state.initialChance = action.payload;
      localStorage.setItem(
        "initialChance",
        JSON.stringify(state.initialChance)
      );
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
    resetScore: (state) => {
      state.score = {
        wins: 0,
        ties: 0,
        lose: 0,
      };
      localStorage.setItem("score", JSON.stringify(state.score));
    },
  },
});

export const {
  setButtonsRedux,
  setModal,
  setLoading,
  setChance,
  setWinner,
  setInitialChance,
  incWins,
  incTies,
  incLose,
  resetScore,
  resetButtons,
} = appSlice.actions;

export default appSlice.reducer;
