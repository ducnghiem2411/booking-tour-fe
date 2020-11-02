import React from "react";

const Footer = () => {
  return (
    <>
      {/* footer-copyright start */}
      <footer className="footer-copyright">
        <div className="container">
          <div className="footer-content">
            <div className="row">
              <div className="col-sm-3">
                <div className="single-footer-item">
                  <div className="footer-logo">
                    <a href="#">
                      tour<span>Nest</span>
                    </a>
                    <p>best travel agency</p>
                  </div>
                </div>
                {/*/.single-footer-item*/}
              </div>
              {/*/.col*/}
              <div className="col-sm-3">
                <div className="single-footer-item">
                  <h2>link</h2>
                  <div className="single-footer-txt">
                    <p>
                      <a href="#">home</a>
                    </p>
                    <p>
                      <a href="#">destination</a>
                    </p>
                    <p>
                      <a href="#">spacial packages</a>
                    </p>
                    <p>
                      <a href="#">special offers</a>
                    </p>
                    <p>
                      <a href="#">blog</a>
                    </p>
                    <p>
                      <a href="#">contacts</a>
                    </p>
                  </div>
                  {/*/.single-footer-txt*/}
                </div>
                {/*/.single-footer-item*/}
              </div>
              {/*/.col*/}
              <div className="col-sm-3">
                <div className="single-footer-item">
                  <h2>popular destination</h2>
                  <div className="single-footer-txt">
                    <p>
                      <a href="#">china</a>
                    </p>
                    <p>
                      <a href="#">venezuela</a>
                    </p>
                    <p>
                      <a href="#">brazil</a>
                    </p>
                    <p>
                      <a href="#">australia</a>
                    </p>
                    <p>
                      <a href="#">london</a>
                    </p>
                  </div>
                  {/*/.single-footer-txt*/}
                </div>
                {/*/.single-footer-item*/}
              </div>
              {/*/.col*/}
              <div className="col-sm-3">
                <div className="single-footer-item text-center">
                  <h2 className="text-left">contacts</h2>
                  <div className="single-footer-txt text-left">
                    <p>+1 (300) 1234 6543</p>
                    <p className="foot-email">
                      <a href="#">info@tnest.com</a>
                    </p>
                    <p>North Warnner Park 336/A</p>
                    <p>Newyork, USA</p>
                  </div>
                  {/*/.single-footer-txt*/}
                </div>
                {/*/.single-footer-item*/}
              </div>
              {/*/.col*/}
            </div>
            {/*/.row*/}
          </div>
          {/*/.footer-content*/}
          <hr />
          <div className="foot-icons ">
            <ul className="footer-social-links list-inline list-unstyled">
              <li>
                <a href="https://www.facebook.com/bachasoftware" target="_blank" className="foot-icon-bg-1">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/bachasoftware" target="_blank" className="foot-icon-bg-2">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/bachasoftware" target="_blank" className="foot-icon-bg-3">
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
            <p>
              © 2017 <a href="https://www.themesine.com">BHSoft-B4Team</a>. All
              Right Reserved
            </p>
          </div>
          {/*/.foot-icons*/}
          <div id="scroll-Top"></div>
          {/*/.scroll-Top*/}
        </div>
        {/* /.container*/}
      </footer>
      {/* /.footer-copyright*/}
      {/* footer-copyright end */}
    </>
  );
};

export default Footer;






