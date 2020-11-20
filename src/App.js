import "antd/dist/antd.css";

import React from "react";
import "./App.scss";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import User from "./components/User";
import Admin from "./components/Admin";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Country from "./components/Admin/Components/Country/Country";
import Login from "./components/User/Login/Login";
import Detail from "./components/User/Detail.js/Detail";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Router>
          <Switch>
            <Route path="/" exact component={User} />
            <Route path="/admin" component={Admin} />
            <Route path="/country" component={Country} />
            <Route path="/login" component={Login} />
            <Route path="/detail" component={Detail} />


          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
