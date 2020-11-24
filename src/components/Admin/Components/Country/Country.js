// eslint-disable-next-line
import React, { FormEvent, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useDispatch, connect } from "react-redux";
import { onShowModal,resetStatusAdmin,openNotification } from "../../../../redux/actions";
import axios from "axios";
import ModalCountry from "../../ModalCountry/ModalCountry";
import { Spin, Alert, Popconfirm, notification } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./../Spin/Spin";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import {
  fetchDataCountryRequest,
  deleteCountryItemRequest,
  sendDataRowIntoStore,
  onCloseModal,
  getDataRowTableRequested,
} from "../../../../redux/actions/index";

const Country = (props) => {
  const dispatch = useDispatch();
  const { dataCountry } = props.dataCountry;
  const { loading } = props.loading;
  const [dataRow, setDataRow] = useState(null);
  const [filteredInfo, setFilteredInfo] = useState({});
  const { history } = props;
  const { isDisplay } = props.isDisplay;
  const { statusCreate } = props.statusCreate;
  const { message } = props.message;
  const { keyAdminModal } = props.keyAdminModal;
  const { statusAdmin } = props.statusAdmin;


  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
  };

  const sendRecordToModal = (data) => {
    dispatch(onShowModal(true));

    dispatch(sendDataRowIntoStore(data));
  };


  const onChange = (pagination, filters, sorter, extra) => {};

  useEffect(() => {
    dispatch(fetchDataCountryRequest());
    dispatch(onCloseModal(false));
  }, []);

  const data = [];

  if (dataCountry && dataCountry.data) {
    dataCountry.data.map((item, index) => {
      data.push({
        key: item._id,
        name: item.name,
        description: item.description,
        image: item.image
      });
    });
  }

  const onDelete = (id) => {
    dispatch(deleteCountryItemRequest(id));
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: 150,
    },
    {
      title: "Description",
      dataIndex: "description",
      width: 300,
    },
    {
      title: "Image",
      dataIndex: "image",
      width: 200,
    },
    {
      title: "",
      key: "action",
      width: 400,

      render: (text, record) => (
        <>
          <div className="action">
            <span className="block edit">
              <span className="icon">
                <i className="fa fa-trash-o"></i>
              </span>

              <Link
                type="button"
                className="btn-delete btn-edit"
                to={`/admin/country/${record.key}/edit`}
                onClick={() => sendRecordToModal(record)}
              >
                Edit
              </Link>
            </span>
            <span className="block delete">
              <span className="icon">
                <i className="fa fa-pencil"></i>
              </span>
              <Popconfirm
                title="Sure to cancel?"
                onConfirm={() => onDelete(record.key)}
              >
                <a className="btn-delete">Delete</a>
              </Popconfirm>
            </span>
          </div>
        </>
      ),
    },
  ];

  const showModalAddNew = () => {
    dispatch(onShowModal(true));
  };
 

  useEffect(() => {
    if (keyAdminModal !== 0) {
      if (statusAdmin) {
        openNotification(
          statusAdmin,
          "Success",
          message
        );
      } else {
        openNotification(statusAdmin, "Failed", message);
      }
    }
    dispatch(resetStatusAdmin());
  }, [statusAdmin, keyAdminModal]);

  return (
    <>
      {isDisplay ? <ModalCountry dataRow={dataRow} /> : ""}
      <Link
        to={`/admin/country/add`}
        onClick={showModalAddNew}
        className="btn-create"
      >
        Create new country
      </Link>

      <Spin spinning={loading} delay={500}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 5 }}
          onChange={handleChange}
          scroll={{ x: "max-content" }}
        />
        <Link className=" btn-back" to={`/`}>
          {" "}
          <span className="icon arrowBack">
            {" "}
            <i className="fa fa-angle-double-left "></i>{" "}
          </span>{" "}
          Back to home page
        </Link>
      </Spin>
    </>
  );
};

const mapState = (state) => ({
  dataCountry: state.country,
  loading: state.country,
  isDisplay: state.displayModal,
  statusCreate: state.country,
  message: state.country,
  statusAdmin: state.country,
  keyAdminModal: state.country,
});

export default connect(mapState)(Country);
