import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import {
  getInfoUserRequest,
  openNotification,
  resetSettingStatus,
  updateInfoUserRequest,
} from "./../../../redux/actions";

const Setting = (props) => {
  const dispatch = useDispatch();
  const { dataUser } = props.dataUser;
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");

  const { match } = props;

  const { loading } = props.loading;
  const { settingStatus } = props.settingStatus;
  const { keySetting } = props.keySetting;

  useEffect(() => {
    dispatch(getInfoUserRequest(match.params.token));
  }, []);
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangeBio = (e) => {
    setBio(e.target.value);
  };
  const onChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmit = (e) => {
    
    e.preventDefault();
    dispatch(updateInfoUserRequest(phone, bio, image, dataUser.username));
  };

  useEffect(() => {
    if (dataUser) {
      setPhone(dataUser.phone);
      setBio(dataUser && dataUser.bio)
      setImage(dataUser && dataUser.image)
    }
  }, [dataUser]);

  useEffect(() => {
    if (keySetting !== 0) {
      if (settingStatus) {
        openNotification(settingStatus, "Success", "Updated profile successfully !");
      } else {
        openNotification(settingStatus, "Failed", );
      }
    }
    dispatch(resetSettingStatus());
  }, [settingStatus, keySetting]);



  return (
    <>
    
      <div className="account">
        <div className="body">
          <div className="container container-account">
            <div className="row" style={{ height: "100%" }}>
              <div className="col-md-4 col-navi">
                <div className="navigate">
                  <header>
                    <div className="img-user">
                      <img
                        src={
                          dataUser
                            ? dataUser.image
                            : "https://via.placeholder.com/75x75"
                        }
                      />
                    </div>
                    <p
                      className="name"
                      style={{
                        marginBottom: "5px",
                      }}
                    >
                      {" "}
                      {dataUser && dataUser.username
                        ? dataUser.username
                        : ""}{" "}
                    </p>
                    <p className="bio">
                      {dataUser
                        ? dataUser.bio
                        : "Nothing is impossible if you always try hard"}
                    </p>
                  </header>
                  <div className="list">
                    <ul>
                      <li>
                        <a>profile information</a>
                      </li>
                      <li>
                        <a>security</a>
                      </li>
                      {/* <li>
                        <a>account setting</a>
                      </li>
                      <li>
                        <a>account setting</a>
                      </li>
                      <li>
                        <a>account setting</a>
                      </li>
                      <li>
                        <a>account setting</a>
                      </li> */}
                     
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-setting">
                <div className="body-setting">
                  <p className="title"> Account Settings </p>
                  <div className="form" onSubmit={onSubmit}>
                    <form>
                      <div className="form-group">
                        <label>Username</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={dataUser && dataUser.username}
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={dataUser && dataUser.email}
                          disabled
                        />
                      </div>
                      <div className="form-group">
                        <label>Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={dataUser && dataUser.phone}
                          onChange={onChangePhone}
                        />
                      </div>
                      <div className="form-group">
                        <label>Bio</label>
                        <textarea
                          className="form-control"
                          type="text"
                          maxlength="100"
                          defaultValue={dataUser && dataUser.bio}
                          onChange={onChangeBio}
                        ></textarea>
                      </div>



                      <div className="form-group">
                        <label>Avatar</label>
                        <input
                          type="file"
                          // defaultValue={dataUser && dataUser.image}
                          onChange={onChangeImage}
                        />
                      </div>
                      <div className="wrap-btn-setting">
                        <button
                          type="submit"
                          className="btn btn-primary btn-setting"
                        >
                          {loading ? (
                            <div className="donut multi"></div>
                          ) : (
                            "Save"
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                  <Link to="/" className="btn-back setting" href="/">
                    {" "}
                    <span className="icon arrowBack">
                      {" "}
                      <i className="fa fa-angle-double-left "></i>{" "}
                    </span>{" "}
                    Back to home page
                  </Link>
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
  dataUser: state.user,
  loading: state.user,
  settingStatus: state.user,
  keySetting: state.user,
});
export default connect(mapState)(Setting);
