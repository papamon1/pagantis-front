import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const transfers = createSlice({
  name: "transfers",
  initialState: {
    loading: false,
    currentTransfer: {
      walletFrom: null,
      walletTo: null,
      amount: null,
      executedBy: null,
      concept: null,
    },
    transfersList: null,
    message: null,
  },
  reducers: {
    updateCurrentTransfer: (state, action) => {
      state.currentTransfer = action.payload;
    },

    updateTransfersList: (state, action) => {
      state.transfersList = action.payload.data;
    },

    updateTransfersMessage: (state, action) => {
      state.message = action.payload;
    },

    updateLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { updateCurrentTransfer } = transfers.actions;
export const { updateWalletList } = transfers.actions;
export const { updateLoading } = transfers.actions;
export const { updateTransfersMessage } = transfers.actions;
export const { updateTransfersList } = transfers.actions;

export const transfersList = (state) => state.transfers.transfersList;
export const currentTransfer = (state) => state.transfers.currentTransfer;
export const loading = (state) => state.transfers.loading;
export const message = (state) => state.transfers.message;

export const listWallets = (payload) => async (dispatch) => {
  dispatch(updateLoading(true));

  axios
    .get(`${process.env.API_ENDPOINT}/api/v1/transfers/owner/${payload}`)
    .then((res) => {
      dispatch(updateWalletList(res.data));
      dispatch(updateLoading(false));
    });
};

export const createTransfer = (currentTransfer) => async (dispatch) => {
  dispatch(updateLoading(true));

  axios
    .post(`${process.env.API_ENDPOINT}/api/v1/transfers`, currentTransfer)
    .then((res) => {
      dispatch(
        updateCurrentTransfer({
          walletFrom: null,
          walletTo: null,
          amount: null,
          executedBy: null,
          concept: null,
        })
      );
      console.log(res.data);
      dispatch(
        updateTransfersMessage(
          res.data.url
            ? {
                type: "success",
                message: `Transfer successfully made!! ${res.data.message}. Get it here: ${res.data.url}`,
              }
            : {
                type: "success",
                message: "Transfer successfully made!",
              }
        )
      );
      dispatch(updateLoading(false));
    })
    .catch((err) => {
      dispatch(
        updateTransfersMessage({
          type: "error",
          message: err.response.data.message,
        })
      );
      dispatch(updateLoading(false));
    });
};

export const listTransfers = (payload) => async (dispatch) => {
  dispatch(updateLoading(true));

  axios
    .get(`${process.env.API_ENDPOINT}/api/v1/transfers/transferFrom/${payload}`)
    .then((res) => {
      dispatch(updateTransfersList(res.data));
      dispatch(updateLoading(false));
    })
    .catch(() => {
      dispatch(updateTransfersList({ data: null }));
      dispatch(updateLoading(false));
    });
};

export default transfers.reducer;
