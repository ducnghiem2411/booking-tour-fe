import React, { useEffect, useState, useCallback, FormEvent } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { useHistory } from "react-router";
import { registerRequest, onUpdateStatusError } from "../../redux/actions/index";
import { loginRequest } from "../../redux/actions/index";

interface Props {
  isAuthenticated: any,
  error: any,
  message: any,
  loginStatus: any,
}

const Login = (props: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthenticated } = props.isAuthenticated;
  const { error } = props.error;
  const { message } = props.message;
  const { loginStatus } = props.loginStatus;


  

  const onChangeEmail = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(loginRequest(email, password));
  };

  const onHandleRegister = (e: FormEvent) => {
    e.preventDefault();
    // dispatch(registerRequest())
    history.push("/register");
  };

  const onCloseNofify = () => {
    // document.getElementById("notify").style.display = "none";
    dispatch(onUpdateStatusError(false))
  };

  useEffect(() => {
    const isToken = localStorage.getItem("token");

    if (isToken && isAuthenticated) {
      setTimeout(()=> {
        history.push("/");
        dispatch(onUpdateStatusError(false))
     }, 2000)

    
    } else {
      history.push("/login");
    }
  }, [isAuthenticated]);

  return (
    <>
      <div className="login-app">
      <div className= {loginStatus ? "notify-succed active"  : "notify-succed"} >
          <p>Login succeed !</p>

        </div>
      <div
          id="notify"
          className={error ? "notify active" : "notify"}
          onClick={onCloseNofify}
        >
          <div className="content">
          <p>Login Failed !</p>
          <small>
            Email or password is invalid
          </small>
          </div>
         
        </div>
        <div className="child">
          <form className="form-login" onSubmit={onSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input
                required
                className="form-control"
                id="username"
                onChange={onChangeEmail}
                placeholder="Enter email"
                type="text"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                onChange={onChangePassword}
                required
                type="password"
                className="form-control"
                id="pwd"
                placeholder="Enter password"
                autoComplete="off"
              />
            </div>
            <div className="type-btn">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <a className="register" onClick={onHandleRegister}>
            Register
          </a>
        </div>
      </div>
    </>
  );
};

const mapState = (state: any) => ({
  tokenLogin: state.login,
  isAuthenticated: state.home,
  error: state.login,
  message: state.login,
  loginStatus: state.login,
});

export default connect(mapState)(Login);
