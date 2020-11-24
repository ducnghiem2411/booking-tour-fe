import React, { useEffect, useState } from "react";
import { Button, Select, Form, DatePicker, Slider } from "antd";
import formatPrice from "./../../../utilies/FormatNumber";
import moment from "moment";
import countries from "./../../../countries";
import { fetchDataPlaceRequest, getFilterTourRequest } from "../../../redux/actions";
import { connect, useDispatch } from "react-redux";
import queryString from "query-string";

const Box = (props) => {
  // const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [formLayout, setFormLayout] = useState("vertical");
  const [country, setCountry] = useState("");
  const [place, setPlace] = useState("");
  const [memNumber, setMemNumber] = useState(1);
  const [minBudget, setMinBudget] = useState(0);
  const [maxBudget, setMaxBudget] = useState(0);
  const { dataPlace } = props.dataPlace;
  const dateFormat = "YYYY-MM-DD";
  const { RangePicker } = DatePicker;
  const { Option } = Select;
  const [form] = Form.useForm();
  const memberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [dateString, setDateString] = useState([]);

  const rangeConfig = {
    rules: [{ type: "array", required: true, message: "Please select time!" }],
  };

  const onChangeCountry = (value) => {
    // setCountry(e.target.value);
  };
  // const onChangePlace = (e) => {
  //   setPlace(e.target.value);
  // };
  // const onChangeMember = (e) => {
  //   setMemNumber(e.target.value);
  // };
  const onChangeBudget = (value) => {
    setMinBudget(value[0]*100000);
    setMaxBudget(value[1] * 100000);
  };
  const onChangeDate = (value, dateString) => {
    setDateString(dateString);
  };

  const onSubmit = (values) => {
    
    const filters = {
      country: values.countryName,
      place: values.placeName,
      member: values.memNumber,
      minprice: minBudget,
      maxprice: maxBudget,
      
    }
    const paramsString = queryString.stringify(filters);

    dispatch(getFilterTourRequest(paramsString))
   

  };

  useEffect(() => {
    dispatch(fetchDataPlaceRequest());
  }, []);

  return (
    <>
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
                      disabled
                        href="#hotels"
                        aria-controls="hotels"
                        role="tab"
                        data-toggle="tab"
                      >
                        <i className="fa fa-building" />
                        hotels
                      </a>
                    </li>
                    <li role="presentation" >
                      <a
                      disabled
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
                        {/* <form onSubmit={onSubmit}> */}
                        <Form
                          form={form}
                          name="control-hooks"
                          onFinish={onSubmit}
                        >
                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                              <div className="single-tab-select-box">
                                <h2>destination</h2>
                                <div className="travel-select-icon">
                                  <Form.Item
                                    name="countryName"
                                    rules={[
                                      {
                                        required: true,
                                        message: "Please select country name !",
                                      },
                                    ]}
                                  >
                                    <Select
                                      className="form-control"
                                      placeholder="Select country name pls"
                                      onChange={onChangeCountry}
                                      allowClear
                                    >
                                      {countries
                                        ? countries.map((item, index) => {
                                            return (
                                              <Option
                                                value={item.name}
                                                key={index}
                                              >
                                                {item.name}
                                              </Option>
                                            );
                                          })
                                        : []}
                                    </Select>
                                  </Form.Item>
                                </div>
                                <div className="travel-select-icon">
                                  <Form.Item
                                    name="placeName"
                                    rules={[
                                      {
                                        required: true,
                                        message: "Please select place name !",
                                      },
                                    ]}
                                  >
                                    <Select
                                      className="form-control"
                                      placeholder="Select place name pls"
                                      onChange={onChangeCountry}
                                      allowClear
                                    >
                                      {dataPlace && dataPlace.data
                                        ? dataPlace.data.map((item, index) => {
                                            return (
                                              <Option
                                                value={item.name}
                                                key={item._id}
                                              >
                                                {item.name}
                                              </Option>
                                            );
                                          })
                                        : []}
                                    </Select>
                                  </Form.Item>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="single-tab-select-box">
                                <h2>check in - check out</h2>
                                <Form.Item name="rangePicker" {...rangeConfig}>
                                  <RangePicker
                                    onChange={onChangeDate}
                                    defaultValue={[
                                      moment("2020-01-01", dateFormat),
                                      moment("2020-12-01", dateFormat),
                                    ]}
                                    format={dateFormat}
                                  />
                                </Form.Item>
                              </div>
                            </div>

                            <div className="col-lg-2 col-md-1 col-sm-4">
                              <div className="single-tab-select-box">
                                <h2>members</h2>
                                <div className="travel-select-icon">
                                  <Form.Item
                                    name="memNumber"
                                    rules={[
                                      {
                                        required: true,
                                        message:
                                          "Please select member number !",
                                      },
                                    ]}
                                  >
                                    <Select
                                      className="form-control"
                                      placeholder="Select member number "
                                      onChange={onChangeCountry}
                                      allowClear
                                    >
                                      {memberArray &&
                                        memberArray.map((item, index) => {
                                          return (
                                            <Option value={item} key={index}>
                                              {item}
                                            </Option>
                                          );
                                        })}
                                    </Select>
                                  </Form.Item>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-5">
                              <div className="travel-budget">
                                <div className="row">
                                  <div className="col-md-3 col-sm-4">
                                    <h3>budget : </h3>
                                  </div>
                                  <div className="co-md-9 col-sm-8">
                                    <div className="travel-filter">
                                      <div className="info_widget">
                                        <div className="price_filter">
                                        
                                          <Form.Item name="slider">
                                            <Slider
                                              range
                                              step={1.125}
                                              defaultValue={[
                                                0,
                                                100,
                                              ]}
                                              onChange={onChangeBudget}
                                              tooltipVisible={false}
                                            />
                                          </Form.Item>
                                          <div className="budget-range">
                                            <div>
                                              {" "}
                                              {formatPrice(
                                                minBudget
                                              )}{" "}
                                            </div>

                                            <div>
                                              {" "}
                                              {formatPrice(
                                                maxBudget 
                                              )}{" "}
                                            </div>
                                          </div>

                                       
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="clo-sm-7">
                              <div className="about-btn travel-mrt-0 pull-right">
                                <Form.Item>
                                  <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="about-view travel-btn btn-search"
                                  >
                                    search
                                  </Button>
                                </Form.Item>
                              </div>
                            </div>
                          </div>
                        </Form>
                      </div>
                    </div>
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
                                  <option value="turkey">turkey</option>
                                  <option value="russia">russia</option>
                                  <option value="egept">egypt</option>
                                </select>
                              </div>
                              <div className="travel-select-icon">
                                <select className="form-control ">
                                  <option value="default">
                                    enter your destination location
                                  </option>
                                  <option value="istambul">istambul</option>
                                  <option value="mosko">mosko</option>
                                  <option value="cairo">cairo</option>
                                </select>
                              </div>
                            </div>
                          </div>
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
                            </div>
                          </div>
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
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-1 col-sm-4">
                            <div className="single-tab-select-box">
                              <h2>duration</h2>
                              <div className="travel-select-icon">
                                <select className="form-control ">
                                  <option value="default">5</option>
                                  <option value={10}>10</option>
                                  <option value={15}>15</option>
                                  <option value={20}>20</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-1 col-sm-4">
                            <div className="single-tab-select-box">
                              <h2>members</h2>
                              <div className="travel-select-icon">
                                <select className="form-control ">
                                  <option value="default">1</option>
                                  <option value={2}>2</option>
                                  <option value={4}>4</option>
                                  <option value={8}>8</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-5" />
                          <div className="clo-sm-7">
                            <div className="about-btn travel-mrt-0 pull-right">
                              <button className="about-view travel-btn">
                                search
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                                  <option value="turkey">turkey</option>
                                  <option value="russia">russia</option>
                                  <option value="egept">egypt</option>
                                </select>
                              </div>
                            </div>
                          </div>
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
                            </div>
                          </div>
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
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-1 col-sm-4">
                            <div className="single-tab-select-box">
                              <h2>adults</h2>
                              <div className="travel-select-icon">
                                <select className="form-control ">
                                  <option value="default">5</option>
                                  <option value={10}>10</option>
                                  <option value={15}>15</option>
                                  <option value={20}>20</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-1 col-sm-4">
                            <div className="single-tab-select-box">
                              <h2>childs</h2>
                              <div className="travel-select-icon">
                                <select className="form-control ">
                                  <option value="default">1</option>
                                  <option value={2}>2</option>
                                  <option value={4}>4</option>
                                  <option value={8}>8</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="single-tab-select-box">
                              <h2>to</h2>
                              <div className="travel-select-icon">
                                <select className="form-control ">
                                  <option value="default">
                                    enter your destination location
                                  </option>
                                  <option value="istambul">istambul</option>
                                  <option value="mosko">mosko</option>
                                  <option value="cairo">cairo</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-4">
                            <div className="single-tab-select-box">
                              <h2>class</h2>
                              <div className="travel-select-icon">
                                <select className="form-control ">
                                  <option value="default">enter class</option>
                                  <option value="A">A</option>
                                  <option value="B">B</option>
                                  <option value="C">C</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="clo-sm-5">
                            <div className="about-btn pull-right">
                              <button className="about-view travel-btn">
                                search
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/.tab content*/}
                </div>
                {/*/.desc-tabs*/}
              </div>
              {/*/.single-travel-box*/}
            </div>
          </div>
        </div>
        {/*/.container*/}
      </section>
    </>
  );
};

const mapState = (state) => ({
  dataPlace: state.place,
});

export default connect(mapState)(Box);
