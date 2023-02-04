import React from 'react'
import {BsArrowDownRight,BsArrowUpRight} from 'react-icons/bs'
import { Column } from '@ant-design/plots';
import {  Table } from 'antd';
const columns = [
  {
    title: 'No',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Product',
    dataIndex: 'product',
  },
   {
    title: 'Status',
    dataIndex: 'status',
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}
const Dashboard = () => {
  const data = [
    {
      type: 'Jan',
      sales: 138,
    },
    {
      type: 'Feb',
      sales: 72,
    },
    {
      type: 'March',
      sales: 81,
    },
    {
      type: 'April',
      sales: 145,
    },
    {
      type: 'June',
      sales: 148,
    },
    {
      type: 'July',
      sales: 108,
    },
    {
      type: 'Aug',
      sales: 150,
    },
    {
      type: 'Sep',
      sales: 78,
    },
    {
      type: 'Oct',
      sales: 118,
    },
    {
      type: 'Nov',
      sales: 128,
    },
    {
      type: 'Dec',
      sales: 78,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    color: ({ type }) => {
      return "#ffd333";
    },
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Months',
      },
      sales: {
        alias: 'Incomes',
      },
    },
  };
  return (
    <div>
      <h3 className="mb-4 title">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
    <div className='d-flex bg-white flex-grow-1  p-3 rounded-3 justify-content-between  align-items-end'>
      <div>
        <p className=' desc'>Total</p>
        <h4  className='mb-0 sub-title'>$1100</h4>
      </div>
      <div className='d-flex flex-column align-items-end'>
        <h6 className='green'><BsArrowUpRight className='me-2'/>32%</h6>
        <p className='mb-0 desc'>Compare to April 2022</p>
      </div>
    </div>
    <div className='d-flex bg-white flex-grow-1  p-3 rounded-3 justify-content-between  align-items-end'>
    <div>
    <p className='desc'>Total</p>
        <h4  className='mb-0 sub-title'>$1100</h4>
    </div>
      <div className='d-flex flex-column align-items-end'>
      <h6 className="red"><BsArrowDownRight className='me-2'/>32%</h6>
      <p className='mb-0 desc'>Compare to April 2022</p>
      </div>
    </div>
    <div className='d-flex bg-white flex-grow-1 p-3 rounded-3 justify-content-between  align-items-end'>
    <div>
    <p className='desc'>Total</p>
        <h4 className='mb-0 sub-title'>$1100</h4>
    </div>
      <div className='d-flex flex-column align-items-end'>
      <h6 className='green'><BsArrowUpRight className='me-2'/>32%</h6>
      <p className='mb-0 desc'>Compare to April 2022</p>
      </div>
    </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4">Incomes Statics</h3>
      <div>
      <Column {...config} />
      </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4">
          Recent Orders
        </h3>
        <div>
        <Table columns={columns} dataSource={data1} />;
        </div>
      </div>
    
    </div>
  )
}

export default Dashboard