import React, { FormEvent, useEffect, useState, useRef } from "react";
// import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
  onCloseModal,
  showCreateAccModal,
  onChangeStatusCreateAccModal,
  openNotification,
  resetStatusAdmin,
} from "../../../redux/actions/index";
import { Form, Input, Button, Select, Upload, message } from "antd";
import { FormInstance } from "antd/lib/form";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import {
  createCountryRequest,
  fetchDataCountryRequest,
  createPlaceRequest,
  changeStatusEdit,
  fetchDataPlaceInCountryRequest,
  updateInfoPlaceItemRequest,
} from "../../../redux/actions/index";
import countries from "../../../countries";
import axios from "axios";
const { Option } = Select;

const ModalPlace = (props) => {
  const dispatch = useDispatch();
  const { isDisplay } = props.isDisplay;
  const { match } = props;
  // console.log(" match.params.id", match && match.params && match.params.id);
  const { selectedCountryName, setSelectedCountryName } = useState("");
  const { textareaItem, setTextAreaItem } = useState("");

  const [statusUpload, setStatusUpload] = useState(true);

  const [fileUpload, setFileUpload] = useState("");
  const { history } = props;
  const { loading } = props.loading;
  const { dataRow } = props.dataRow;
  const { dataCountry } = props.dataCountry;
  // console.log("dataCountry", dataCountry);
  const { statusEdit } = props.statusEdit;
  const [idCountry, setIdCountry] = useState("");

  const { statusAdmin } = props.statusAdmin;
  const { keyAdminModal } = props.keyAdminModal;
  const { message } = props.message;
  const [file, setFileImage] = useState('')

  
  const [form] = Form.useForm();


  const onChangeImg = e => {
    setFileImage(e.target.files[0])
  }

  const closeModal = () => {
    dispatch(onCloseModal(false));
    form.resetFields();
    dispatch(changeStatusEdit());
    history && history.push("/admin/place");
  };
  const onCreateAccModal = (e) => {
    e.preventDefault();
    dispatch(showCreateAccModal(true));
  };
  const changeStatusCreateAccModal = (e) => {
    e.preventDefault();
    dispatch(onChangeStatusCreateAccModal(false));
  };

  var getIdCountry = (dataCountry, countryName) => {
    var result = -1;
    dataCountry.data.forEach((itemCountry, index) => {
      if (itemCountry.name === countryName) {
        result = itemCountry._id;
      }
    });

    return result;
  };

  const handleChange = (value) => {
    const id = getIdCountry(dataCountry, value);
    setIdCountry(id);
  };

  const waitUntilImageLoaded = (resolve) => {
    setTimeout(() => {
      fileUpload
        ? resolve() // from onChange method
        : waitUntilImageLoaded(resolve);
    }, 10);
  };

  const customRequest = async (option) => {
    const { onSuccess, onError, file, action, onProgress } = option;
    const url = action;

    await new Promise((resolve) => waitUntilImageLoaded(resolve)); //in the next section

    const type = "image/png";
    axios
      .put("http://localhost:8000/countries", fileUpload, {
        onUploadProgress: (e) => {
          onProgress({ percent: (e.loaded / e.total) * 100 });
        },
        headers: {
          "Content-Type": type,
        },
      })
      .then((respones) => {
        /*......*/
        onSuccess(respones.body);
      })
      .catch((err) => {
        /*......*/
        onError(err);
      });
  };

 
  const onSubmit = (values) => {
    if (statusEdit) {
      dispatch(updateInfoPlaceItemRequest(dataRow.key, values));
    } else {
      dispatch(
        createPlaceRequest(
          idCountry,
          values.countryName,
          values.placeName,
          values.description,
          file
        )
      );
    }

   
  };

  useEffect(() => {
    if (keyAdminModal !== 0) {
      if (statusAdmin) {
        openNotification(statusAdmin, "Success", message);
        closeModal();
      } else {
        openNotification(statusAdmin, "Failed", message);
        form.resetFields();
        dispatch(changeStatusEdit());
      }
    }
    dispatch(resetStatusAdmin());
  }, [statusAdmin, keyAdminModal]);

 

  const onBlur = () => {};

  const onFocus = () => {};

  const onSearch = (val) => {};


  const onChangeTextarea = (e) => {};
  const onChangePlaceName = (e) => {};
  const onChangeSelect = (e) => {};

  useEffect(() => {
    dispatch(fetchDataCountryRequest());
  }, [dataRow]);

  return (
    <>
      <div
        className={
          isDisplay ? "wrap-modal country active" : "wrap-modal country"
        }
      >
        <div
          className={
            isDisplay
              ? "modal-form login country active"
              : "modal-form login country"
          }
        >
          <div className="modal-dialog login animated country">
            <div className="modal-content country">
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
                <h4 className="modal-title"> Create new place </h4>
              </div>
              <div className="form-country">
                <Spin spinning={loading}>
                  <Form form={form} name="control-hooks" onFinish={onSubmit}>
                    <Form.Item
                      name="countryName"
                      label="Country name"
                      // initialValue = {dataRow && dataRow.name ? dataRow.name : ''}
                      initialValue={statusEdit ? dataRow.countryName : ""}
                      rules={[
                        {
                          required: true,
                          message: "Please select country name !",
                        },
                      ]}
                    >
                      <Select
                        placeholder="Select country name pls"
                        onChange={handleChange}
                        disabled={statusEdit ? true : false}
                        // defaultValue= {dataRow && dataRow.name ? dataRow.name : 'name'}
                        allowClear
                      >
                        {dataCountry && dataCountry.data
                          ? dataCountry.data.map((item, index) => {
                              return (
                                <Option value={item.name} key={item._id}>
                                  {item.name}
                                </Option>
                              );
                            })
                          : []}
                        {/* {countries
                          ? countries.map((item, index) => {
                              return (
                                <Option value={item.name} key={index}>
                                  {item.name}
                                </Option>
                              );
                            })
                          : []} */}
                      </Select>
                    </Form.Item>

                    <Form.Item
                      name="placeName"
                      label="Place name"
                      onChange={onChangePlaceName}
                      // initialValue=  {dataRow && dataRow.description ? dataRow.description : ''}
                      initialValue={statusEdit ? dataRow.placeName : ""}
                      rules={[
                        {
                          required: true,
                          message: "Please typing place name !",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Typing place name here..."
                        maxLength={250}
                      />
                    </Form.Item>
                    <Form.Item
                      name="description"
                      label="Description"
                      onChange={onChangeTextarea}
                      initialValue={statusEdit ? dataRow.description : ""}
                      rules={[
                        {
                          required: true,
                          message: "Please typing description !",
                        },
                      ]}
                    >
                      <Input.TextArea maxLength={250} />
                    </Form.Item>

                    <input type="file" onChange={onChangeImg} />
                   
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="btn-ant-modal-submit"
                      >
                        {statusEdit ? "Save" : "Create"}
                      </Button>
                      <Button
                        htmlType="button"
                        onClick={() => form.resetFields()}
                      >
                        Reset
                      </Button>
                    </Form.Item>
                  </Form>
                </Spin>
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
  loading: state.country,
  dataRow: state.place,
  statusEdit: state.country,
  dataCountry: state.country,
  statusAdmin: state.place,
  keyAdminModal: state.place,
  message: state.place,
});

export default connect(mapState)(ModalPlace);
