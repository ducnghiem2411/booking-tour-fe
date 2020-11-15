import 'antd/dist/antd.css';
import React from "react";
import "./App.scss";


import User from "./components/User";
import Admin from "./components/Admin";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Country from './components/Admin/Components/Country/Country';
import Modal from './components/User/Modal/Modal';
import Login from './components/User/Login/Login';


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
          
        </Switch>
        
      </Router>
    </div>
    </>
  );
};

export default App;
