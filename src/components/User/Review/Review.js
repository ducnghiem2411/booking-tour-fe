import React from 'react'
import { Form, Input, Button, Rate , Checkbox } from "antd";
import { useDispatch } from 'react-redux';
import { submitUserReviewRequest } from '../../../redux/actions';

const Review = props => {

    const {itemTour} = props

    const dispatch = useDispatch()


    const onFinish = (values) => {

        dispatch(submitUserReviewRequest(values.review, values.rate, itemTour._id, itemTour.placeId))
        
      };

    return (

        <>
    <div className="client-review">
                      <Form onFinish={onFinish}>
                        <Form.Item
                          label="Name"
                          name="username"
                          rules={[
                            {
                              required: true,
                            
                              message: "Your name here...!",
                            },
                          ]}
                        >
                          <Input maxLength={15} />
                        </Form.Item>

                        <Form.Item name="review" label="Review"  rules={[
                            {
                              required: true,
                             
                              message: "Review here...",
                            },
                          ]}>
                          <Input.TextArea maxLength={200} />
                        </Form.Item>
                        <Form.Item name="rate" style={
                          {
                            paddingLeft: '65px'
                          }
                        }  rules={[
                            {
                              required: true,
                              message: "Rating pls...",
                            },
                          ]}>
                          <Rate allowHalf  />
                        </Form.Item>

                        <Form.Item style = {
                          {
                            paddingLeft: '70px'
                          }
                        } >
                          <Button type="primary" htmlType="submit" >
                            Send
                          </Button>
                        </Form.Item>
                      </Form>
                    </div>


        </>
    )
}

export default Review