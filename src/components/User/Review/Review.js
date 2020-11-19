import React, { useEffect } from "react";
import { Form, Input, Button, Rate, Checkbox } from "antd";
import { connect, useDispatch } from "react-redux";
import { submitUserReviewRequest } from "../../../redux/actions";

const Review = (props) => {
  const { itemTour } = props;
  const [form] = Form.useForm();

  const { message } = props.message;
  const { statusSubmitReview } = props.statusSubmitReview;

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
    form.resetFields();
  };

  useEffect(() => {
   
  }, [statusSubmitReview])

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
            <Button type="primary" htmlType="submit">
              Send
            </Button>
          </Form.Item>
        </Form>
        {/*  */}
        <div
          className={
            !statusSubmitReview ? "alert-review active" : "alert-review"
          }
        >
          {" "}
          <span className="icon">
            <i className="fas fa-exclamation-triangle"></i>
          </span>{" "}
          <span></span>{" "}
        </div>
      </div>
    </>
  );
};

const mapState = (state) => ({
  message: state.review,
  statusSubmitReview: state.review,
});

export default connect(mapState)(Review);
