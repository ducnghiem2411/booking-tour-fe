import React, { useEffect, useState } from "react";
import { Form, Input, Button, Rate, notification } from "antd";
import { connect, useDispatch } from "react-redux";
import { openNotification, submitUserReviewRequest } from "../../../redux/actions";

const Review = (props) => {
  const { itemTour } = props;
  const [form] = Form.useForm();

  const { message } = props.message;
  var { statusSubmitReview } = props.statusSubmitReview;
  var { keyReview } = props.keyReview;

  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(
      submitUserReviewRequest(
        values.review,
        values.rate,
        itemTour._id,
        itemTour.placeId
      )
    );
  };

  const clearPropsToState = () => {
    keyReview = 0
    statusSubmitReview = false
  }

  useEffect(() => {
    // clearPropsToState()
    if (keyReview !== 0) {
      if (statusSubmitReview) {
        openNotification(statusSubmitReview)
      } else {
        openNotification(statusSubmitReview)
      }
    }
  }, [statusSubmitReview, keyReview]);

  return (
    <>
      <div className="client-review">
        <Form form={form} onFinish={onSubmit}>
          <Form.Item
            name="review"
            label="Review"
            rules={[
              {
                required: true,

                message: "Review here...",
              },
            ]}
          >
            <Input.TextArea
              maxLength={200}
              placeholder="Typing your review..."
            />
          </Form.Item>
          <Form.Item
            name="rate"
            style={{
              paddingLeft: "65px",
            }}
            rules={[
              {
                required: true,
                message: "Rating pls...",
              },
            ]}
          >
            <Rate allowHalf />
          </Form.Item>

          <Form.Item
            style={{
              paddingLeft: "70px",
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              // onClick={openNotification}
            >
              Send
            </Button>
          </Form.Item>
        </Form>
        {/*  */}
        {/* <div
          className={
            !statusSubmitReview ? "alert-review active" : "alert-review"
          }
        >
          {" "}
          <span className="icon">
          <i class="fa fa-warning"></i>
          </span>{" "}
          <span> You reviewed this tour </span>{" "}
        </div> */}
      </div>
    </>
  );
};

const mapState = (state) => ({
  message: state.review,
  statusSubmitReview: state.review,
  keyReview: state.review,
});

export default connect(mapState)(Review);
