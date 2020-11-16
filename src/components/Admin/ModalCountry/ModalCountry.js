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
import {
  createCountryRequest,
  fetchDataCountryRequest,
  changeStatusEdit,
  updateInfoCountryItemRequest,
} from "../../../redux/actions/index";
import countries from "../../../countries";
import axios from "axios";
const { Option } = Select;
const { Dragger } = Upload;

const ModalCountry = (props) => {
  const dispatch = useDispatch();
  const { isDisplay } = props.isDisplay;
  const { match } = props;
  const { selectItem, setSelectItem } = useState("");
  const { textareaItem, setTextAreaItem } = useState("");

  const [statusUpload, setStatusUpload] = useState(true);
  const [image, setImage] = useState('')

  const [fileUpload, setFileUpload] = useState("");
  const { history } = props;
  const { loading } = props.loading;
  // const [inputDataRow, setInputDataRow] = useState(null);
  const { dataRow } = props.dataRow;
  const { statusEdit } = props.statusEdit;

  const formRef = React.createRef();
  const [form] = Form.useForm();

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

  

  // const customRequest = async (option) => {
  //   const { onSuccess, onError, file, action, onProgress } = option;
  //   const url = action;

  //   await new Promise((resolve) => waitUntilImageLoaded(resolve)); //in the next section

  //   const type = "image/png";
  //   axios
  //     .put("http://localhost:8000/countries", fileUpload, {
  //       onUploadProgress: (e) => {
  //         onProgress({ percent: (e.loaded / e.total) * 100 });
  //       },
  //       headers: {
  //         "Content-Type": type,
  //       },
  //     })
  //     .then((respones) => {
  //       /*......*/
  //       onSuccess(respones.body);
  //     })
  //     .catch((err) => {
  //       /*......*/
  //       onError(err);
  //     });
  // };

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

  const normFile = (e) => {
    // console.log("e", e);
    setFileUpload(e.fileList[0].name);

    if (e.fileList.length >= 2) {
      // setStatusUpload(true)
    } else {
      // setStatusUpload(false)
    }
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

  // console.log('selectItem', selectItem)
  // console.log('textareaItem', textareaItem)

  useEffect(() => {
    // console.log("useEffectModal");
    // const id = match.params.id;
    // if (id == "8mt43q3kf6") {
    //   console.log("new");
    // } else {
    //   console.log("edit");
    // }
  }, [dataRow]);

  // const onChangeUpload = (info) => {
  //   const { status } = info.file;
  //   if (status !== "uploading") {
  //     console.log(info.file, info.fileList);
  //   }
  //   if (status === "done") {
  //     message.success(`${info.file.name} file uploaded successfully.`);
  //   } else if (status === "error") {
  //     message.error(`${info.file.name} file upload failed.`);
  //   }
  // }

  var fileReader = new FileReader();


  const onChangeUpload = (info) => {
    if (!fileReader.onloadend) {
      fileReader.onloadend = (obj) => {
        setImage(obj.srcElement.result)
       
      };
    // can be any other read function ( any reading function from
    // previously created instance can be used )
    fileReader.readAsArrayBuffer(info.file.originFileObj);
    }
  };

  const customRequest = async option => {
    const { onSuccess, onError, file, action, onProgress } = option;
    const url = action;
  
    await new Promise(resolve => waitUntilImageLoaded(resolve)); //in the next section 
    // const { image } = state; // from onChange function above
    const type = 'image/png';
    axios
      .put(url, Image, {
        onUploadProgress: e => {
          onProgress({ percent: (e.loaded / e.total) * 100 });
        },
        headers: {
          'Content-Type': type,
        },
      })
      .then(respones => {
        /*......*/
        onSuccess(respones.body);
      })
      .catch(err => {
        /*......*/
        onError(err);
      });
  };

  
  
   const waitUntilImageLoaded = resolve => {
    setTimeout(() => {
      image
        ? resolve() // from onChange method
        : waitUntilImageLoaded(resolve);
    }, 10);
  };
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
                      // initialValue = {dataRow && dataRow.name ? dataRow.name : ''}
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
                        // defaultValue= {dataRow && dataRow.name ? dataRow.name : 'name'}
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
                      // initialValue=  {dataRow && dataRow.description ? dataRow.description : ''}
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

                    <Dragger
                    onChange={onChangeUpload}
                    customRequest={customRequest}
                    >
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
                    </Dragger>

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
  dataRow: state.country,
  statusEdit: state.country,
});

export default connect(mapState)(ModalCountry);
