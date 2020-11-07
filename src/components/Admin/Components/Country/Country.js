// eslint-disable-next-line
import React, { FormEvent, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useDispatch, connect } from "react-redux";
import { onShowModal } from "../../../../redux/actions";
import axios from "axios";
import Modal from "../../Modal/Modal";
import { Spin, Alert, Popconfirm } from "antd";
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
  onCloseModal,
} from "../../../../redux/actions/index";

const Country = (props) => {
  const dispatch = useDispatch();
  const dataCountry = props.dataCountry.dataCountry;
  // console.log('dataCountry', dataCountry)
  const { loading } = props.loading;
  const [dataSource, setDataSource] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    // console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
  };

  const showModal = (e) => {
    dispatch(onShowModal(true));
  };

  const onChange = (pagination, filters, sorter, extra) => {};

  useEffect(() => {
    console.log("useEffect1");
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
        // images: item.images && item.images.map((item, index) => {
        //   return (
        //     <span key={index}>

        //     {item.name}
        //     </span>
        //   )
        // })
        // image: item.image
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
      filters: [
        { text: "nghiêm", value: "nghiêm" },
        { text: "sang", value: "sang" },
      ],
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      ellipsis: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      width: 150,
    },
    {
      title: "Image",
      dataIndex: "image",
      width: 200
    },
    {
      title: "",
      key: "action",
      width: 300,

      render: (text, record) => (
        <>
          <div className="action">
          <span className="block view">
            <span className="icon">
            <i class="fa fa-eye"></i>
            </span>
            <Link
              type="button"
              className="btn-delete btn-show"
              to="/admin/country/"
            >
              Show
            </Link>
          </span>
          <span className="block edit">
            <span className="icon">
              <i className="fa fa-trash-o"></i>
            </span>
            <Link
              type="button"
              className="btn-delete btn-edit"
              to={`/admin/country/${record.key}/edit`}
              onClick={showModal}
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
  // console.log('loading', loading)

  return (
    <>
      <Modal />
      <Link to="/admin/country/add" onClick={showModal} className="btn-create">
        Create new country
      </Link>

      <Spin spinning={loading} delay={500}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 5 }}
          onChange={handleChange}
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
    </>
  );
};

const mapState = (state) => ({
  dataCountry: state.country,
  loading: state.country,
});

export default connect(mapState)(Country);
