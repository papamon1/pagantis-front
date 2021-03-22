import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { doLogin, user } from "../store/reducers/users";

const LoginForm = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const storedUser = useSelector(user);
  useEffect(() => {
    if (storedUser) history.push("/work");
  }, [storedUser]);

  const callDispatch = (values) => {
    dispatch(doLogin(values));
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      min: "${label} must be between ${min} and ${max}",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFinish = (values) => {
    callDispatch(values);
  };

  return (
    <div className="login__form">
      <Form
        onSubmit={handleSubmit}
        onFinish={handleFinish}
        layout="vertical"
        size="large"
        validateMessages={validateMessages}
      >
        <Form.Item
          name={"name"}
          label="Email address"
          hasFeedback
          rules={[
            {
              type: "email",
              required: true,
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name={"password"}
          label="Password"
          hasFeedback
          rules={[
            {
              required: true,
              min: 4,
            },
          ]}
        >
          <Input type="password" placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="button button--full-width"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
