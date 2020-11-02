import React from "react";
// import "./style.css";

import Breadcrumb from "./Breadcrumb/Breadcrumb";
import Header from "./Header/Header";


const Content = () => {
  return (
    <>
      <div id="right-panel" className="right-panel">
        <Header/>
        <Breadcrumb/>
        
      </div>
    </>
  );
};




export default Content;
