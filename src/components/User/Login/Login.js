import React, { FormEvent, useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, notification, Divider, Space } from "antd";
import GoogleLogin from "react-google-login";
import {
  showCreateAccModal,
  onChangeStatusCreateAccModal,
  registerRequest,
  loginRequest,
  openNotification,
  resetLoginStatus,
  resetStatusReset,
  resetRegisterStatus,
  showResetModal,
  resetPasswordRequest,
} from "../../../redux/actions/index";

const Login = (props) => {
  const dispatch = useDispatch();
  const { isDisplay } = props.isDisplay;
  const { loginStatus } = props.loginStatus;
  const { statusCreateModal } = props.statusCreateModal;
  const { messageLogin } = props.messageLogin;

  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [emailReset, setEmailReset] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRepassword] = useState("");

  const { keyLogin } = props.keyLogin;
  const { keyRegister } = props.keyRegister;
  const { keyReset } = props.keyReset;
  const { registerStatus } = props.registerStatus;
  const { resetStatus } = props.resetStatus;
  const { message } = props.message;
  const { messageReset } = props.messageReset;
  const { statusResetModal } = props.statusResetModal;
  const { history } = props;
  const { loading } = props.loading;
  const { loadingLogin } = props.loadingLogin;
  const { loadingRegister } = props.loadingRegister;

  const onCreateAccModal = (e) => {
    e.preventDefault();
    setEmailLogin("");
    setPasswordLogin("");
    dispatch(showCreateAccModal(true));
  };
  const onShowResetModal = (e) => {
    e.preventDefault();
    setEmailLogin("");
    setPasswordLogin("");
    dispatch(showResetModal(true));
  };
  const changeStatusCreateAccModal = (e) => {
    e.preventDefault();
    setUsername("");
    setEmail("");
    setPassword("");
    setRepassword("");
    dispatch(onChangeStatusCreateAccModal(false));
    dispatch(showResetModal(false));
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeEmailLogin = (e) => {
    setEmailLogin(e.target.value);
  };
  const onChangePasswordLogin = (e) => {
    setPasswordLogin(e.target.value);
  };
  const onChangeEmailReset = (e) => {
    setEmailReset(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeRepeatPassword = (e) => {
    setRepassword(e.target.value);
  };

  const onRegister = (e) => {
    e.preventDefault();

    dispatch(registerRequest(userName, email, password));

    setUsername("");
    setEmail("");
    setPassword("");
    setRepassword("");
  };

  const onLogin = (e) => {
    e.preventDefault();
    dispatch(loginRequest(emailLogin, passwordLogin));

    setEmailLogin("");
    setPasswordLogin("");
  };
  const onResetPassword = (e) => {
    e.preventDefault();
    dispatch(resetPasswordRequest(emailReset));
  };

  useEffect(() => {
    if (keyLogin !== 0) {
      if (loginStatus) {
        openNotification(loginStatus, "Success", "Loggined in successfully !");
      } else {
        openNotification(loginStatus, "Failed", messageLogin);
      }
    }
    dispatch(resetLoginStatus());
  }, [loginStatus, keyLogin]);

  useEffect(() => {
    if (keyRegister !== 0) {
      if (registerStatus) {
        openNotification(
          registerStatus,
          "Success",
          message,
          notification.config({
            duration: 10,
          })
        );
        setTimeout(() => {
          dispatch(onChangeStatusCreateAccModal(false));
        }, 1000);
      } else {
        openNotification(registerStatus, "Failed", message);
      }
    }

    dispatch(resetRegisterStatus());
  }, [registerStatus, keyRegister]);

  useEffect(() => {
    if (keyReset !== 0) {
      if (resetStatus) {
        openNotification(
          resetStatus,
          "Success",
          messageReset,
          notification.config({
            duration: 5,
          })
        );
      } else {
        openNotification(resetStatus, "Failed", messageReset);
      }
    }
    dispatch(resetStatusReset());
  }, [resetStatus, keyReset]);

  useEffect(() => {
    if (loginStatus) {
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  }, [loginStatus]);

  const responseGoogle = (response) => {
    if(response.accessToken){
      // dispatch(loginGoogleRequest())
    }
    // console.log(response);
  };

  return (
    <>
      <div className="login-page">
        <div className="wrap-modal">
          <div
            className={
              isDisplay ? "modal-form login active" : "modal-form login"
            }
            id="loginModal"
          >
            <div className="modal-dialog login animated">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title"> Login with</h4>
                </div>
                <div className="modal-body">
                  <div className="box login-body">
                    <div className="content">
                      <div className="social">
                        <a className="circle github" href="#">
                          <i className="fa fa-github fa-fw" />
                        </a>
                        <a id="google_login" className="circle google" href="#">
                          <i className="fa fa-google-plus fa-fw" />
                        </a>
                        {/* <GoogleLogin
                          clientId="388356051193-2o77ddjb3i1v4nd4fn7v5g566gph0415.apps.googleusercontent.com"
                          buttonText="Login"
                          onSuccess={responseGoogle}
                          onFailure={responseGoogle}
                          cookiePolicy={"single_host_origin"}
                        /> */}
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
                        <span className="option">
                          {" "}
                          {statusResetModal
                            ? " Enter your email address and we'll send you a link to reset your password"
                            : "or"}
                        </span>
                        <div className="line r" />
                      </div>
                      <div className="error" />
                      <div
                        className={
                          statusCreateModal || statusResetModal
                            ? "form loginBox hidden"
                            : "form loginBox"
                        }
                      >
                        <form
                          className="form-login"
                          onSubmit={onLogin}
                          method="POST"
                        >
                          <input
                            id="email"
                            className="form-control"
                            type="text"
                            required
                            placeholder="Email"
                            name="email"
                            autoComplete="off"
                            onChange={onChangeEmailLogin}
                            value={emailLogin}
                          />
                          <input
                            id="password"
                            className="form-control"
                            required
                            type="password"
                            placeholder="Password"
                            name="password"
                            autoComplete="off"
                            onChange={onChangePasswordLogin}
                            value={passwordLogin}
                          />

                          <button
                            type="submit"
                            className="btn btn-default btn-login"
                          >
                            {loadingLogin ? (
                              <div className="donut multi"></div>
                            ) : (
                              "Login"
                            )}
                          </button>
                        </form>
                      </div>
                      <div
                        className={
                          statusResetModal
                            ? "form resetBox"
                            : "form resetBox hidden"
                        }
                      >
                        <form
                          className="form-login"
                          // onSubmit={onLogin}
                          method="POST"
                          onSubmit={onResetPassword}
                        >
                          <input
                            id="email"
                            className="form-control"
                            type="text"
                            required
                            placeholder="Email"
                            name="email"
                            autoComplete="off"
                            onChange={onChangeEmailReset}
                          />

                          <button
                            type="submit"
                            className="btn btn-default btn-login"
                            disabled={loading ? true : false}
                          >
                            {loading ? (
                              <div className="donut multi"></div>
                            ) : (
                              "Send"
                            )}
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      statusCreateModal
                        ? "box regis-body active"
                        : "box regis-body"
                    }
                  >
                    <div className="content registerBox">
                      <div className="form">
                        <form
                          className="form-register"
                          onSubmit={onRegister}
                          method="POST"
                        >
                          <input
                            id="username"
                            className="form-control"
                            type="text"
                            maxLength="20"
                            required
                            placeholder="Username"
                            name="username"
                            autoComplete="off"
                            onChange={onChangeUsername}
                            value={userName}
                          />
                          <input
                            id="email"
                            className="form-control"
                            type="text"
                            placeholder="Email"
                            required
                            name="email"
                            autoComplete="off"
                            onChange={onChangeEmail}
                            value={email}
                          />
                          <input
                            id="password"
                            className="form-control"
                            type="password"
                            required
                            placeholder="Password"
                            autoComplete="off"
                            name="password"
                            onChange={onChangePassword}
                            value={password}
                          />
                          <input
                            id="password_confirmation"
                            className="form-control"
                            required
                            type="password"
                            placeholder="Repeat Password"
                            name="password_confirmation"
                            autoComplete="off"
                            onChange={onChangeRepeatPassword}
                            value={rePassword}
                          />
                          <button
                            type="submit"
                            className="btn btn-default btn-register"
                            disabled={rePassword !== password ? true : false}
                          >
                            {loadingRegister ? (
                              <div className="donut multi"></div>
                            ) : (
                              " Create account"
                            )}
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <div
                    className={
                      statusCreateModal || statusResetModal
                        ? "forgot login-footer hidden"
                        : "forgot login-footer"
                    }
                  >
                    <span>
                      Looking to <span> </span>
                      <a href="" onClick={onCreateAccModal}>
                        create an account
                      </a>
                      ?
                    </span>
                    <div className="forgot-pass">
                      <a href="" className="forgot" onClick={onShowResetModal}>
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div
                    className={
                      statusCreateModal || statusResetModal
                        ? "forgot register-footer active"
                        : "forgot register-footer"
                    }
                  >
                    <span>Already have an account?</span>
                    <span> </span>
                    <a href="" onClick={changeStatusCreateAccModal}>
                      {" "}
                      Login
                    </a>
                  </div>
                  <div
                    className={
                      statusResetModal
                        ? "forgot reset-footer active"
                        : "forgot reset-footer"
                    }
                  ></div>
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
  registerStatus: state.register,
  loginStatus: state.login,
  keyLogin: state.login,
  keyRegister: state.register,
  error: state.register,
  message: state.register,
  messageReset: state.reset,
  messageLogin: state.login,
  resetStatus: state.reset,
  keyReset: state.reset,
  statusResetModal: state.displayModal,
  loadingLogin: state.login,
  loadingRegister: state.register,
  loading: state.reset,
});

export default connect(mapState)(Login);
