import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { onCloseModal } from "../../../redux/actions";

const StatusBookingTourModal = (props) => {
  const dispatch = useDispatch()
  const { bookingTourStatus } = props.bookingTourStatus;
  const { messageBooking } = props.messageBooking;
  const { isDisplayBookingModal } = props.isDisplayBookingModal;

  useEffect(() => {}, [bookingTourStatus]);
  useEffect(() => {}, [isDisplayBookingModal]);

  const closeModal = () => {
    dispatch(onCloseModal(false));
  }

  return (
    <>
      <div className= { isDisplayBookingModal ? 'modal status-user login active' : 'modal status-user login' } id="myModal">
        <div className= {isDisplayBookingModal ? "modal-dialog modal-confirm modal-status login active" : "modal-dialog modal-confirm modal-status login"} >
          <div className="modal-content login">
            <div className= {bookingTourStatus ? "modal-header justify-content-center success" : "modal-header justify-content-center fail"} >
              <div className="icon-box">
                {
                  bookingTourStatus ? <i className="fa fa-check"></i> : <i className="fa fa-close"></i>
                }
              
              </div>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
            <div className="modal-body text-center">
              <h4> {bookingTourStatus ? 'Happy!' : 'Sorry :('} </h4>
              <div>
                 {
                 bookingTourStatus ? 

                 'You booked tour successfully' :
                  <p className="error"> <span><i className="fa fa-times-circle"></i></span><span>  </span>{messageBooking}</p>  
                 }
                  </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapState = (state) => ({
  bookingTourStatus: state.tour,
  messageBooking: state.tour,
  isDisplayBookingModal: state.displayModal,

});

export default connect(mapState)(StatusBookingTourModal);
