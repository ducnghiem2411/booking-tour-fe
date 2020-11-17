import React from "react";
import { connect, useDispatch } from "react-redux";
import { onCloseModalRegister } from "../../../redux/actions";

const StatusUserRegisterModal = props => {

  const dispatch = useDispatch()

  const {isDisplayRegisterModal} = props.isDisplayRegisterModal
  const {registerStatus} = props.registerStatus
  const {message} = props.message


  const closeModal = () => {
    dispatch(onCloseModalRegister(false));
  }



  return (
    <>
      <div className= { isDisplayRegisterModal ? 'modal status-user register active' : 'modal status-user register' } id="myModal">
        <div className= {isDisplayRegisterModal ? "modal-dialog modal-confirm modal-status register active" : "modal-dialog modal-confirm modal-status register"} >
          <div className="modal-content">
            <div className= {registerStatus ? "modal-header justify-content-center success" : "modal-header justify-content-center fail"} >
              <div className="icon-box">
                {
                  registerStatus ? <i className="fa fa-check"></i> : <i className="fa fa-close"></i>
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
              <h4> {registerStatus ? 'Happy!' : 'Sorry :('} </h4>
              <p> {registerStatus ? 'You have been registed successfully' :  
              <ul className="list-error">
                {
                  message && message.map((item, index) => {
                    return (
                      <li key={index}> <span><i class="fa fa-times-circle"></i></span> <span className="name">{item}</span>   </li>
                    )
                  })
                }
               
              </ul> 
              } </p>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


const mapState = state => ({
  
  isDisplayRegisterModal: state.displayModal,
  registerStatus: state.register,
  message: state.register,
})
export default connect(mapState) (StatusUserRegisterModal);
