import { configureStore } from "@reduxjs/toolkit";
import { githubSlice as githubReducer } from "./GithubSlice";
export const store = configureStore({
  reducer: {
    github: githubReducer.reducer,
  },
});
