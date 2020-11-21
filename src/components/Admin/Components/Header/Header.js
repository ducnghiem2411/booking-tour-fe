import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <div className="body-header">
          <div className="title">
            <a className="name">Dashboard</a>
            <span className="icon"><i className="fa fa-dashboard"></i></span>
            <span className="notify"></span>
          </div>

          <div className="account">
            <span className="img">
              <img src="https://pbs.twimg.com/profile_images/633782900077408256/F541mrSs.jpg" />
            </span>
          </div>

        </div>
       
      </header>

      
     
    </>
  );
};

export default Header;
