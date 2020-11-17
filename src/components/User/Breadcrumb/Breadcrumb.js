import React from "react";

const Breadcrumb = () => {
  return (
    <>
      <div className="bread-bg">
        <div className="container">
          <nav className="breadcumb">
            <ul>
              <li>
                <a>Home</a>
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
