import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import RegisterScren from "../components/auth/RegisterScren";

const AuthRouter = () => {
  return (
    <Switch>
      <Route exact path="/auth/login" component={LoginScreen} />
      <Route exact path="/auth/register" component={RegisterScren} />
      <Redirect to="/auth/login" />
    </Switch>
  );
};

export default AuthRouter;
