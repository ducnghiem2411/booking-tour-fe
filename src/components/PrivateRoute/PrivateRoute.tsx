import React from "react";
import {
  Route,
  RouteProps,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = (props: any) => {
  const { location } = props;
  const { isAuthenticated, register, component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated && !localStorage.getItem("token")) {
          return (
            // <Redirect to={{ pathname: '/login', state: { from: location } }} />
            <Redirect to={{ pathname: "/login", state: { from: location } }} />
          );
        }

        return <Component {...props} />;
      }}
    />
  );
};

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.home.isAuthenticated,
  register: state.register.register,
});

export default connect(mapStateToProps)(PrivateRoute);
