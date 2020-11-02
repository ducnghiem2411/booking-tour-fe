import React from 'react';


const Blog = () => {
    return (
        <>  

        {/*blog start*/}
<section id="blog" className="blog">
  <div className="container">
    <div className="blog-details">
      <div className="gallary-header text-center">
        <h2>
          latest news
        </h2>
        <p>
          Travel News from all over the world 
        </p>
      </div>{/*/.gallery-header*/}
      <div className="blog-content">
        <div className="row">
          <div className="col-sm-4 col-md-4">
            <div className="thumbnail">
              <h2>trending news <span>15 november 2017</span></h2>
              <div className="thumbnail-img">
                <img src="assets/images/blog/b1.jpg" alt="blog-img" />
                <div className="thumbnail-img-overlay" />{/*/.thumbnail-img-overlay*/}
              </div>{/*/.thumbnail-img*/}
              <div className="caption">
                <div className="blog-txt">
                  <h3>
                    <a href="#">
                      Discover on beautiful weather, Fantastic foods and historical place in Prag
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, contur adip elit, sed do mod incid ut labore et dolore magna aliqua. Ut enim ad minim veniam 
                  </p>
                  <a href="#">Read More</a>
                </div>{/*/.blog-txt*/}
              </div>{/*/.caption*/}
            </div>{/*/.thumbnail*/}
          </div>{/*/.col*/}
          <div className="col-sm-4 col-md-4">
            <div className="thumbnail">
              <h2>trending news <span>15 november 2017</span></h2>
              <div className="thumbnail-img">
                <img src="assets/images/blog/b2.jpg" alt="blog-img" />
                <div className="thumbnail-img-overlay" />{/*/.thumbnail-img-overlay*/}
              </div>{/*/.thumbnail-img*/}
              <div className="caption">
                <div className="blog-txt">
                  <h3>
                    <a href="#">
                      Discover on beautiful weather, Fantastic foods and historical place in india
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, contur adip elit, sed do mod incid ut labore et dolore magna aliqua. Ut enim ad minim veniam 
                  </p>
                  <a href="#">Read More</a>
                </div>{/*/.blog-txt*/}
              </div>{/*/.caption*/}
            </div>{/*/.thumbnail*/}
          </div>{/*/.col*/}
          <div className="col-sm-4 col-md-4">
            <div className="thumbnail">
              <h2>trending news <span>15 november 2017</span></h2>
              <div className="thumbnail-img">
                <img src="assets/images/blog/b3.jpg" alt="blog-img" />
                <div className="thumbnail-img-overlay" />{/*/.thumbnail-img-overlay*/}
              </div>{/*/.thumbnail-img*/}
              <div className="caption">
                <div className="blog-txt">
                  <h3><a href="#">10 Most Natural place to Discover</a></h3>
                  <p>
                    Lorem ipsum dolor sit amet, contur adip elit, sed do mod incid ut labore et dolore magna aliqua. Ut enim ad minim veniam 
                  </p>
                  <a href="#">Read More</a>
                </div>{/*/.blog-txt*/}
              </div>{/*/.caption*/}
            </div>{/*/.thumbnail*/}
          </div>{/*/.col*/}
        </div>{/*/.row*/}
      </div>{/*/.blog-content*/}
    </div>{/*/.blog-details*/}
  </div>{/*/.container*/}
</section>{/*/.blog*/}
{/*blog end*/}



        </>
    )
}

export default Blog