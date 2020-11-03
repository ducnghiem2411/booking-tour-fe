import React from "react";

const Header = () => {
  return (
    <>
      {/* Header*/}
      <header id="header" className="header">
        <div className="header-menu">
          <div className="col-sm-7">
            <a id="menuToggle" className="menutoggle pull-left">
              <i className="fa fa fa-tasks" />
            </a>
            <div className="header-left">
              <div className="form-inline">
                <form className="search-form">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search ..."
                    aria-label="Search"
                  />
                  <button className="search-close" type="submit">
                    <i className="fa fa-close" />
                  </button>
                </form>
              </div>
              <div className="dropdown for-notification">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="notification"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-bell" />
                  <span className="count bg-danger">5</span>
                </button>
                <div className="dropdown-menu" aria-labelledby="notification">
                  <p className="red">You have 3 Notification</p>
                  <a className="dropdown-item media bg-flat-color-1" href="#">
                    <i className="fa fa-check" />
                    <p>Server #1 overloaded.</p>
                  </a>
                  <a className="dropdown-item media bg-flat-color-4" href="#">
                    <i className="fa fa-info" />
                    <p>Server #2 overloaded.</p>
                  </a>
                  <a className="dropdown-item media bg-flat-color-5" href="#">
                    <i className="fa fa-warning" />
                    <p>Server #3 overloaded.</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-5">
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
                <a className="nav-link" href="#">
                  <i className="fa fa-power-off" /> Logout
                </a>
              </div>
            </div>
            <div className="language-select dropdown" id="language-select">
              <a
                className="dropdown-toggle"
                href="#"
                data-toggle="dropdown"
                id="language"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <i className="flag-icon flag-icon-us" />
              </a>
              <div className="dropdown-menu" aria-labelledby="language">
                <div className="dropdown-item">
                  <span className="flag-icon flag-icon-fr" />
                </div>
                <div className="dropdown-item">
                  <i className="flag-icon flag-icon-es" />
                </div>
                <div className="dropdown-item">
                  <i className="flag-icon flag-icon-us" />
                </div>
                <div className="dropdown-item">
                  <i className="flag-icon flag-icon-it" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* /header */}
      {/* Header*/}
    </>
  );
};

export default Header;
