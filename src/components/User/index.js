import React from 'react'
import About from './About/About'
import Blog from './Blog/Blog'
import Footer from './Footer/Footer'
import Gallery from './Gallery/Gallery'
import Header from './Header/Header'
import Packages from './Packages/Packages'
import Service from './Service/Service'
import Subscribe from './Subscribe/Subscribe'
import Testemonial from './Testemonial/Testemonial'
import Box from './Travel_Box/Box'



import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from '../../routes'
import SuccessBookModal from './Modal/StatusBookingTourModal'


// import './asse'

const showContentMenu = (routes) => {
  var result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          render={route.main}
        />
      );
    });
  }

  return result;
};

const User = () => {

    return (
        <>
            {/* <Modal/> */}
            {/* <SuccessBookModal /> */}
            <Header />
            <About/>
            <Box/>
            <Service/>
            <Gallery/>
            <Packages/>
            <Testemonial/>
            <Blog/>
            <Subscribe/>
            <Footer/>
           <Router >
           <Switch>{showContentMenu(routes)}</Switch>
           </Router>
        </>
    )


}

export default User