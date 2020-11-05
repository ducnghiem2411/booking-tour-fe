import React from "react";

import Breadcrumb from "./Components/Breadcrumb/Breadcrumb";
import Country from "./Components/Country/Country";
import Header from "./Components/Header/Header";

import Navigate from "./Navigate/Navigate";
import PostList from './Components/PostList/PostList'
import {Admin, Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Place from "./Components/Place/Place";
import Tour from "./Components/Tour/Tour";
// import Modal from "./Modal/Modal";

// import './asse'

const index = () => {
  return (
    <>
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
    
    </>
  );
};

export default index;
