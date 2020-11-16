import React from "react";
import { connect } from "react-redux";

const StatusUserModal = props => {

  const {isDisplay} = props.isDisplay


  return (
    <>
      <div className= { isDisplay ? 'modal status-user active' : 'modal status-user' }>
        <div className= {isDisplay ? "modal-dialog modal-confirm modal-status active" : "modal-dialog modal-confirm modal-status"} >
          <div className="modal-content">
            <div className="modal-header justify-content-center">
              <div className="icon-box">
              <i className="fa fa-check"></i>
              </div>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div className="modal-body text-center">
              <h4>Happy!</h4>
              <p>Your tour has been booking successfully.</p>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


const mapState = state => ({
  loginStatus: state.login,
  isDisplay: state.displayModal,
})
export default connect(mapState) (StatusUserModal);
