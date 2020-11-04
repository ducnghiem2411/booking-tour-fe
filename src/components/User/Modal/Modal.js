import React, { FormEvent, useEffect, useState } from "react";
// import { useState } from "react";
import {connect, useDispatch} from 'react-redux'
import { onCloseModal, showCreateAccModal, onChangeStatusCreateAccModal } from '../../../redux/actions/index'



const Modal = (props) => {
  const dispatch = useDispatch();
  const {isDisplay} = props.isDisplay;
  const {statusCreateModal} = props.statusCreateModal;

  const closeModal = () => {
    dispatch(onCloseModal(false))
    dispatch(onChangeStatusCreateAccModal(false))
  }
  const onCreateAccModal = (e) => {
    e.preventDefault();
    dispatch(showCreateAccModal(true))
  }
  const changeStatusCreateAccModal = (e) => {
    e.preventDefault();
    dispatch(onChangeStatusCreateAccModal(false))
  }




  return (
    <>
      <div className={isDisplay ? "wrap-modal active" : "wrap-modal"}>
        <div
          className={isDisplay ? "modal-form login active" : "modal-form login"}
          id="loginModal"
        >
          <div className="modal-dialog login animated">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                  onClick={closeModal}
                >
                  ×
                </button>
                <h4 className="modal-title"> Login with</h4>
              </div>
              <div className="modal-body">
                <div className=  "box login-body">
                  <div className="content">
                    <div className="social">
                      <a className="circle github" href="#">
                        <i className="fa fa-github fa-fw" />
                      </a>
                      <a id="google_login" className="circle google" href="#">
                        <i className="fa fa-google-plus fa-fw" />
                      </a>
                      <a
                        id="facebook_login"
                        className="circle facebook"
                        href="#"
                      >
                        <i className="fa fa-facebook fa-fw" />
                      </a>
                    </div>
                    <div className="division">
                      <div className="line l" />
                      <span>or</span>
                      <div className="line r" />
                    </div>
                    <div className="error" />
                    <div className= {statusCreateModal ?  "form loginBox hidden" :  "form loginBox"}>
                      <form acceptCharset="UTF-8">
                        <input
                          id="email"
                          className="form-control"
                          type="text"
                          placeholder="Email"
                          name="email"
                        />
                        <input
                          id="password"
                          className="form-control"
                          type="password"
                          placeholder="Password"
                          name="password"
                        />
                        <input
                          className="btn btn-default btn-login"
                          type="button"
                          defaultValue="Login"
                        />
                      </form>
                    </div>
                  </div>
                </div>
                <div className= {statusCreateModal ? "box regis-body active": "box regis-body"} >
                  <div
                    className="content registerBox"
                  >
                    <div className="form">
                      <form>
                        <input
                          id="email"
                          className="form-control"
                          type="text"
                          placeholder="Email"
                          name="email"
                        />
                        <input
                          id="password"
                          className="form-control"
                          type="password"
                          placeholder="Password"
                          name="password"
                        />
                        <input
                          id="password_confirmation"
                          className="form-control"
                          type="password"
                          placeholder="Repeat Password"
                          name="password_confirmation"
                        />
                        <input
                          className="btn btn-default btn-register"
                          type="button"
                          defaultValue="Create account"
                          name="commit"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className= {statusCreateModal ? "forgot login-footer hidden" : "forgot login-footer"} >
                  <span>
                    Looking to <span> </span>
                    <a href="" onClick={onCreateAccModal}>
                      create an account
                    </a>
                    ?
                  </span>
                </div>
                <div
                  className= {statusCreateModal ?  "forgot register-footer active" :  "forgot register-footer"}
                >
                  <span>Already have an account?</span>
                  <a href="" onClick={changeStatusCreateAccModal}>Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapState = (state) => ({
  isDisplay: state.displayModal,
  statusCreateModal: state.displayModal,

})

export default connect(mapState)(Modal);



