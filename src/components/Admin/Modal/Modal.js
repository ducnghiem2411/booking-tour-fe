import React, { FormEvent, useEffect, useState, useRef } from "react";
// import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
  onCloseModal,
  showCreateAccModal,
  onChangeStatusCreateAccModal,
} from "../../../redux/actions/index";
import { Form, Input, Button, Select, Upload } from "antd";
import { FormInstance } from "antd/lib/form";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { createCountryRequest, fetchDataCountryRequest } from "../../../redux/actions/index";

const Modal = (props) => {
  const dispatch = useDispatch();
  const { isDisplay } = props.isDisplay;
  const { statusCreateModal } = props.statusCreateModal;

  const closeModal = () => {
    dispatch(onCloseModal(false));
    dispatch(onChangeStatusCreateAccModal(false));
    onReset()
  };
  const onCreateAccModal = (e) => {
    e.preventDefault();
    dispatch(showCreateAccModal(true));
  };
  const changeStatusCreateAccModal = (e) => {
    e.preventDefault();
    dispatch(onChangeStatusCreateAccModal(false));
  };


  const [form] = Form.useForm();

  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        form.setFieldsValue({
          note: "Hi, man!",
        });
        return;

      case "female":
        form.setFieldsValue({
          note: "Hi, lady!",
        });
        return;

      case "other":
        form.setFieldsValue({
          note: "Hi there!",
        });
        return;
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  const onSubmit = (values) => {
    // console.log(values);
    dispatch(
      createCountryRequest(
        values.countryName,
        values.description,
        values.upload[0].name ? values.upload[0].name : ''
      )
    );
    // dispatch(fetchDataCountryRequest())
    onReset()
    closeModal()
  };

  const normFile = (e) => {
    // console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <>
      <div className={isDisplay ? "wrap-modal active" : "wrap-modal"}>
        <div
          className={
            isDisplay
              ? "modal-form login country active"
              : "modal-form login country"
          }
          id="loginModal"
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
                <Form form={form} name="control-hooks" onFinish={onSubmit}>
                  <Form.Item
                    name="countryName"
                    label="Country name"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input maxLength={90} />
                  </Form.Item>
                  <Form.Item name={["description"]} label="Description">
                    <Input.TextArea maxLength={250} />
                  </Form.Item>
                  <Form.Item
                    name="upload"
                    label="Upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                  >
                    <Upload name="logo" action="/upload.do" listType="picture">
                      <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="btn-ant-modal-submit">
                      Create
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                      Reset
                    </Button>
                  </Form.Item>
                </Form>
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
});

export default connect(mapState)(Modal);
