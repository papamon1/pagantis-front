import React from "react";
import { useSelector } from "react-redux";
import { user, doLogout } from "../store/reducers/users";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Header = () => {
  const userUser = useSelector(user);

  let history = useHistory();

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(doLogout());
    history.push("/login");
  };

  return (
    <div className="header-header-wrapper">
      <div className="d-flex align-center">
        <div className="floating">
          <img className="login__logo" src="/img/p_coin.png"></img>
        </div>
        PagaCoins Wallet
      </div>
      <div>
        <div className="header__account">
          {userUser.firstName} {userUser.lastName || ""}
        </div>
        <div
          onClick={() => logout()}
          className="header__account header__account--small"
        >
          Logout
        </div>
      </div>
    </div>
  );
};

export default Header;
