import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
  openNotification,
  resetStatusSubscribeMail,
  subscribeEmailRequest,
} from "../../../redux/actions";
import { Form, Input, Button, Select } from "antd";
const Subscribe = (props) => {
  const [emailSub, setEmailSub] = useState("");
  const dispatch = useDispatch();
  const { statusSubscribe } = props.statusSubscribe;
  const { keySubscribe } = props.keySubscribe;
  const { messageSubscribe } = props.messageSubscribe;
  const { loading } = props.loading;
  const [form] = Form.useForm();

  const onChangeEmailSub = (e) => {
    setEmailSub(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(subscribeEmailRequest(emailSub));
  };

  useEffect(() => {
    if (keySubscribe !== 0) {
      if (statusSubscribe) {
        openNotification(statusSubscribe, "Success", messageSubscribe);
      } else {
        openNotification(statusSubscribe, "Failed", messageSubscribe);
      }
    }
    dispatch(resetStatusSubscribeMail());
  }, [statusSubscribe, keySubscribe]);
  

  return (
    <>
      {/*subscribe start*/}
      <section id="subs" className="subscribe">
        <div className="container">
          <div className="subscribe-title text-center">
            <h2>Join our Subscribers List to Get Regular Update</h2>
            <p>Subscribe Now. We will send you Best offer for your Trip</p>
          </div>
          <form>
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                <div className="custom-input-group">
                
                  <form onSubmit={onSubmit}>
                    <input
                      type="email"
                      className="form-control"
                      defaultValue={emailSub}
                      placeholder="Enter your Email Here"
                      onChange={onChangeEmailSub}
                    />
                    <button
                      className="appsLand-btn subscribe-btn"
                      type="submit"
                    >
                      {loading ? (
                        <div className="donut multi"></div>
                      ) : (
                        "Subscribe"
                      )}
                    </button>
                  </form>
                  <div className="clearfix" />
                  <i className="fa fa-envelope" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

const mapState = (state) => ({
  keySubscribe: state.tour,
  messageSubscribe: state.tour,
  loading: state.tour,
  statusSubscribe: state.tour,
});
export default connect(mapState)(Subscribe);
