import React from "react";
import styles from "./styles.module.scss";
import { DownOutlined } from "@ant-design/icons";
import type { TableColumnsType } from "antd";
import { Badge, Dropdown, Space, Table } from "antd";

interface DataType {
  key: React.Key;
  // name: string;
  method: string; //phương pháp điều trị
  toothPosition?: string; //vị trí răng
  content?: string; //nội dung
  date: string; //ngày khám
  price: number; //giá tiền
  state: string; //đã thanh toán hay chưa
}

interface ExpandedDataType {
  key: React.Key;
  medicineName: string;
  medicineForm: string;
  amount: number;
  using: string;
  priceMedicine: number;
}

const HistoryMedicine: React.FC = () => {
  const expandedRowRender = () => {
    const columns: TableColumnsType<ExpandedDataType> = [
      { title: "Tên thuốc", dataIndex: "medicineName", key: "medicineName" },
      {title: "Dạng thuốc",dataIndex:"medicineForm",key: "medicineForm"},
      { title: "Liều lượng", dataIndex: "amount", key: "amount" },
      { title: "cách sử dụng", dataIndex: "using", key: "using" },
      { title: "Giá tiền", dataIndex: "priceMedicine", key: "priceMedicine" },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i.toString(),
        medicineName: "Thuốc kháng sinh",
        medicineForm: "Viên",
        using: "sau khi đánh răng",
        amount:2,
        priceMedicine: 45000,
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  const columns: TableColumnsType<DataType> = [
    { title: "Phương pháp điều trị", dataIndex: "method", key: "method" },
    { title: "Vị trí răng", dataIndex: "toothPosition", key: "toothPosition" },
    { title: "Nội dung", dataIndex: "content", key: "content" },
    { title: "Ngày khám", dataIndex: "date", key: "date" },
    { title: "Giá tiền", dataIndex: "price", key: "price" },
    { title: "Tình trạng", dataIndex: "state", key: "state" },
  ];

  const data: DataType[] = [
    {
      key: "1",
      method: "nhổ răng",
      toothPosition: "L1,L8",
      date: "12/02/2022",
      price: 45000,
      state: "đã thanh toán",
    },
    {
      key: "2",
      method: "nhổ răng",
      toothPosition: "L1,L8",
      date: "12/02/2022",
      price: 45000,
      state: "đã thanh toán",
    },
    {
      key: "3",
      method: "niềng răng",
      toothPosition: "L1,L8",
      date: "12/02/2022",
      price: 45000,
      state: "đã thanh toán",
    },
  ];

  return (
    <>
      <div className={styles.wrap}>
        <h3>Lịch sử khám</h3>
        <Table
          columns={columns}
          expandable={{ expandedRowRender, defaultExpandedRowKeys: ["0"] }}
          dataSource={data}
        />
      </div>
    </>
  );
};

export default HistoryMedicine;
