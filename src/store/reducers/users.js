import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const users = createSlice({
  name: "users",

  initialState: {
    loading: false,
    user: null,
    selectedUser: null,
    impersonatedUser: null,
    userList: null,
    userError: null,
  },
  reducers: {
    updateResults: (state, action) => {
      state.user = action.payload;
    },

    updateUserList: (state, action) => {
      state.userList = action.payload.data;
    },

    updateLoading: (state, action) => {
      state.loading = action.payload;
    },

    updateSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },

    updateUserError: (state, action) => {
      state.userError = action.payload;
    },
  },
});

export const { updateResults } = users.actions;
export const { updateUserList } = users.actions;
export const { updateLoading } = users.actions;
export const { selectUser } = users.actions;
export const { updateSelectedUser } = users.actions;
export const { updateUserError } = users.actions;

export const user = (state) => state.users.user;
export const userError = (state) => state.users.userError;
export const wallets = (state) => state.users.user.wallets;
export const userList = (state) => state.users.userList;
export const loading = (state) => state.users.loading;
export const selectedUser = (state) => state.users.selectedUser;
export const impersonatedUser = (state) => state.users.impersonatedUser;

export const doLogin = (payload) => async (dispatch) => {
  dispatch(updateLoading(true));

  axios
    .post(`${process.env.API_ENDPOINT}/api/v1/users`, {
      email: payload.email,
      password: payload.password,
    })
    .then((res) => {
      localStorage.setItem("pagantisUser", JSON.stringify(res.data.data[0]));
      dispatch(updateResults(res.data.data[0]));
    })
    .catch((err) => {
      dispatch(
        updateUserError({
          type: "error",
          message: err.response.data.message,
        })
      );
    });
};

export const doLogout = () => async (dispatch) => {
  dispatch(updateResults(null));
  localStorage.removeItem("pagantisUser");
};

export const listUsers = () => async (dispatch) => {
  dispatch(updateLoading(true));

  axios.get(`${process.env.API_ENDPOINT}/api/v1/users`).then((res) => {
    dispatch(updateUserList(res.data));
    dispatch(updateLoading(false));
  });
};

export const checkStoredUser = () => async (dispatch) => {
  dispatch(updateLoading(true));

  const storedUser = localStorage.getItem("pagantisUser");

  if (storedUser) {
    dispatch(updateResults(JSON.parse(storedUser)));
  }
};

export default users.reducer;
