import React from "react";
import { connect, useDispatch } from "react-redux";
import { onCloseModalLogin } from "../../../redux/actions";

const StatusUserLoginModal = props => {

  const dispatch = useDispatch()

  const {isDisplayLoginModal} = props.isDisplayLoginModal
  const {loginStatus} = props.loginStatus
  const {messageLogin} = props.messageLogin


  const closeModal = () => {
    dispatch(onCloseModalLogin(false));
  }


  return (
    <>
      <div className= { isDisplayLoginModal ? 'modal status-user login active' : 'modal status-user login' } id="myModal">
        <div className= {isDisplayLoginModal ? "modal-dialog modal-confirm modal-status login active" : "modal-dialog modal-confirm modal-status login"} >
          <div className="modal-content login">
            <div className= {loginStatus ? "modal-header justify-content-center success" : "modal-header justify-content-center fail"} >
              <div className="icon-box">
                {
                  loginStatus ? <i className="fa fa-check"></i> : <i className="fa fa-close"></i>
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
              <h4> {loginStatus ? 'Happy!' : 'Sorry :('} </h4>
              <div> {loginStatus ? 'You have been logged in successfully' : <p className="error"> <span><i className="fa fa-times-circle"></i></span><span> {messageLogin} </span> </p>    } </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


const mapState = state => ({
  loginStatus: state.login,
  isDisplayLoginModal: state.displayModal,
  messageLogin: state.login,
  registerStatus: state.register,
})
export default connect(mapState) (StatusUserLoginModal);
