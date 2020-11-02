import React, {FormEvent} from "react";
import {useDispatch} from 'react-redux'
import {onShowModal} from '../../../redux/actions/index';

const Header = () => {

  const dispatch = useDispatch()





  const onShowLoginModal = (e:FormEvent) => {
    dispatch(onShowModal(true))

  }
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
                    <a href="index.html">
                      tour<span>Nest</span>
                    </a>
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
                          <button
                            className="book-btn"
                            onClick={onShowLoginModal}
                          >
                            Login
                          </button>
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

export default Header;
