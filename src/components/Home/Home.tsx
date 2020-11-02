import React, { FormEvent } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { onLogout } from "../../redux/actions/index";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onHandleLogout = (e: FormEvent) => {
    e.preventDefault();
    localStorage.removeItem("token");
    dispatch(onLogout());

    const isToken = localStorage.getItem("token");

    if (!isToken) {
      history.push("/login");
    }
  };

  return (
    <>
      <div className="login-app">
        <div className="home">
        <p>Congratulation nigga ! </p>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={onHandleLogout}
        >
          Logout
        </button>
        </div>
        <br />
        
      </div>
      
    </>
  );
};

export default Home;
