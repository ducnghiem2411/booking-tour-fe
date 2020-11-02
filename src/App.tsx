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







const App = () => {
  return (
    <>
    <div className="wrapper">
    <Router>
        <Switch>
          <Route path="/" exact component={User} />
          <Route path="/admin" component={Admin} />

         
        </Switch>
      </Router>
      

    </div>
     
    </>
  );
};

export default App;
