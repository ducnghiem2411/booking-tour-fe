import React, { useEffect } from "react";
// import OwlCarousel from "react-owl-carousel";
import { Carousel } from "antd";
import { connect, useDispatch } from "react-redux";
import index from "../../Admin";
import { fetchAllReviewsRequest } from "../../../redux/actions";

const Testemonial = (props) => {
  const dispatch = useDispatch();
  const { allReviews } = props.allReviews;

  useEffect(() => {
    dispatch(fetchAllReviewsRequest());
  }, []);
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

          <Carousel slidesToShow={3} draggable dots={false}>
            {allReviews 
              ? allReviews.map((item, index) => {
                  return (
                    <div
                      className="home1-testm item"
                      key={item._id}
                      // id="testemonial-carousel"
                    >
                      <div className="home1-testm-single text-center">
                        <div className="home1-testm-img text-center">
                          <div className="img">
                          <img
                          style={{
                            display: 'block',
                            borderRadius: '50%'
                          }}
                            src="assets/images/client/testimonial1.jpg"
                            alt="img"
                          />
                          </div>

                        </div>
                        <div className="home1-testm-txt">
                          <span className="icon section-icon">
                            <i
                              className="fa fa-quote-left"
                              aria-hidden="true"
                            />
                          </span>
                          <p>{item ? item.content : ""}</p>
                          <h3>
                            <a href="#"> {item.username} </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  );
                })
              : []}
          </Carousel>
        </div>
      </section>
    </>
  );
};

const mapState = (state) => ({
  allReviews: state.review,
});

export default connect(mapState)(Testemonial);
