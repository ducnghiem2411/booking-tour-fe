import React from 'react';


const Subscribe = () => {
    return (
        <>
{/*subscribe start*/}
<section id="subs" className="subscribe">
  <div className="container">
    <div className="subscribe-title text-center">
      <h2>
        Join our Subscribers List to Get Regular Update
      </h2>
      <p>
        Subscribe Now. We will send you Best offer for your Trip 
      </p>
    </div>
    <form>
      <div className="row">
        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
          <div className="custom-input-group">
            <input type="email" className="form-control" placeholder="Enter your Email Here" />
            <button className="appsLand-btn subscribe-btn">Subscribe</button>
            <div className="clearfix" />
            <i className="fa fa-envelope" />
          </div>
        </div>
      </div>
    </form>
  </div>
</section>
{/*subscribe end*/}



        </>
    )
}

export default Subscribe