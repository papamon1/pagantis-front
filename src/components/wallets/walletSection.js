import React from "react";
import { useSelector } from "react-redux";
import { Row } from "antd";

import WalletList from "./walletList";
import { selectedUser } from "../../store/reducers/users";

const WalletSection = () => {
  const userSelected = useSelector(selectedUser);

  return (
    <div className="work-area__wrapper">
      {userSelected && (
        <div>
          <Row justify="left">
            <h2 className="section-title">Available wallets</h2>
          </Row>

          <WalletList />
        </div>
      )}

      {!userSelected && null}
    </div>
  );
};

export default WalletSection;
