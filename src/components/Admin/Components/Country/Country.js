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

import {
  fetchDataCountryRequest,
  deleteCountryItemRequest,
} from "../../../../redux/actions/index";
import { Link } from "react-router-dom";

const Country = (props) => {
  const dispatch = useDispatch();
  const dataCountry = props.dataCountry.dataCountry;
  const loading = props.loading.loading;
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
    dispatch(fetchDataCountryRequest());
  }, []);


  console.log('dataCountry', dataCountry)
  const data = [];
  if (dataCountry) {
    dataCountry.map((item, index) => {  
      data.push({
        key: item.id,
        name: item.name,
        description: item.description,
        images: item.images && item.images.map((item, index) => {
          return (
            <p key={index}>
            
            {item.name}
            </p>
          )
        })
      });
    });
  }

  const onDelete = (id) => {
    dispatch(deleteCountryItemRequest(id))
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
      title: "Images",
      dataIndex: "images",
    },
    {
      title: "Action",
      key: "action",
      width: 150,

      render: (text, record) => (
        <Popconfirm
          title="Sure to cancel?"
          onConfirm={() => onDelete(record.key)}
        >
          <a>Delete</a>
        </Popconfirm>
      ),
    },
  ];

  return (
    <>
      <Modal />
      <button className="btn-create" onClick={showModal}>
        Create new country
      </button>

      {dataSource ? (
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 5 }}
          onChange={handleChange}
        />
      ) : (
        "Loading..."
      )}
    </>
  );
};

const mapState = (state) => ({
  dataCountry: state.country,
  loading: state.country,
});

export default connect(mapState)(Country);
