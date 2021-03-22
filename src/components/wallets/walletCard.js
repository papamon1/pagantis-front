import React, { useState, useEffect } from "react";
import { Col, Skeleton, Card, Avatar } from "antd";
import { formatFromNow } from "../../utils";
import TransfersModal from "../transfers/transfersModal";
import HistoryModal from "../transfers/historyModal";

const WalletCard = (props) => {
  const { Meta } = Card;

  const [modalOpen, setModalOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);

  const toggleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  const toggleHistoryOpen = () => {
    setHistoryOpen(!historyOpen);
  };

  useEffect(() => {
    setModalOpen(false);
  }, []);

  const getDescription = () => {
    return (
      <div>
        <div>
          <span className="work-area-card__subtitle">ID: </span>{" "}
          {props.data._id}
        </div>
        <div>
          <span className="work-area-card__subtitle">Last update: </span>{" "}
          {formatFromNow(props.data.updatedAt)}
        </div>
        <div style={{ marginTop: 8 }}>
          <span className="work-area-card__subtitle">Balance: </span>
          <span className="work-area-card__balance">
            {" "}
            {props.data.balance} PCoins{" "}
          </span>
        </div>
      </div>
    );
  };

  return (
    <Col span={12} lg={8} xl={8} md={12} xs={24}>
      <Card
        actions={[
          <div onClick={toggleModalOpen}>Transfer money</div>,
          <div onClick={toggleHistoryOpen}>See history</div>,
        ]}
        className="work-area-card work-area-card--wallet"
      >
        <Skeleton avatar active loading={false}>
          <Meta
            avatar={<Avatar src="http://i.imgur.com/KnTauPY.png" />}
            title={
              <div className="work-area-card__title">{props.data.name}</div>
            }
            description={getDescription()}
          />
        </Skeleton>
      </Card>
      <TransfersModal
        visible={modalOpen}
        closeModal={toggleModalOpen}
        walletFrom={props.data}
      />
      <HistoryModal
        visible={historyOpen}
        closeModal={toggleHistoryOpen}
        walletFrom={props.data}
      />
    </Col>
  );
};

export default WalletCard;
