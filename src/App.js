import "antd/dist/antd.css";

import React from "react";
import "./App.scss";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

import User from "./components/User";
import Admin from "./components/Admin";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Redirect,
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import Country from "./components/Admin/Components/Country/Country";
import Login from "./components/User/Login/Login";
import Detail from "./components/User/Detail.js/Detail";
import Setting from "./components/User/Setting/Setting";

const App = () => {

  const history = useHistory(); 
  
  return (
    <>
      <div className="wrapper">
        <Router history={history}>
          <Switch>
          <Redirect exact from="/admin" to="/admin/dashboard" />
            <Route path="/" exact component={User} />
            <Route path="/admin" component={Admin} />
            <Route path="/country" component={Country} />
            <Route path="/login" component={Login} />
            <Route path="/setting/:token" component={Setting} />
            <Route path="/detail/:id" component={Detail} />
            


          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
