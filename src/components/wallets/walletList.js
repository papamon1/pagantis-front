import React, { useEffect } from "react";
import { Row } from "antd";

import WalletCard from "./walletCard";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from "../loadingSpinner";
import { selectedUser } from "../../store/reducers/users";
import { walletList, loading, listWallets } from "../../store/reducers/wallets";

const WalletList = () => {
  const userSelected = useSelector(selectedUser);

  const walletsWallets = useSelector(walletList);
  const walletsLoading = useSelector(loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listWallets(userSelected));
  }, [userSelected]);

  const getWallets = () => {
    const list = [];
    if (walletsWallets) {
      walletsWallets.forEach((wallet, index) => {
        list.push(<WalletCard data={wallet} key={`wallet_${index}`} />);
      });
    }
    return list;
  };

  return (
    <Row gutter={[32, 16]}>
      {walletsLoading && <LoadingSpinner />}
      {!walletsLoading && getWallets()}
    </Row>
  );
};

export default WalletList;
