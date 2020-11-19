import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchReviewsListRequest } from "../../../redux/actions";
import { Rate, List, Avatar} from 'antd';

const ReviewsList = (props) => {
  const { reviewsList } = props.reviewsList;

  const dispatch = useDispatch();
  const { itemTour } = props;

  useEffect(() => {
    // console.log("Effect review list")
    dispatch(fetchReviewsListRequest(itemTour.placeId));
  }, []);
  // console.log('reviewsList', reviewsList)

  return (
    <>

<List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3
    }}
    dataSource={reviewsList}
    renderItem={(item) => (
      <List.Item key={item._id}>
        <List.Item.Meta
        avatar={<Avatar src="https://via.placeholder.com/50x50" />}
        title={<div className="name">{item.username}</div>}
        description={<Rate disabled  allowHalf defaultValue={item ? item.star : 1} />}
        />
          {item ? item.content : ""}
      </List.Item>
    )}
  />


    

      {/* <div className="list-review">
        {reviewsList &&
          reviewsList.map((item, index) => {
            return (
              <div className="list-item" key={index}>
                <div className="img">
                  <img src="https://via.placeholder.com/50x50" />
                </div>
                <div className="feedback">
                  <div className="name"> {item.username} </div>
                  <Rate disabled  allowHalf defaultValue={item ? item.star : 1} />
                  <p className="feedback-content">{item ? item.content : ""}</p>
                </div>
              </div>
            );
          })}
      </div> */}
    </>
  );
};

const mapState = (state) => ({
  reviewsList: state.review,
});

export default connect(mapState)(ReviewsList);
