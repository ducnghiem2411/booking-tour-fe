import React, { useEffect, useState, useCallback, FormEvent } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { useHistory } from "react-router";
import { registerRequest, onUpdateStatusError } from "../../redux/actions/index";
import store from "../../redux/store";

const Register = (props: any) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { registerStatus } = props.registerStatus;
  const { error } = props.error;
  const { message } = props.message;
//  console.log('message', message)


  const onChangeUsername = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const onChangeEmail = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event:  React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(registerRequest(username, email, password));
  };

  const onGoBack = () => {
    history.goBack();
  };

  const onCloseNofify = () => {
    // document.getElementById("notify").style.display = "none";
    dispatch(onUpdateStatusError(false))
  };


 

  useEffect(() => {
    if (registerStatus) {
      
      setTimeout(()=> {
        history.push("/login");
        dispatch(onUpdateStatusError(false))
     }, 2000)

      
    }
  }, [registerStatus]);

  return (
    <>
      <div className="login-app">
        <div className= {registerStatus ? "notify-succed active"  : "notify-succed"} >
          <p>Register succeed !</p>

        </div>
        <div
          id="notify"
          className={error ? "notify active" : "notify"}
          onClick={onCloseNofify}
        >
          <div className="content">
            <p>Register Failed !</p>
            <small> 
            {message && message.errors.email ? 'Email' : ''} {message ? message.errors.email : ''}, 
            </small>
            <small> 
            {message && message.errors.username ? 'Username' : ''} {message ? message.errors.username : ''}, 
            </small>
            <small> 
            {message && message.errors.password ? 'Password' : ''} {message ? message.errors.password : ''}, 
            </small>
          </div>
          
        </div>
        <div className="child">
          <form className="form-login" onSubmit={onSubmit}>
            <div className="form-group">
              <label>Username:</label>
              <input
                required
                className="form-control"
                id="username"
                onChange={onChangeUsername}
                placeholder="Enter username"
                type="text"
                autoComplete="off"
              />
            </div>
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

            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
          <a className="cancel" onClick={onGoBack}>
            Cancel
          </a>
        </div>
      </div>
    </>
  );
};

const mapState = (state: any) => ({
  registerStatus: state.register,
  error: state.register,
  message: state.register,
});

export default connect(mapState)(Register);
