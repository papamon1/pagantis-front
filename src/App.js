import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { Router, Switch, Route, Redirect, useHistory } from "react-router-dom";
import { user, checkStoredUser } from "./store/reducers/users";
import LoginPage from "./pages/loginPage";
import WorkPage from "./pages/workPage";
import history from "./history";

const AppContainer = () => {
  const storedUser = useSelector(user);
  const [loggedUser, setLoggedUser] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setLoggedUser(storedUser);
  }, [storedUser]);

  useEffect(() => {
    dispatch(checkStoredUser());
  }, []);

  return (
    <React.Fragment>
      {!loggedUser && (
        <Router history={history}>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Redirect exact from="/" to="/login" />
            <Redirect exact from="*" to="/login" />
          </Switch>
        </Router>
      )}

      {loggedUser && (
        <div>
          <Router history={history}>
            <Switch>
              <Route path="/work" component={WorkPage} />
              <Route path="/" />
              <Redirect exact from="*" to="/work" />
            </Switch>
          </Router>
        </div>
      )}
    </React.Fragment>
  );
};

export default AppContainer;
