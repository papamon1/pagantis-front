import React, { useEffect } from "react";
import { Row } from "antd";

import UserCard from "./userCard";
import { useSelector, useDispatch } from "react-redux";
import { userList, listUsers, loading } from "../../store/reducers/users";
import LoadingSpinner from "../loadingSpinner";

const UserList = () => {
  const userUsers = useSelector(userList);
  const userLoading = useSelector(loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listUsers());
  }, []);

  const getUsers = () => {
    const list = [];
    if (userUsers) {
      userUsers.forEach((user, index) => {
        list.push(<UserCard data={user} key={`user_${index}`} />);
      });
    }
    return list;
  };

  return (
    <Row gutter={[32, 16]}>
      {userLoading && <LoadingSpinner />}
      {!userLoading && getUsers()}
    </Row>
  );
};

export default UserList;
