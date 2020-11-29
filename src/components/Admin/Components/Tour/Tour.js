// eslint-disable-next-line
import React, { FormEvent, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useDispatch, connect } from "react-redux";
import {
  fetchAllToursRequest,
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
  fetchDataTourRequest,
  deleteTourItemRequest,
  sendDataRowIntoStore,
  onCloseModal,
  getDataRowTableRequested,
} from "../../../../redux/actions/index";
import ModalTour from "../../ModalTour/ModalTour";
import formatPrice from "../../../../utilies/FormatNumber";

const Tour = (props) => {
  const dispatch = useDispatch();
  const { dataAllTours } = props.dataAllTours;
  // console.log('dataAllTours', dataAllTours)
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
    // console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
  };



  const sendRecordToModal = (data) => {
    dispatch(onShowModal(true));

    dispatch(sendDataRowIntoStore(data));
  };

  const onChange = (pagination, filters, sorter, extra) => {};

  useEffect(() => {
    dispatch(fetchAllToursRequest());
    dispatch(onCloseModal(false));
  }, []);

  const data = [];
  // console.log('dataAllTours', dataAllTours)

  if (dataAllTours && dataAllTours) {
    dataAllTours.map((item, index) => {
      data.push({
        key: item._id,
        countryId: item.countryId,
        countryName: item.country,
        placeId: item.placeId,
        placeName: item.place,
        tourName: item.name,
        checkIn: item.checkIn,
        checkOut: item.checkOut,
        price: formatPrice(item.price),
        member: item.member,
        description: item.description,
        image: item.images,
        // images: 
      });
    });
  }

  const onDelete = (id) => {
    dispatch(deleteTourItemRequest(id));
  };

  const columns = [
    {
      title: "Country name",
      dataIndex: "countryName",
      width: 300,
    },
    {
      title: "Place name",
      dataIndex: "placeName",
      width: 300,
    },
    {
      title: "Tour name",
      dataIndex: "tourName",
      width: 300,
    },
    {
      title: "Checkin day",
      dataIndex: "checkIn",
      width: 300,
    },
    {
      title: "Checkout day",
      dataIndex: "checkOut",
      width: 300,
    },
    {
      title: "Price",
      dataIndex: "price",
      width: 300,
    },
    {
      title: "Member quantity",
      dataIndex: "member",
      width: 300,
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
      render: image => (
        <span>
          {
            image.map((item, index) => {
              return (
                <small key={index}> {item} </small>
              )
            })
          }
        </span>
      )
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
                to={`/admin/tour/${record.key}/edit`}
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
      {isDisplay ? <ModalTour dataRow={dataRow} /> : ""}
      {/* {isDisplay ? <ModalPlace /> : ""} */}
      <Link
        to={`/admin/tour/add`}
        onClick={showModalAddNew}
        className="btn-create"
      >
        Create new tour
      </Link>

      <Spin spinning={loading} delay={500}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 1 }}
          onChange={handleChange}
          scroll={{ x: "max-content" }}
          // onRow = { (record, rowIndex) => {
          //   return {
          //     onClick: e => {
          //       console.log('record', record)
          //     }
          //   }

          //   // setDataRow(record)

          // }

          // }
        />
      </Spin>

      {/* {dataSource ? (
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 5 }}
          onChange={handleChange}
        />
      ) : (
        "Loading..."
      )} */}

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
  dataAllTours: state.tour,
  loading: state.country,
  isDisplay: state.displayModal,
  statusCreate: state.country,
  message: state.tour,
  statusAdmin: state.tour,
  keyAdminModal: state.tour,
});

export default connect(mapState)(Tour);
