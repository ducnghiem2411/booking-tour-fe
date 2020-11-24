import React, { FormEvent, useEffect, useState, useRef } from "react";
// import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
  onCloseModal,
  openNotification,
  resetStatusAdmin,
} from "../../../redux/actions/index";
import { Form, Input, Button, Select } from "antd";
import { Spin } from "antd";
import {
  createCountryRequest,
  changeStatusEdit,
  updateInfoCountryItemRequest,
} from "../../../redux/actions/index";
import countries from "../../../countries";
const { Option } = Select;

const ModalCountry = (props) => {
  const dispatch = useDispatch();
  const { isDisplay } = props.isDisplay;
  const [file, setFileImage] = useState('')

  const { history } = props;
  const { loading } = props.loading;
  const { dataRow } = props.dataRow;
  const { statusEdit } = props.statusEdit;

  const { statusAdmin } = props.statusAdmin;
  const { keyAdminModal } = props.keyAdminModal;
  const { message } = props.message;

  const [form] = Form.useForm();

  const onChangeImg = e => {
    setFileImage(e.target.files[0])
  }

  const closeModal = () => {
    dispatch(onCloseModal(false));
    form.resetFields();
    dispatch(changeStatusEdit());
    history && history.push("/admin/country");
  };

  const handleChange = (value) => {};

  const onSubmit = (values) => {
    if (statusEdit) {
      dispatch(updateInfoCountryItemRequest(dataRow.key, values));
    } else {
      dispatch(createCountryRequest(values.countryName, values.description, file));
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

  useEffect(() => {}, [dataRow]);

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
  statusAdmin: state.country,
  keyAdminModal: state.country,
  message: state.country,
});

export default connect(mapState)(ModalCountry);
