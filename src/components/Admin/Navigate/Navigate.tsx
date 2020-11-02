import React from "react";
// import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const Navigate = () => {
  return (
    <>
        <aside id="left-panel" className="left-panel">
          <nav className="navbar navbar-expand-sm navbar-default">
            <div className="navbar-header">
              <p className="title-dash">Admin Dashboard</p>
            </div>
            <div id="main-menu" className="main-menu collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <h3 className="menu-title">UI elements</h3>
                {/* /.menu-title */}
                <Router>
      <div>
        <ul>
          <li>
            <Link to="/country">Country</Link>
          </li>
          <li>
            <Link to="/place">Place</Link>
          </li>
          <li>
            <Link to="/tour">Tour</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/country">
           
          </Route>
          <Route path="/place">
           
          </Route>
          <Route path="/tour">
           
          </Route>
        </Switch>
      </div>
    </Router>
                {/* <li className="menu-item-has-children dropdown">
                  <a
                    href=""
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {" "}
                    <i className="menu-icon fa fa-laptop" />
                    Components
                  </a>
                </li> */}
              </ul>
            </div>
            {/* /.navbar-collapse */}
          </nav>
        </aside>
    </>
  );
};

export default Navigate;
