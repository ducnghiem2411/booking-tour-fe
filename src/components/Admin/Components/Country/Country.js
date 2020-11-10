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
  sendDataRowIntoStore,
  onCloseModal,
  getDataRowTableRequested
} from "../../../../redux/actions/index";

const Country = (props) => {
  const dispatch = useDispatch();
  const dataCountry = props.dataCountry.dataCountry;
  // console.log('dataCountry', dataCountry)
  const { loading } = props.loading;
  const [dataRow, setDataRow] = useState(null);
  const [filteredInfo, setFilteredInfo] = useState({});
  const { history } = props;
  const { isDisplay } = props.isDisplay;

  const handleChange = (pagination, filters, sorter) => {
    // console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
  };

  const sendRecordToModal = (data) => {
    dispatch(onShowModal(true));

    dispatch(sendDataRowIntoStore(data))

    // console.log('data', data)


    // dispatch(getDataRowTableRequested(data))



    // history.push(`/admin/country/${data.key}/edit`);
  };

  const onChange = (pagination, filters, sorter, extra) => {};

  useEffect(() => {
    console.log("useEffectCountry");
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
      
    },
    {
      title: "Description",
      dataIndex: "description",
      width: 150,
    },
    {
      title: "Image",
      dataIndex: "image",
      width: 200,
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
                <i className="fa fa-eye"></i>
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
    
  }

  const idAdd = '8mt43q3kf6'


  return (
    <>
       {isDisplay ? <Modal dataRow={dataRow} /> : ""}
      <Link to={`/admin/country/${idAdd}/add`} onClick={showModalAddNew} className="btn-create">
        Create new country
      </Link>

      <Spin spinning={loading} delay={500}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 5 }}
          onChange={handleChange}
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
    </>
  );
};

const mapState = (state) => ({
  dataCountry: state.country,
  loading: state.country,
  isDisplay: state.displayModal,
});

export default connect(mapState)(Country);
