import React from "react";

import Breadcrumb from "./Components/Breadcrumb/Breadcrumb";
import Country from "./Components/Country/Country";
import Header from "./Components/Header/Header";

import Navigate from "./Navigate/Navigate";
import PostList from "./Components/PostList/PostList";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import routes from './../../routes'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// import './asse'

const showContentMenu = (routes) => {
  var result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          render={route.main}
        />
      );
    });
  }

  return result;
};

const index = () => {
  return (
    <>
      <Navigate />
      <div id="right-panel" className="right-panel">
        <Header />
        {/* <Route path="/admin/country">
          <Country />
        </Route>
        <Route path="/admin/place">
          <Place />
        </Route>
        <Route path="/admin/tour">
          <Tour />
        </Route>
        <Route path="/admin/country/add">
        <Modal />
        </Route> */}
        <Switch>{showContentMenu(routes)}</Switch>
      </div>
    </>
  );
};

export default index;
