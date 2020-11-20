import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import { Carousel } from "antd";
import { connect, useDispatch } from "react-redux";
import index from "../../Admin";
import { fetchReviewsListRequest } from "../../../redux/actions";

const Testemonial = props => {

  const dispatch = useDispatch()
  const {allReviews} = props.allReviews



  useEffect(() => {
   dispatch(fetchReviewsListRequest())
  }, [])
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

          <OwlCarousel
            className="owl-theme"
            loop
            autoplay
            nav
            dots
            margin={10}
            // responsive={responsive}
          >

            {
              allReviews && allReviews.map((item, index) => {
                return (
<div className="home1-testm item" key={item._id}>
              <div className="home1-testm-single text-center">
                <div className="home1-testm-img">
                  <img src="assets/images/client/testimonial1.jpg" alt="img" />
                </div>
                <div className="home1-testm-txt">
                  <span className="icon section-icon">
                    <i className="fa fa-quote-left" aria-hidden="true" />
                  </span>
                  <p>
                    {item ? item.content : ''}
                  </p>
                  <h3>
                    <a href="#"> {item.username} </a>
                  </h3>
                </div>
              </div>
            </div>
                )
              })
            }
            
            
           
          </OwlCarousel>
        </div>
      </section>
    </>
  );
};

const mapState = state => ({
  allReviews: state.review
})

export default connect(mapState) (Testemonial);
