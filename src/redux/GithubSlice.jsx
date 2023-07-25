import { createSlice } from "@reduxjs/toolkit";

export const githubSlice = createSlice({
  name: "github",
  initialState: {
    users: [],
    request: "",
    user: {},
    repos: [],
    loading: false,
  },
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    clearUsers: (state) => {
      state.users = [];
    },
    getUser: (state, action) => {
      state.user = action.payload;
    },
    getRequests: (state, action) => {
      state.request = action.payload;
    },
    getRepos: (state, action) => {
      state.repos = action.payload;
    },
  },
});

export const {
  getUsers,
  getRequests,
  setLoading,
  clearUsers,
  getUser,
  getRepos,
} = githubSlice.actions;

export default githubSlice.reducer;
