// eslint-disable-next-line
import React, { FormEvent, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useDispatch, connect } from "react-redux";
import {
  onShowModal,
  openNotification,
  resetStatusAdmin,
} from "../../../../redux/actions";
import axios from "axios";
import ModalPlace from "../../ModalPlace/ModalPlace";
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
  fetchDataPlaceRequest,
  deletePlaceItemRequest,
  sendDataRowIntoStore,
  onCloseModal,
  getDataRowTableRequested,
} from "../../../../redux/actions/index";

const Place = (props) => {
  const dispatch = useDispatch();
  const { dataPlace } = props.dataPlace;
  console.log('dataPlace', dataPlace)
  // console.log('dataCountry', dataCountry)
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
    dispatch(fetchDataPlaceRequest());
    dispatch(onCloseModal(false));
  }, []);

  const data = [];

  if (dataPlace && dataPlace.data) {
    dataPlace.data.map((item, index) => {
      data.push({
        countryId: item.countryId,
        key: item._id,
        countryName: item.country,
        placeName: item.name,
        description: item.description,
        image: item.image,
      });
    });
  }

  const onDelete = (id) => {
    dispatch(deletePlaceItemRequest(id));
  };

  const columns = [
    {
      title: "Country name",
      dataIndex: "countryName",
      width: 200,
    },
    {
      title: "Place name",
      dataIndex: "placeName",
      width: 200,
    },
    {
      title: "Description",
      dataIndex: "description",
      width: 300,
    },
    {
      title: "Image",
      dataIndex: "image",
      width: 300,
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
                to={`/admin/place/${record.key}/edit`}
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
        openNotification(statusAdmin, "Success", message);
      } else {
        openNotification(statusAdmin, "Failed", message);
      }
    }
    dispatch(resetStatusAdmin());
  }, [statusAdmin, keyAdminModal]);

  // toast.success("You succeeced")

  return (
    <>
      {/* {statusCreate ? <ToastContainer success/> : '' } */}

      {/* <div className="notify">
      <div className="body">
        <p className="title">Notification</p>
        <p className="desc">I will never close automatically. This is a purposely very very long description that has many many characters and words.</p>
      </div>

    </div> */}
      {isDisplay ? <ModalPlace dataRow={dataRow} /> : ""}
      {/* {isDisplay ? <ModalPlace /> : ""} */}
      <Link
        to={`/admin/place/add`}
        onClick={showModalAddNew}
        className="btn-create"
      >
        Create new place
      </Link>

      <Spin spinning={loading} delay={500}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 5 }}
          onChange={handleChange}
          scroll={{ x: "max-content" }}
        />
      </Spin>
      <Link className=" btn-back" to={`/`}>
        {" "}
        <span className="icon arrowBack">
          {" "}
          <i className="fa fa-angle-double-left "></i>{" "}
        </span>{" "}
        Back to home page
      </Link>
    </>
  );
};

const mapState = (state) => ({
  dataPlace: state.place,
  loading: state.country,
  isDisplay: state.displayModal,
  statusCreate: state.country,
  message: state.place,
  statusAdmin: state.place,
  keyAdminModal: state.place,
});

export default connect(mapState)(Place);
