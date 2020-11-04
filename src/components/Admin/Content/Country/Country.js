// eslint-disable-next-line
import React, { FormEvent, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useDispatch, connect } from "react-redux";
import { onShowModal } from "../../../../redux/actions";
import axios from "axios";
import Modal from "./../../Modal/Modal";
import { Spin, Alert } from 'antd';

import {fetchDataCountryRequest} from './../../../../redux/actions/index'

const columns = [
  {
    title: "STT",
    dataIndex: "stt",
    key: 'stt'
  },
  {
    title: "Name",
    dataIndex: "name",
    key: 'name',
    // filters: [
    //   {
    //     text: "Joe",
    //     value: "Joe",
    //   },
    //   {
    //     text: "Jim",
    //     value: "Jim",
    //   },
    //   {
    //     text: "Submenu",
    //     value: "Submenu",
    //     children: [
    //       {
    //         text: "Green",
    //         value: "Green",
    //       },
    //       {
    //         text: "Black",
    //         value: "Black",
    //       },
    //     ],
    //   },
    // ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Description",
    dataIndex: "description",
    defaultSortOrder: "descend",
    key: 'description'
    // sorter: (a, b) => a.age - b.age,
  },

  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    // filters: [
    //   {
    //     text: "London",
    //     value: "London",
    //   },
    //   {
    //     text: "New York",
    //     value: "New York",
    //   },
    // ],
    // filterMultiple: false,
    // onFilter: (value, record) => record.address.indexOf(value) === 0,
    // sorter: (a, b) => a.address.length - b.address.length,
    // sortDirections: ["descend", "ascend"],
  },
];

const Country = (props) => {
  const dispatch = useDispatch();
  const { dataCountry } = props.dataCountry;
  const { loading } = props.loading;
  // const [dataSource, setDataSource] = useState([])

  const dataSource = dataCountry.map((item, index) => {
    return {
      key: item.id,
      stt: item.id,
      name: item.name,
      description: item.description,
      image: item.image
    }
  })



  // setDataSource(dataCountry)

  const showModal = (e) => {
    dispatch(onShowModal(true));
  };

  const onChange = (pagination, filters, sorter, extra) => {
    // console.log("params", pagination, filters, sorter, extra);
  };

  useEffect(() => {
    // console.log('fetch country')
    dispatch(fetchDataCountryRequest())
   
  }, [dataCountry]);

  


  console.log("dataItem" , dataSource)
  console.log("dataCountry" , dataCountry)

  return (
    <>
      <Modal />
      <button className="btn-create" onClick={showModal}>
        Create new country
      </button>

      {/* {loading ? (
        <Spin tip="Loading..."></Spin>
        
      ) : ( */}
        <Table columns={columns} dataSource={dataSource} onChange={onChange} />
      {/* )} */}
    </>
  );
};


const mapState = (state) => ({
  dataCountry : state.country,
  loading: state.country
})

export default  connect(mapState)(Country);
