import React from "react";

const Service = () => {
  return (
    <>
      <section id="service" className="service">
        <div className="container">
          <div className="service-counter text-center">
            <div className="col-md-4 col-sm-4">
              <div className="single-service-box">
                <div className="service-img">
                  <img src="assets/images/service/s1.png" alt="service-icon" />
                </div>
                {/*/.service-img*/}
                <div className="service-content">
                  <h2>
                    <a href="#">amazing tour packages</a>
                  </h2>
                  <p>
                    Duis aute irure dolor in velit esse cillum dolore eu fugiat
                    nulla.
                  </p>
                </div>
                {/*/.service-content*/}
              </div>
              {/*/.single-service-box*/}
            </div>
            {/*/.col*/}
            <div className="col-md-4 col-sm-4">
              <div className="single-service-box">
                <div className="service-img">
                  <img src="assets/images/service/s2.png" alt="service-icon" />
                </div>
                {/*/.service-img*/}
                <div className="service-content">
                  <h2>
                    <a href="#">book top class hotel</a>
                  </h2>
                  <p>
                    Duis aute irure dolor in velit esse cillum dolore eu fugiat
                    nulla.
                  </p>
                </div>
                {/*/.service-content*/}
              </div>
              {/*/.single-service-box*/}
            </div>
            {/*/.col*/}
            <div className="col-md-4 col-sm-4">
              <div className="single-service-box">
                <div className="statistics-img">
                  <img src="assets/images/service/s3.png" alt="service-icon" />
                </div>
                {/*/.service-img*/}
                <div className="service-content">
                  <h2>
                    <a href="#">online flight booking</a>
                  </h2>
                  <p>
                    Duis aute irure dolor in velit esse cillum dolore eu fugiat
                    nulla.
                  </p>
                </div>
                {/*/.service-content*/}
              </div>
              {/*/.single-service-box*/}
            </div>
            {/*/.col*/}
          </div>
          {/*/.statistics-counter*/}
        </div>
        {/*/.container*/}
      </section>
      {/*/.service*/}
      {/*service end*/}
    </>
  );
};

export default Service;
