import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Skeleton, Card, Avatar } from "antd";
import { formatFromNow } from "../../utils";
import { updateSelectedUser, selectedUser } from "../../store/reducers/users";

const UserCard = (props) => {
  const { Meta } = Card;

  const userSelected = useSelector(selectedUser);
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();

  //The first time we select the user id

  useEffect(() => {
    setUserId(props.data._id);
  }, [userSelected]);

  const handleSelectUser = () => {
    dispatch(updateSelectedUser(userSelected === userId ? null : userId));
  };

  const getDescription = () => {
    return (
      <div>
        <div>
          <span className="work-area-card__subtitle">Email address: </span>{" "}
          {props.data.email}
        </div>
        <div>
          <span className="work-area-card__subtitle">Joined: </span>{" "}
          {formatFromNow(props.data.createdAt)}
        </div>
        <div>
          <span className="work-area-card__subtitle">Last update: </span>{" "}
          {formatFromNow(props.data.updatedAt)}
        </div>
        <div>
          <span className="work-area-card__subtitle">Wallets: </span>{" "}
          {props.data.wallets.length}
        </div>
      </div>
    );
  };

  return (
    <Col span={12} lg={8} xl={8} md={12} xs={24}>
      <Card
        onClick={handleSelectUser}
        className={`work-area-card work-area-card--clickable work-area-card--user ${
          userSelected === userId ? "work-area-card--selected" : ""
        } ${
          userSelected !== null && userSelected !== userId
            ? "work-area-card--to-hide"
            : ""
        }`}
      >
        <Skeleton avatar active loading={false}>
          <Meta
            avatar={<Avatar src={props.data.avatar} size={64} />}
            title={
              <div className="work-area-card__title">
                {props.data.firstName} {props.data.lastName}{" "}
              </div>
            }
            description={getDescription()}
          />
        </Skeleton>
      </Card>
    </Col>
  );
};

export default UserCard;
