import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button, InputNumber } from "antd";
import {
  updateCurrentTransfer,
  currentTransfer,
  loading,
} from "../../store/reducers/transfers";
import { user } from "../../store/reducers/users";
import LoadingSpinner from "../loadingSpinner";

const Step3 = (props) => {
  const transfer = useSelector(currentTransfer);
  const currentUser = useSelector(user);
  const transferLoading = useSelector(loading);
  const dispatch = useDispatch();

  const validateMessages = {
    required: "${label} is required!",
    type: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    min: "${label} must be at least ${min} characters long ",
    number: {
      min: "${label} must be between ${min} and ${max}",
    },
  };

  const callDispatch = (payload) => {
    dispatch(updateCurrentTransfer(payload));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFinish = (values) => {
    callDispatch({
      ...transfer,
      amount: values.amount,
      executedBy: currentUser._id,
    });
    props.next();
  };

  return (
    <div>
      {!transferLoading && (
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
          </div>

          <Form
            onSubmit={handleSubmit}
            onFinish={handleFinish}
            layout="horizontal"
            size="large"
            validateMessages={validateMessages}
          >
            <Form.Item
              name={"amount"}
              label="Amount"
              rules={[
                {
                  required: true,
                  type: "number",
                  message: "Amount must be a valid number",
                },
              ]}
            >
              <InputNumber />
            </Form.Item>

            <div className="d-flex space-around">
              <Form.Item>
                <Button
                  type="primary"
                  onClick={() => props.prev()}
                  className="button"
                >
                  {"<- Prev"}{" "}
                </Button>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="button">
                  {"Next ->"}
                </Button>
              </Form.Item>
            </div>
          </Form>
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

export default Step3;
