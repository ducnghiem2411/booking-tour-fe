import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchTopListDestinationRequest } from "../../../redux/actions";

const Gallery = (props) => {
  const dispatch = useDispatch();

  const { dataCountriesTop } = props.dataCountriesTop;

  useEffect(() => {
    dispatch(fetchTopListDestinationRequest());
  }, []);

  return (
    <>
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="gallery-details">
            <div className="gallary-header text-center">
              <h2>top destination</h2>
              <p>
                Duis aute irure dolor in velit esse cillum dolore eu fugiat
                nulla.
              </p>
            </div>

            <div className="gallery-box">
              <div className="gallery-content">
                <div className="filtr-container">
                  <div className="row">
                    {dataCountriesTop &&
                      dataCountriesTop.map((itemCountry, index) => {
                        return (
                          <div className="col-md-4" key= {index} >
                            <div className="gallery-body">
                              <div className="filtr-item">
                                <img
                                  className="placeholder"
                                  src= {itemCountry ? itemCountry.image : "https://via.placeholder.com/272x153"} 
                                />
                                <div className="item-title">
                                  <a to={`/detail`}> {itemCountry.country} </a>
                                  <p>
                                    <span> {itemCountry.totalTour}  tours</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapState = (state) => ({
  dataCountriesTop: state.country,
});

export default connect(mapState)(Gallery);
