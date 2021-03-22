import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const wallets = createSlice({
  name: "wallets",

  // We will use the same user for our data and "auth"  (let's call it like that...)
  // With token authentication we would use it a bit different, but this will work
  // for what we want now

  initialState: {
    loading: false,
    walletList: null,
  },
  reducers: {
    updateWalletList: (state, action) => {
      state.walletList = action.payload.data;
    },

    updateLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { updateWalletList } = wallets.actions;
export const { updateLoading } = wallets.actions;

export const walletList = (state) => state.wallets.walletList;
export const loading = (state) => state.wallets.loading;

export const listWallets = (payload) => async (dispatch) => {
  dispatch(updateLoading(true));

  axios
    .get(`${process.env.API_ENDPOINT}/api/v1/wallets/owner/${payload}`)
    .then((res) => {
      dispatch(updateWalletList(res.data));
      dispatch(updateLoading(false));
    });
};

export default wallets.reducer;
