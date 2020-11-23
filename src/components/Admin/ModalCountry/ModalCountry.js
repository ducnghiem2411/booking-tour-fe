import React, { FormEvent, useEffect, useState, useRef } from "react";
// import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
  onCloseModal,
  showCreateAccModal,
  onChangeStatusCreateAccModal,
} from "../../../redux/actions/index";
import { Form, Input, Button, Select, Upload, message } from "antd";
import { FormInstance } from "antd/lib/form";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import axios, { post } from 'axios';
import {
  createCountryRequest,
  fetchDataCountryRequest,
  changeStatusEdit,
  updateInfoCountryItemRequest,
} from "../../../redux/actions/index";
import countries from "../../../countries";
import { useForm } from "antd/lib/form/Form";
const { Option } = Select;
const { Dragger } = Upload;

const ModalCountry = (props) => {
  const dispatch = useDispatch();
  const { isDisplay } = props.isDisplay;
  const { match } = props;
  const { selectItem, setSelectItem } = useState("");
  const { textareaItem, setTextAreaItem } = useState("");

  const [statusUpload, setStatusUpload] = useState(true);
 

  // const [fileUpload, setFileUpload] = useState("");
  const { history } = props;
  const { loading } = props.loading;
  // const [inputDataRow, setInputDataRow] = useState(null);
  const { dataRow } = props.dataRow;
  const { statusEdit } = props.statusEdit;

  const formRef = React.createRef();
  // const [image, setImage] = useState(null)
  
  const [form] = Form.useForm();
  const {register} = useForm()
  // const [fileList, setFileList] = useState([])

  
  

  const closeModal = () => {
    dispatch(onCloseModal(false));
    // dispatch(onChangeStatusCreateAccModal(false));
    form.resetFields();
    dispatch(changeStatusEdit());
    history && history.push("/admin/country");
  };
  const onCreateAccModal = (e) => {
    e.preventDefault();
    dispatch(showCreateAccModal(true));
  };
  const changeStatusCreateAccModal = (e) => {
    e.preventDefault();
    dispatch(onChangeStatusCreateAccModal(false));
  };

  const handleChange = (value) => {};

  
  const onReset = () => {
    form.resetFields();
  };

  // console.log("fileUpload", fileUpload);
  const onSubmit = (values) => {
    if (statusEdit) {
      dispatch(updateInfoCountryItemRequest(dataRow.key, values));
    } else {
      dispatch(
        createCountryRequest(
          values.countryName,
          values.description
          // fileUpload ? fileUpload : ""
        )
      );
    }

    form.resetFields();
    closeModal();
    dispatch(changeStatusEdit());
    history && history.push("/admin/country");
  };

  

  const onBlur = () => {
    // console.log("blur");
  };

  const onFocus = () => {
    // console.log("focus");
  };

  const onSearch = (val) => {
    // console.log("search:", val);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
      setStatusUpload(false);
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
      setStatusUpload(false);
    }
    if (isJpgOrPng && isLt2M) {
      setStatusUpload(true);
    }
  };

  const onChangeTextarea = (e) => {
    // setTextAreaItem(e.target.value)
  };
  const onChangeSelect = (e) => {
    // setSelectItem(e && e.target.value)
  };

 

  useEffect(() => {
    
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
                <h4 className="modal-title"> Create new country </h4>
              </div>
              <div className="form-country">
                <Spin spinning={loading}>
                  <Form form={form} name="control-hooks" onFinish={onSubmit}>
                    <Form.Item
                      name="countryName"
                      label="Country name"
                      initialValue={statusEdit ? dataRow.name : ""}
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
                        allowClear
                      >
                        {countries
                          ? countries.map((item, index) => {
                              return (
                                <Option value={item.name} key={index}>
                                  {item.name}
                                </Option>
                              );
                            })
                          : []}
                      </Select>
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



                    

                    {/* <Dragger {...propsUpload} fileList={fileList}>
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text">
                        Click or drag file to this area to upload
                      </p>
                      <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibit
                        from uploading company data or other band files
                      </p>
                    </Dragger> */}
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
                        className="btn-ant-reset"
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
  dataRow: state.country,
  statusEdit: state.country,
});

export default connect(mapState)(ModalCountry);
