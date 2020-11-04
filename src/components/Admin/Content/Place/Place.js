// import React from "react";
// import ReactDOM from 'react-dom';
// import { Table } from "antd";
// import { ColumnsType } from 'antd/es/table';



// const columns = [
//   {
//     title: 'STT',
//     dataIndex: 'stt'
//   },
//   {
//     title: "Name",
//     dataIndex: "name",
//     filters: [
//       {
//         text: "Joe",
//         value: "Joe",
//       },
//       {
//         text: "Jim",
//         value: "Jim",
//       },
//       {
//         text: "Submenu",
//         value: "Submenu",
//         children: [
//           {
//             text: "Green",
//             value: "Green",
//           },
//           {
//             text: "Black",
//             value: "Black",
//           },
//         ],
//       },
//     ],
//     // specify the condition of filtering result
//     // here is that finding the name started with `value`
//     onFilter: (value , record) => record.name.indexOf(value) === 0,
//     sorter: (a, b) => a.name.length - b.name.length,
//     sortDirections: ["descend"],
//   },
//   {
//     title: "Place",
//     dataIndex: "age",
//     defaultSortOrder: "descend",
//     sorter: (a, b) => a.age - b.age,
//   },
//   {
//     title: "Images",
//     dataIndex: "address",
//     filters: [
//       {
//         text: "London",
//         value: "London",
//       },
//       {
//         text: "New York",
//         value: "New York",
//       },
//     ],
//     filterMultiple: false,
//     onFilter: (value, record) => record.address.indexOf(value) === 0,
//     sorter: (a, b) => a.address.length - b.address.length,
//     sortDirections: ["descend", "ascend"],
//   },
// ];

// const data = [
//   {
//     stt: '1',
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//   },
  
// ];






// const Place = () => {
    

//     const onChange = (pagination, filters, sorter, extra) => {
//         console.log('params', pagination, filters, sorter, extra);
//       }


//   return (
//     <>
//     place
//       <Table columns={columns} dataSource={data} onChange={onChange} />
//     </>
//   );
// };

// export default Place;

import React from 'react'

const Place = () => {

  return (

    <>

    </>
  )
}

export default Place
