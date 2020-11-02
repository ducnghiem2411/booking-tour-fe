import React from "react";

const Box = () => {
  return (
    <>
      {/*travel-box start*/}
      <section className="travel-box">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="single-travel-boxes">
                <div id="desc-tabs" className="desc-tabs">
                  <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active">
                      <a
                        href="#tours"
                        aria-controls="tours"
                        role="tab"
                        data-toggle="tab"
                      >
                        <i className="fa fa-tree" />
                        tours
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        href="#hotels"
                        aria-controls="hotels"
                        role="tab"
                        data-toggle="tab"
                      >
                        <i className="fa fa-building" />
                        hotels
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        href="#flights"
                        aria-controls="flights"
                        role="tab"
                        data-toggle="tab"
                      >
                        <i className="fa fa-plane" />
                        flights
                      </a>
                    </li>
                  </ul>
                  {/* Tab panes */}
                  <div className="tab-content">
                    <div
                      role="tabpanel"
                      className="tab-pane active fade in"
                      id="tours"
                    >
                      <div className="tab-para">
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="single-tab-select-box">
                              <h2>destination</h2>
                              <div className="travel-select-icon">
                                <select className="form-control ">
                                  <option value="default">
                                    enter your destination country
                                  </option>
                                  {/* /.option*/}
                                  <option value="turkey">turkey</option>
                                  {/* /.option*/}
                                  <option value="russia">russia</option>
                                  {/* /.option*/}
                                  <option value="egept">egypt</option>
                                  {/* /.option*/}
                                </select>
                                {/* /.select*/}
                              </div>
                              {/* /.travel-select-icon */}
                              <div className="travel-select-icon">
                                <select className="form-control ">
                                  <option value="default">
                                    enter your destination location
                                  </option>
                                  {/* /.option*/}
                                  <option value="istambul">istambul</option>
                                  {/* /.option*/}
                                  <option value="mosko">mosko</option>
                                  {/* /.option*/}
                                  <option value="cairo">cairo</option>
                                  {/* /.option*/}
                                </select>
                                {/* /.select*/}
                              </div>
                              {/* /.travel-select-icon */}
                            </div>
                            {/*/.single-tab-select-box*/}
                          </div>
                          {/*/.col*/}
                          <div className="col-lg-2 col-md-3 col-sm-4">
                            <div className="single-tab-select-box">
                              <h2>check in</h2>
                              <div className="travel-check-icon">
                                <form action="#">
                                  <input
                                    type="text"
                                    name="check_in"
                                    className="form-control"
                                    data-toggle="datepicker"
                                    placeholder="12 -01 - 2017 "
                                  />
                                </form>
                              </div>
                              {/* /.travel-check-icon */}
                            </div>
                            {/*/.single-tab-select-box*/}
                          </div>
                          {/*/.col*/}
                          <div className="col-lg-2 col-md-3 col-sm-4">
                            <div className="single-tab-select-box">
                              <h2>check out</h2>
                              <div className="travel-check-icon">
                                <form action="#">
                                  <input
                                    type="text"
                                    name="check_out"
                                    className="form-control"
                                    data-toggle="datepicker"
                                    placeholder="22 -01 - 2017 "
                                  />
                                </form>
                              </div>
                              {/* /.travel-check-icon */}
                            </div>
                            {/*/.single-tab-select-box*/}
                          </div>
                          {/*/.col*/}
                          <div className="col-lg-2 col-md-1 col-sm-4">
                            <div className="single-tab-select-box">
                              <h2>duration</h2>
                              <div className="travel-select-icon">
                                <select className="form-control ">
                                  <option value="default">5</option>
                                  {/* /.option*/}
                                  <option value={10}>10</option>
                                  {/* /.option*/}
                                  <option value={15}>15</option>
                                  {/* /.option*/}
                                  <option value={20}>20</option>
                                  {/* /.option*/}
                                </select>
                                {/* /.select*/}
                              </div>
                              {/* /.travel-select-icon */}
                            </div>
                            {/*/.single-tab-select-box*/}
                          </div>
                          {/*/.col*/}
                          <div className="col-lg-2 col-md-1 col-sm-4">
                            <div className="single-tab-select-box">
                              <h2>members</h2>
                              <div className="travel-select-icon">
                                <select className="form-control ">
                                  <option value="default">1</option>
                                  {/* /.option*/}
                                  <option value={2}>2</option>
                                  {/* /.option*/}
                                  <option value={4}>4</option>
                                  {/* /.option*/}
                                  <option value={8}>8</option>
                                  {/* /.option*/}
                                </select>
                                {/* /.select*/}
                              </div>
                              {/* /.travel-select-icon */}
                            </div>
                            {/*/.single-tab-select-box*/}
                          </div>
                          {/*/.col*/}
                        </div>
                        {/*/.row*/}
                        <div className="row">
                          <div className="col-sm-5">
                            <div className="travel-budget">
                              <div className="row">
                                <div className="col-md-3 col-sm-4">
                                  <h3>budget : </h3>
                                </div>
                                {/*/.col*/}
                                <div className="co-md-9 col-sm-8">
                                  <div className="travel-filter">
                                    <div className="info_widget">
                                      <div className="price_filter">
                                        <div
                                          id="slider-range"
                                          className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                                        >
                                          <div
                                            className="ui-slider-range ui-widget-header ui-corner-all"
                                            style={{
                                              left: "22.3083%",
                                              width: "54.7%",
                                            }}
                                          />
                                          <span
                                            className="ui-slider-handle ui-state-default ui-corner-all"
                                            tabIndex={0}
                                            style={{ left: "22.3083%" }}
                                          />
                                          <span
                                            className="ui-slider-handle ui-state-default ui-corner-all"
                                            tabIndex={0}
                                            style={{ left: "77.0083%" }}
                                          />
                                        </div>
                                        {/*/.slider-range*/}
                                        <div className="price_slider_amount">
                                          <input
                                            type="text"
                                            id="amount"
                                            name="price"
                                            placeholder="Add Your Price"
                                          />
                                        </div>
                                        {/*/.price_slider_amount*/}
                                      </div>
                                      {/*/.price-filter*/}
                                    </div>
                                    {/*/.info_widget*/}
                                  </div>
                                  {/*/.travel-filter*/}
                                </div>
                                {/*/.col*/}
                              </div>
                              {/*/.row*/}
                            </div>
                            {/*/.travel-budget*/}
                          </div>
                          {/*/.col*/}
                          <div className="clo-sm-7">
                            <div className="about-btn travel-mrt-0 pull-right">
                              <button className="about-view travel-btn">
                                search
                              </button>
                              {/*/.travel-btn*/}
                            </div>
                            {/*/.about-btn*/}
                          </div>
                          {/*/.col*/}
                        </div>
                        {/*/.row*/}
                      </div>
                      {/*/.tab-para*/}
                    </div>
                    {/*/.tabpannel*/}
                    <div
                      role="tabpanel"
                      className="tab-pane fade in"
                      id="hotels"
                    >
                      <div className="tab-para">
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="single-tab-select-box">
                              <h2>destination</h2>
                              <div className="travel-select-icon">
                                <select className="form-control ">
                                  <option value="default">
                                    enter your destination country
                                  </option>
                                  {/* /.option*/}
                                  <option value="turkey">turkey</option>
                                  {/* /.option*/}
                                  <option value="russia">russia</option>
                                  {/* /.option*/}
                                  <option value="egept">egypt</option>
                                  {/* /.option*/}
                                </select>
                                {/* /.select*/}
                              </div>
                              {/* /.travel-select-icon */}
                              <div className="travel-select-icon">
                                <select className="form-control ">
                                  <option value="default">
                                    enter your destination location
                                  </option>
                                  {/* /.option*/}
                                  <option value="istambul">istambul</option>
                                  {/* /.option*/}
                                  <option value="mosko">mosko</option>
                                  {/* /.option*/}
                                  <option value="cairo">cairo</option>
                                  {/* /.option*/}
                                </select>
                                {/* /.select*/}
                              </div>
                              {/* /.travel-select-icon */}
                            </div>
                            {/*/.single-tab-select-box*/}
                          </div>
                          {/*/.col*/}
                          <div className="col-lg-2 col-md-3 col-sm-4">
                            <div className="single-tab-select-box">
                              <h2>check in</h2>
                              <div className="travel-check-icon">
                                <form action="#">
                                  <input
                                    type="text"
                                    name="check_in"
                                    className="form-control"
                                    data-toggle="datepicker"
                                    placeholder="12 -01 - 2017 "
                                  />
                                </form>
                              </div>
                              {/* /.travel-check-icon */}
                            </div>
                            {/*/.single-tab-select-box*/}
                          </div>
                          {/*/.col*/}
                          <div className="col-lg-2 col-md-3 col-sm-4">
                            <div className="single-tab-select-box">
                              <h2>check out</h2>
                              <div className="travel-check-icon">
                                <form action="#">
                                  <input
                                    type="text"
                                    name="check_out"
                                    className="form-control"
                                    data-toggle="datepicker"
                                    placeholder="22 -01 - 2017 "
                                  />
                                </form>
                              </div>
                              {/* /.travel-check-icon */}
                            </div>
                            {/*/.single-tab-select-box*/}
                          </div>
                          {/*/.col*/}
                          <div className="col-lg-2 col-md-1 col-sm-4">
                            <div className="single-tab-select-box">
                              <h2>duration</h2>
                              <div className="travel-select-icon">
                                <select className="form-control ">
                                  <option value="default">5</option>
                                  {/* /.option*/}
                                  <option value={10}>10</option>
                                  {/* /.option*/}
                                  <option value={15}>15</option>
                                  {/* /.option*/}
                                  <option value={20}>20</option>
                                  {/* /.option*/}
                                </select>
                                {/* /.select*/}
                              </div>
                              {/* /.travel-select-icon */}
                            </div>
                            {/*/.single-tab-select-box*/}
                          </div>
                          {/*/.col*/}
                          <div className="col-lg-2 col-md-1 col-sm-4">
                            <div className="single-tab-select-box">
                              <h2>members</h2>
                              <div className="travel-select-icon">
                                <select className="form-control ">
                                  <option value="default">1</option>
                                  {/* /.option*/}
                                  <option value={2}>2</option>
                                  {/* /.option*/}
                                  <option value={4}>4</option>
                                  {/* /.option*/}
                                  <option value={8}>8</option>
                                  {/* /.option*/}
                                </select>
                                {/* /.select*/}
                              </div>
                              {/* /.travel-select-icon */}
                            </div>
                            {/*/.single-tab-select-box*/}
                          </div>
                          {/*/.col*/}
                        </div>
                        {/*/.row*/}
                        <div className="row">
                          <div className="col-sm-5" />
                          {/*/.col*/}
                          <div className="clo-sm-7">
                            <div className="about-btn travel-mrt-0 pull-right">
                              <button className="about-view travel-btn">
                                search
                              </button>
                              {/*/.travel-btn*/}
                            </div>
                            {/*/.about-btn*/}
                          </div>
                          {/*/.col*/}
                        </div>
                        {/*/.row*/}
                      </div>
                      {/*/.tab-para*/}
                    </div>
                    {/*/.tabpannel*/}
                    <div
                      role="tabpanel"
                      className="tab-pane fade in"
                      id="flights"
                    >
                      <div className="tab-para">
                        <div className="trip-circle">
                          <div className="single-trip-circle">
                            <input type="radio" id="radio01" name="radio" />
                            <label htmlFor="radio01">
                              <span className="round-boarder">
                                <span className="round-boarder1" />
                              </span>
                              round trip
                            </label>
                          </div>
                          {/*/.single-trip-circle*/}
                          <div className="single-trip-circle">
                            <input type="radio" id="radio02" name="radio" />
                            <label htmlFor="radio02">
                              <span className="round-boarder">
                                <span className="round-boarder1" />
                              </span>
                              on way
                            </label>
                          </div>
                          {/*/.single-trip-circle*/}
                        </div>
                        {/*/.trip-circle*/}
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="single-tab-select-box">
                              <h2>from</h2>
                              <div className="travel-select-icon">
                                <select className="form-control ">
                                  <option value="default">
                                    enter your location
                                  </option>
                                  {/* /.option*/}
                                  <option value="turkey">turkey</option>
                                  {/* /.option*/}
                                  <option value="russia">russia</option>
                                  {/* /.option*/}
                                  <option value="egept">egypt</option>
                                  {/* /.option*/}
                                </select>
                                {/* /.select*/}
                              </div>
                              {/* /.travel-select-icon */}
                            </div>
                            {/*/.single-tab-select-box*/}
                          </div>
                          {/*/.col*/}
                          <div className="col-lg-2 col-md-3 col-sm-4">
                            <div className="single-tab-select-box">
                              <h2>departure</h2>
                              <div className="travel-check-icon">
                                <form action="#">
                                  <input
                                    type="text"
                                    name="departure"
                                    className="form-control"
                                    data-toggle="datepicker"
                                    placeholder="12 -01 - 2017 "
                                  />
                                </form>
                              </div>
                              {/* /.travel-check-icon */}
                            </div>
                            {/*/.single-tab-select-box*/}
                          </div>
                          {/*/.col*/}
                          <div className="col-lg-2 col-md-3 col-sm-4">
                            <div className="single-tab-select-box">
                              <h2>return</h2>
                              <div className="travel-check-icon">
                                <form action="#">
                                  <input
                                    type="text"
                                    name="return"
                                    className="form-control"
                                    data-toggle="datepicker"
                                    placeholder="22 -01 - 2017 "
                                  />
                                </form>
                              </div>
                              {/* /.travel-check-icon */}
                            </div>
                            {/*/.single-tab-select-box*/}
                          </div>
                          {/*/.col*/}
                          <div className="col-lg-2 col-md-1 col-sm-4">
                            <div className="single-tab-select-box">
                              <h2>adults</h2>
                              <div className="travel-select-icon">
                                <select className="form-control ">
                                  <option value="default">5</option>
                                  {/* /.option*/}
                                  <option value={10}>10</option>
                                  {/* /.option*/}
                                  <option value={15}>15</option>
                                  {/* /.option*/}
                                  <option value={20}>20</option>
                                  {/* /.option*/}
                                </select>
                                {/* /.select*/}
                              </div>
                              {/* /.travel-select-icon */}
                            </div>
                            {/*/.single-tab-select-box*/}
                          </div>
                          {/*/.col*/}
                          <div className="col-lg-2 col-md-1 col-sm-4">
                            <div className="single-tab-select-box">
                              <h2>childs</h2>
                              <div className="travel-select-icon">
                                <select className="form-control ">
                                  <option value="default">1</option>
                                  {/* /.option*/}
                                  <option value={2}>2</option>
                                  {/* /.option*/}
                                  <option value={4}>4</option>
                                  {/* /.option*/}
                                  <option value={8}>8</option>
                                  {/* /.option*/}
                                </select>
                                {/* /.select*/}
                              </div>
                              {/* /.travel-select-icon */}
                            </div>
                            {/*/.single-tab-select-box*/}
                          </div>
                          {/*/.col*/}
                        </div>
                        {/*/.row*/}
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="single-tab-select-box">
                              <h2>to</h2>
                              <div className="travel-select-icon">
                                <select className="form-control ">
                                  <option value="default">
                                    enter your destination location
                                  </option>
                                  {/* /.option*/}
                                  <option value="istambul">istambul</option>
                                  {/* /.option*/}
                                  <option value="mosko">mosko</option>
                                  {/* /.option*/}
                                  <option value="cairo">cairo</option>
                                  {/* /.option*/}
                                </select>
                                {/* /.select*/}
                              </div>
                              {/* /.travel-select-icon */}
                            </div>
                            {/*/.single-tab-select-box*/}
                          </div>
                          {/*/.col*/}
                          <div className="col-lg-3 col-md-3 col-sm-4">
                            <div className="single-tab-select-box">
                              <h2>class</h2>
                              <div className="travel-select-icon">
                                <select className="form-control ">
                                  <option value="default">enter class</option>
                                  {/* /.option*/}
                                  <option value="A">A</option>
                                  {/* /.option*/}
                                  <option value="B">B</option>
                                  {/* /.option*/}
                                  <option value="C">C</option>
                                  {/* /.option*/}
                                </select>
                                {/* /.select*/}
                              </div>
                              {/* /.travel-select-icon */}
                            </div>
                            {/*/.single-tab-select-box*/}
                          </div>
                          {/*/.col*/}
                          <div className="clo-sm-5">
                            <div className="about-btn pull-right">
                              <button className="about-view travel-btn">
                                search
                              </button>
                              {/*/.travel-btn*/}
                            </div>
                            {/*/.about-btn*/}
                          </div>
                          {/*/.col*/}
                        </div>
                        {/*/.row*/}
                      </div>
                    </div>
                    {/*/.tabpannel*/}
                  </div>
                  {/*/.tab content*/}
                </div>
                {/*/.desc-tabs*/}
              </div>
              {/*/.single-travel-box*/}
            </div>
            {/*/.col*/}
          </div>
          {/*/.row*/}
        </div>
        {/*/.container*/}
      </section>
      {/*/.travel-box*/}
      {/*travel-box end*/}
    </>
  );
};

export default Box