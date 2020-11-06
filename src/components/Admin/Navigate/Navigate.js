import React from "react";
// import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Country from "../Components/Country/Country";

const Navigate = () => {
  return (
    <>
      <aside id="left-panel" className="left-panel">
        <nav className="navbar navbar-expand-sm navbar-default">
          <div className="navbar-header">
            <p className="title-dash">Admin Dashboard</p>
          </div>
          <div id="main-menu" className="main-menu collapse navbar-collapse admin">
            <ul className="nav navbar-nav">
              <h3 className="menu-title">UI elements</h3>
              {/* /.menu-title */}

              <ul>
                <Link to="/admin/country" className="navi-link">
                  <li className="menu-item">
                    <span><i className="menu-icon fa fa-laptop"></i></span>  Country
                  </li>
                </Link>
                <Link to="/admin/place" className="navi-link">
                  <li className="menu-item">
                    <span><i className="menu-icon fa fa-laptop"></i></span>  Place
                  </li>
                </Link>
                <Link to="/admin/tour" className="navi-link">
                  <li className="menu-item">
                    <span><i className="menu-icon fa fa-laptop"></i></span>  Tour
                  </li>
                </Link>
              </ul>
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Navigate;
