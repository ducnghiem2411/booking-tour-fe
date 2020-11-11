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
  createPlaceRequest,
  changeStatusEdit,
  fetchDataPlaceInCountryRequest,
  updateInfoCountryItemRequest,
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
  // const [inputDataRow, setInputDataRow] = useState(null);
  const { dataRow } = props.dataRow;
  const { dataCountry } = props.dataCountry;
  // console.log("dataCountry", dataCountry);
  const { statusEdit } = props.statusEdit;
  const [idCountry, setIdCountry] = useState("")

  const formRef = React.createRef();
  const [form] = Form.useForm();

  const closeModal = () => {
    dispatch(onCloseModal(false));
    // dispatch(onChangeStatusCreateAccModal(false));
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
    var result = -1
    dataCountry.data.forEach((itemCountry, index) => {
      if (itemCountry.name === countryName) {
        result = itemCountry._id;
      }
    });

    return result;
  }

  

  const handleChange = (value) => {
    // console.log(`selected ${value}`);
    // setSelectedCountryName( )

    const id = getIdCountry(dataCountry, value)
    setIdCountry(id)
    // console.log('id', id)

    
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

  const onReset = () => {
    form.resetFields();
  };

  // console.log("fileUpload", fileUpload);
  const onSubmit = (values) => {
    if (statusEdit) {
      dispatch(updateInfoCountryItemRequest(dataRow.key, values));
    } else {
      dispatch(
        createPlaceRequest(
          idCountry,
          values.countryName,
          values.placeName,
          values.description
          // fileUpload ? fileUpload : ""
        )
      );
    }

    form.resetFields();
    closeModal();
    dispatch(changeStatusEdit());
    history && history.push("/admin/place");
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
    // console.log('value area', e.target.value)
    // setTextAreaItem(e.target.value)
  };
  const onChangePlaceName = (e) => {
    // console.log('value place name', e.target.value)
    // setTextAreaItem(e.target.value)
  };
  const onChangeSelect = (e) => {
    // setSelectItem(e && e.target.value)
  };

  // console.log('selectItem', selectItem)
  // console.log('textareaItem', textareaItem)

  useEffect(() => {
    console.log("useEffectModalPlace");
    console.log('dataCountry', dataCountry)
    dispatch(fetchDataPlaceInCountryRequest());
    // const id = match.params.id;
    // console.log("match", match);
    // if (match && id == "8mt43q3kf6") {
    //   // console.log("new");
    // } else {
    //   // console.log("edit");
    // }
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
                    {/* <Form.Item
                      name="placeName"
                      label="Place name"
                      // initialValue = {dataRow && dataRow.name ? dataRow.name : ''}
                      initialValue={statusEdit ? dataRow.name : ""}
                      rules={[
                        {
                          required: true,
                          message: "Please select place name !",
                        },
                      ]}
                    >
                      <Select
                        placeholder="Select place name pls"
                        onChange={handleChange}
                        // defaultValue= {dataRow && dataRow.name ? dataRow.name : 'name'}
                        allowClear
                      >
                        <Option value="">
                                test
                                </Option>
                        {/* {countries
                          ? countries.map((item, index) => {
                              return (
                                <Option value={item.name} key={index}>
                                  {item.name}
                                </Option>
                              );
                            })
                          : []} */}
                      {/* </Select> */}
                    {/* </Form.Item>  */}

                    <Form.Item
                      name="placeName"
                      label="Place name"
                      onChange={onChangePlaceName}
                      // initialValue=  {dataRow && dataRow.description ? dataRow.description : ''}
                      // initialValue={statusEdit ? dataRow.description : ""}
                      rules={[
                        {
                          required: true,
                          message: "Please typing place name !",
                        },
                      ]}
                    >
                      <Input placeholder="Typing place name here..." maxLength={250} />
                    </Form.Item>
                    <Form.Item
                      name="description"
                      label="Description"
                      onChange={onChangeTextarea}
                      // initialValue=  {dataRow && dataRow.description ? dataRow.description : ''}
                      // initialValue={statusEdit ? dataRow.description : ""}
                      rules={[
                        {
                          required: true,
                          message: "Please typing description !",
                        },
                      ]}
                    >
                      <Input.TextArea maxLength={250} />
                    </Form.Item>
                    {/* <Form.Item
                      name="description"
                      label="Description"
                      onChange={onChangeTextarea}
                      // initialValue=  {dataRow && dataRow.description ? dataRow.description : ''}
                      initialValue={statusEdit ? dataRow.description : ""}
                      rules={[{ required: true }]}
                    >
                      {getFieldDecorator("de", {
                        rules: [
                          {
                            required: true,
                            pattern: new RegExp("^[0-9]*$"),
                            message: "Wrong format!",
                          },
                        ],
                      })(
                        <Input
                          className="form-control"
                          type="text"
                          placeholder="Phone number"
                        />
                      )}
                    </Form.Item> */}

                    {/* <Input
                    name="description"
                    label="Description"
                    // defaultValue={dataRow ? dataRow.description : "abc"}
                    value={dataRow ? dataRow.description : "desc"}
                    onChange={onChangeTextarea}
                  /> */}

                    {/* <Form.Item
                    name="image"
                    label="Images"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    showUploadList={statusUpload}
                  >
                    <Upload
                      name="file"
                      listType="picture"
                      beforeUpload={beforeUpload}
                      customRequest={customRequest}
                    >
                      <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                  </Form.Item> */}
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
  dataCountry: state.country,
});

export default connect(mapState)(ModalPlace);
