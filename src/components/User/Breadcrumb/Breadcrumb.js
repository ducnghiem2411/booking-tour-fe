import React from "react";
import { Link, Route } from "react-router-dom";


// const BreadcrumbsItem = ({ match, ...rest }) => (
//   <React.Fragment>
//       <li className={match.isExact ? 'breadcrumb-active' : undefined}>
//           <Link to={match.url || ''}>
//               {match.url}
//           </Link>
//       </li>
//       {/* <Route path={`${match.url}/:path`} component={BreadcrumbsItem} /> */}
//   </React.Fragment>
// )

const Breadcrumb = props => {

  const {match} = props
  


  
  return (
    <>
      <div className="bread-bg">
        <div className="container">
          <nav className="breadcumb">
            <ul>
              <li>
                <Link to="/">Home</Link>
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              </li>
              {/* <Route path='/:path' component={BreadcrumbsItem} /> */}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
