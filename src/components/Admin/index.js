import React from "react";

import Breadcrumb from "./Content/Breadcrumb/Breadcrumb";
import Country from "./Content/Country/Country";
import Header from "./Content/Header/Header";

import Navigate from "./Navigate/Navigate";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Place from "./Content/Place/Place";
import Tour from "./Content/Tour/Tour";
// import Modal from "./Modal/Modal";

// import './asse'

const Admin = () => {
  return (
    <>
      {/* <Router> */}
      {/* <Modal/> */}
      <Navigate />
      <div id="right-panel" className="right-panel">
        <Header />
        <Route path="/admin/country">
          <Country />
        </Route>
        <Route path="/admin/place">
          <Place />
        </Route>
        <Route path="/admin/tour">
          <Tour />
        </Route>
      </div>
      {/* </Router> */}
    </>
  );
};



export default Admin;
