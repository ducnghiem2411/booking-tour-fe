import React, { FormEvent, useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { onShowModal, onLogout } from "../../../redux/actions/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const Header = (props) => {
  const { loginStatus } = props.loginStatus;
  const token = localStorage.getItem("token");

  const onLogout = () => {
    localStorage.removeItem("token");
    window.location.reload(true);
  };

  return (
    <>


      

      {/* main-menu Start */}
      <header className="top-area">
        <div
          id="sticky-wrapper"
          className="sticky-wrapper is-sticky"
          style={{ height: "78px" }}
        >
          <div
            className="header-area"
            style={{
              width: "1349px",
              position: "fixed",
              top: "0px",
              zIndex: "inherit",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-2">
                  <div className="logo">
                    <Link to="/">
                      tour<span>Nest</span>
                    </Link>
                  </div>
                  {/* /.logo*/}
                </div>
                {/* /.col*/}
                <div className="col-sm-10">
                  <div className="main-menu">
                    {/* Brand and toggle get grouped for better mobile display */}
                    <div className="navbar-header">
                      <button
                        type="button"
                        className="navbar-toggle"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                      >
                        <i className="fa fa-bars" />
                      </button>
                      {/* / button*/}
                    </div>
                    {/* /.navbar-header*/}
                    <div className="collapse navbar-collapse">
                      <ul className="nav navbar-nav navbar-right">
                        <li className="smooth-menu">
                          <a href="#home">home</a>
                        </li>
                        <li className="smooth-menu active">
                          <a href="#gallery">Destination</a>
                        </li>
                        <li className="smooth-menu">
                          <a href="#pack">Packages </a>
                        </li>

                        <li className="smooth-menu">
                          <a href="#blog">blog</a>
                        </li>
                        <li className="smooth-menu">
                          <a href="#subs">subscription</a>
                        </li>
                        <li>
                          {loginStatus || token ? (
                            <div className="user-area dropdown float-right">
                              <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <img
                                  className="user-avatar rounded-circle"
                                  src="/assets/images/admin/admin.jpg"
                                  alt="User Avatar"
                                />
                              </a>
                              <div className="user-menu dropdown-menu">
                                <a className="nav-link" href="#">
                                  <i className="fa fa-user" /> My Profile
                                </a>
                                <a className="nav-link" href="#">
                                  <i className="fa fa-user" /> Notifications{" "}
                                  <span className="count">13</span>
                                </a>
                                <a className="nav-link" href="#">
                                  <i className="fa fa-cog" /> Settings
                                </a>
                                <button
                                  className="nav-link btn-logout"
                                  onClick={onLogout}
                                >
                                  <i className="fa fa-power-off" /> Logout
                                </button>
                              </div>
                            </div>
                          ) : (
                            <Link to={`/login`} className="book-btn">
                              Login
                            </Link>
                          )}
                        </li>
                        {/*/.project-btn*/}
                      </ul>
                    </div>
                    {/* /.navbar-collapse */}
                  </div>
                  {/* /.main-menu*/}
                </div>
                {/* /.col*/}
              </div>
              {/* /.row */}
              <div className="home-border" />
              {/* /.home-border*/}
            </div>
            {/* /.container*/}
          </div>
        </div>
        {/* /.header-area */}
      </header>
      {/* /.top-area*/}
      {/* main-menu End */}
    </>
  );
};

const mapState = (state) => ({
  token: state.login,
  loginStatus: state.login,
});
export default connect(mapState)(Header);
