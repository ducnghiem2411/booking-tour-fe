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
     

      <div className="navigation">
        <header>
          <div className="title">
            <span className="icon"><img src="https://demos.creative-tim.com/light-bootstrap-dashboard-react/static/media/reactlogo.9b864b36.png" /></span>
            <span>Creative time</span>
          </div>
        </header>

        <div className="list">
          <ul>
            <li>
              <Link to="/admin/dashboard" className="list-item active"> <span><i className="fa fa-dashboard"></i></span> <span>Dashboard</span></Link>
            </li>
            <li>
              <Link to="/admin/country" className="list-item"> <span><i className="fa fa-map-marker"></i></span> <span>Country</span></Link>
            </li>
            <li>
              <Link to="/admin/place" className="list-item"> <span><i className="fa fa-file-text"></i></span> <span>Place</span></Link>
            </li>
            <li>
              <Link to="/admin/tour" className="list-item"> <span><i className="fa fa-anchor"></i></span> <span>Tour</span></Link>
            </li>
            <li>
              <a className="list-item"> <span><i className="fa fa-bell"></i></span>  <span>Notifications</span> </a>
            </li>
            <li>
              {/* <Link className="list-item" to={`/admin/tour`}>Notifications</Link> */}
            </li>
          </ul>
        </div>

      </div>
    </>
  );
};

export default Navigate;
