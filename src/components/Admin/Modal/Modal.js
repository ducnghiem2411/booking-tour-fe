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
import {
  createCountryRequest,
  fetchDataCountryRequest,
} from "../../../redux/actions/index";
import countries from './../../../countries'
const { Option } = Select;


const Modal = (props) => {
  const dispatch = useDispatch();
  const { isDisplay } = props.isDisplay;
 
  const [statusUpload, setStatusUpload] = useState(true)
  const {history} = props

  const closeModal = () => {
    
    dispatch(onCloseModal(false));
    dispatch(onChangeStatusCreateAccModal(false));
    onReset();
    history && history.push('/admin/country')

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
    // console.log("values", values);
    
    dispatch(
      createCountryRequest(
        values.countryName,
        values.description ? values.description : "",
        values.image ? values.image[0].name : ''
      )
    );
    onReset();
    closeModal();
    history && history.push('/admin/country')
  };

  const normFile = (e) => {
    console.log("e", e);
    
      if(e.fileList.length >= 2){
        // setStatusUpload(true)
      }else{
        // setStatusUpload(false)
      }
    
      
  };

  const onChange = (value) => {
    // console.log(`selected ${value}`);
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
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
      setStatusUpload(false)
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
      setStatusUpload(false)
    }
    if(isJpgOrPng && isLt2M){
      setStatusUpload(true)
    }
   
  }

 


  console.log('statusUpload', statusUpload)
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
                <Form form={form} name="control-hooks" onFinish={onSubmit}>
                <Form.Item name="countryName" label="Country name" rules={[{ required: true }]}>
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    placeholder="Select a country"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    allowClear
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {
                      countries ? countries.map((item, index) => {
                        return (
                          <Option value={item} key={index}>{item}</Option>
                        )
                      }) : []
                    }
                    
                    
                  </Select>
                  </Form.Item>
                  ,
                  <Form.Item name={["description"]} label="Description">
                    <Input.TextArea
                      maxLength={200}
                      placeholder="Typing description...."
                    />
                  </Form.Item>
                  <Form.Item
                    name="image"
                    label="Images"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    showUploadList={statusUpload}
                  >
                    <Upload name="logo" listType="picture" beforeUpload={beforeUpload} >

                      <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="btn-ant-modal-submit"
                    >
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
  loading: state.country
});

export default connect(mapState)(Modal);
