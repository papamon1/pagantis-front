import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import {
  updateTransfersMessage,
  currentTransfer,
  loading,
  createTransfer,
  message,
} from "../../store/reducers/transfers";
import { selectedUser } from "../../store/reducers/users";
import { listWallets } from "../../store/reducers/wallets";
import LoadingSpinner from "../loadingSpinner";

const Step4 = (props) => {
  const transfer = useSelector(currentTransfer);
  const transferMessage = useSelector(message);
  const currentUser = useSelector(selectedUser);
  const transferLoading = useSelector(loading);
  const dispatch = useDispatch();

  const callCreateTransfer = (payload) => {
    dispatch(createTransfer(payload));
  };

  const callListWallets = () => {
    dispatch(listWallets(currentUser));
  };

  const callUpdateTransferMessage = () => {
    dispatch(updateTransfersMessage(null));
  };

  const handleClose = () => {
    callListWallets();
    callUpdateTransferMessage();
    props.closeModal();
  };

  const handleFinish = (values) => {
    callCreateTransfer(transfer);

    // props.next()
  };

  return (
    <div>
      {!transferLoading && !transferMessage && (
        <div>
          <div style={{ marginBottom: "16px" }}>
            <div>
              <span className="work-area-card__subtitle">Source: </span>{" "}
              {transfer.walletFrom}
            </div>
            <div>
              <span className="work-area-card__subtitle">Destination: </span>{" "}
              {transfer.walletTo}
            </div>
            <div>
              <span className="work-area-card__subtitle">Amount: </span>{" "}
              {transfer.amount}
            </div>
            <div className="transfers-modal__box transfers-modal__box--info">
              PLEASE, CHECK THE INFO OF THE TRANSFER. GO BACK IF YOU NEED TO
              CHANGE ANYTHING AND ONCE YOU ARE READY, CLICK ON PROCEED
            </div>
          </div>

          <div>
            <div className="d-flex space-around">
              <Button
                type="primary"
                onClick={() => props.prev()}
                className="ant-btn-lg button"
              >
                {"<- Prev"}{" "}
              </Button>
              <Button
                type="primary"
                onClick={() => handleFinish()}
                className="ant-btn-lg button"
              >
                Proceed
              </Button>
            </div>
          </div>
        </div>
      )}

      {!transferLoading && transferMessage && (
        <div>
          <div style={{ marginBottom: "16px" }}>
            <div
              className={`transfers-modal__box ${
                transferMessage.type === "error"
                  ? "transfers-modal__box--error"
                  : "transfers-modal__box--success"
              }`}
            >
              {transferMessage.message}
            </div>
          </div>

          <div>
            <div className="d-flex space-around">
              <Button
                type="primary"
                onClick={() => handleClose()}
                className="ant-btn-lg button"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {transferLoading && (
        <div style={{ marginTop: "24px" }}>
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};

export default Step4;
