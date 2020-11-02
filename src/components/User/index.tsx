import React from 'react'
import About from './About/About'
import Blog from './Blog/Blog'
import Footer from './Footer/Footer'
import Gallery from './Gallery/Gallery'
import Header from './Header/Header'
import Modal from './Modal/Modal'
import Packages from './Packages/Packages'
import Service from './Service/Service'
import Subscribe from './Subscribe/Subscribe'
import Testemonial from './Testemonial/Testemonial'
import Box from './Travel_Box/Box'


{/* <Modal/>
      <Header />
      <About/>
      <Box/>
      <Service/>
      <Gallery/>
      <Packages/>
      <Testemonial/>
      <Blog/>
      <Subscribe/>
      <Footer/> */}

const User = () => {

    return (
        <>
            <Modal/>
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
        </>
    )


}

export default User