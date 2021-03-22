import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button, Input } from "antd";
import {
  updateCurrentTransfer,
  currentTransfer,
} from "../../store/reducers/transfers";

const Step2 = (props) => {
  const transfer = useSelector(currentTransfer);
  const dispatch = useDispatch();

  const validateMessages = {
    required: "${label} is required!",
    types: {
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
    callDispatch({ ...transfer, walletTo: values.walletTo });
    props.next();
  };

  return (
    <div>
      <div>
        <div>
          <span className="work-area-card__subtitle">Source: </span>{" "}
          {transfer.walletFrom}
        </div>
      </div>

      <Form
        onSubmit={handleSubmit}
        onFinish={handleFinish}
        layout="vertical"
        size="large"
        validateMessages={validateMessages}
      >
        <Form.Item
          name={"walletTo"}
          label="Destination account hash"
          hasFeedback
          rules={[
            {
              min: 12,
              required: true,
            },
          ]}
        >
          <Input placeholder="Account hash" />
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
              Next ->
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default Step2;
