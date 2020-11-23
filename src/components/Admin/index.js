import React, { useEffect } from "react";

import Breadcrumb from "./Components/Breadcrumb/Breadcrumb";
import Country from "./Components/Country/Country";
import Header from "./Components/Header/Header";

import Navigate from "./Navigate/Navigate";
import PostList from "./Components/PostList/PostList";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import routes from "./../../routes";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Animation from "./Components/Animation/Animation";

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
      <div className="admin">
        <div className="body">
          <div className="container container-admin">
            <div className="dashboard">
              <div className="row row-admin">
                <div className="col-md-3 col-admin">
                  <Navigate />
                </div>
                <div className="col-md-9">
                  <div className="right-side">
                    <Header />
                   
                    <div className="right-body">
                       {/* <Animation/> */}
                      <Switch>{showContentMenu(routes)}</Switch>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
