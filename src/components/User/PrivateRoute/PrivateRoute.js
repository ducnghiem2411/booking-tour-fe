import React from "react";
import {
  Route,
  RouteProps,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = (props) => {
  const { location } = props;
  const { loginStatus, component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (loginStatus && localStorage.getItem("token")) {
          return (
            <Redirect to={{ pathname: "/", state: { from: location } }} />
          );
        }

        return <Component {...props} />;
      }}
    />
  );
};

const mapState = (state) => ({
    loginStatus: state.login.loginStatus
});

export default connect(mapState)(PrivateRoute);