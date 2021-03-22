import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button, Input } from "antd";
import {
  updateCurrentTransfer,
  currentTransfer,
} from "../../store/reducers/transfers";

const Step1 = (props) => {
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
    callDispatch({ ...transfer, walletFrom: values.walletFrom });
    props.next();
  };

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        onFinish={handleFinish}
        layout="vertical"
        size="large"
        validateMessages={validateMessages}
        initialValues={{
          walletFrom: props.walletFrom || null,
        }}
      >
        <Form.Item
          name={"walletFrom"}
          label="Source account hash"
          hasFeedback
          rules={[
            {
              min: 12,
              required: true,
            },
          ]}
        >
          <Input
            placeholder="Account hash"
            defaultValue={props.walletFrom || ""}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="button">
            Next ->
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Step1;
