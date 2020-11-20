import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Carousel } from "antd";

const Testemonial = () => {
  // const responsive = {
  //   nav: true,
  //   autoplay: true,
  //   // breakpoint from 0 up
  //   0: {
  //     items: 1,
  //   },
  //   // breakpoint from 480 up
  //   414: {
  //     items: 1,
  //   },
  //   // breakpoint from 768 up
  //   768: {
  //     items: 2,
  //   },
  //   1024: {
  //     items: 3,
  //   },
  // };

  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79"
  };
  


  return (
    <>
      <section className="testemonial">
        <div className="container">
          <div className="gallary-header text-center">
            <h2>clients reviews</h2>
            <p>
              Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla.
            </p>
          </div>
          <Carousel autoplay draggable={true} slidesPerRow={3}>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            
          </Carousel>
          ,
          {/* <OwlCarousel className="owl-theme" loop margin={10} responsive={responsive} >
            <div className="home1-testm item">
              <div className="home1-testm-single text-center">
                <div className="home1-testm-img">
                  <img src="assets/images/client/testimonial1.jpg" alt="img" />
                </div>
                <div className="home1-testm-txt">
                  <span className="icon section-icon">
                    <i className="fa fa-quote-left" aria-hidden="true" />
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet, contur adip elit, sed do mod
                    incid ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam.
                  </p>
                  <h3>
                    <a href="#">kevin watson</a>
                  </h3>
                  <h4>london, england</h4>
                </div>
              </div>
            </div>
          </OwlCarousel> */}
        </div>
      </section>
    </>
  );
};

export default Testemonial;
