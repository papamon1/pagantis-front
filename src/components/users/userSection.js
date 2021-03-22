import React from "react";
import { Row } from "antd";

import UserList from "./userList";

const UserSection = () => {
  return (
    <div className="work-area__wrapper">
      <Row justify="left">
        <h2 className="section-title">Registered Users</h2>
      </Row>

      <UserList />
    </div>
  );
};

export default UserSection;
