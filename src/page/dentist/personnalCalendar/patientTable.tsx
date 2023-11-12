import styles from "./styles.module.scss";
import React from "react";
import { Form, Input, Table, Tag, Tooltip, Button } from "antd";
import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  CaretRightOutlined,
  SearchOutlined,
  CaretLeftOutlined,
} from "@ant-design/icons";
import type { ColumnsType,TableProps } from "antd/es/table";
import { Link } from "react-router-dom";

interface DataType {
  key: string;
  name: string;
  phone: number;
  state: number;
  content: string;
  idMedicine: string;
  dentalName: string;
  records: number;
}

interface PatientTableProps {}

const columns: ColumnsType<DataType> = [
  {
    title: "Họ tên",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Số điện thoại",
    dataIndex: "phone",
    key: "phone",
  },

  {
    title: "Trạng thái",
    key: "state",
    dataIndex: "state",
    render: (_, { state }) => {
      let color;
      let text;

      if (state === 0) {
        color = "#1890ff";
        text = "Khám lần đầu";
      } else if (state === 1) {
        color = "#87d068";
        text = "Tái khám";
      } 

      return (
        <>
          <Tag color={color}>{text}</Tag>
        </>
      );
    },
  },
  {
    title: "Nội dung",
    dataIndex: "content",
    key: "content",
  },
  {
    title: "Mã số khám bệnh",
    dataIndex: "idMedicine",
    key: "idMedicine",
  },
  {
    title: "Nha sĩ phụ trách",
    dataIndex: "dentalName",
    key: "dentalName",
    filters: [
      {
        text: 'Nguyen Van A',
        value: 'Nguyen Van A',
      },
      {
        text: 'Nguyen Van B',
        value: 'Nguyen Van B',
      },
      {
        text: 'Nguyen Van C',
        value: 'Nguyen Van C',
      },
    ],
    onFilter: (value: any, rec) => rec.dentalName.indexOf(value) === 0,
  //  onFilter: (value: string, record) => record.dentalName.indexOf(value) === 0,
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => {
      return (
        <Link to={`/patient/examinationInfor`}>
          <button className="btn">Chi tiết</button>
        </Link>
      );
    },
  },
  {
    //record = 0 => chưa đến lượt khám
    //record = 1 => đã khám xong
    //record = 2 => bỏ lỡ lượt khám
    title: "",
    key: "status",
    render: (_, { records }) => {
      let icon = null;
      if (records === 1) {
        icon = (
          <Tooltip title="Đã khám" placement="rightTop">
            <CheckCircleTwoTone
              twoToneColor="#87d068"
              style={{ fontSize: "21px" }}
            />
          </Tooltip>
        );
      }
      if (records === 0) icon = null;
      if (records === 2)
        icon = (
          <Tooltip title="Bỏ lượt" placement="rightTop">
            <CloseCircleTwoTone
              twoToneColor="#ff0000"
              style={{ fontSize: "21px" }}
            />
          </Tooltip>
        );

      return <>{icon}</>;
    },
  },
];
const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    phone: 123456789,
    state: 0,
    content: "đau lợi",
    idMedicine: "01023",
    dentalName:"Nguyen Van A",
    records: 0,
  },
  {
    key: "2",
    name: "Jim Green",
    phone: 123456789,
    state: 1,
    content: "đau lợi",
    idMedicine: "01023",
    dentalName:"Nguyen Van B",
    records: 1,
  },
  {
    key: "3",
    name: "Joe Black",
    phone: 123456789,
    state: 1,
    content: "đau lợi",
    idMedicine: "01023",
    dentalName:"Nguyen Van C",
    records: 2,
  },
];
const onFinish = (values: any) => {
  console.log("Success:", values);
};

type FieldType = {
  text?: string;
};
const PatientTable = () => {
  return (
    <>
      <div className={styles.patientTableWrap}>
        <div className={styles.btnGroup}>
          <div>
            <button className="btn">
              <CaretLeftOutlined />
            </button>
            <input className={styles.input} />
            <button className="btn">
              <CaretRightOutlined />
            </button>
          </div>

          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            className={styles.form}
          >
            <Form.Item<FieldType> name="text" className={styles.formItem}>
              <Input className={styles.input} placeholder="Tìm kiếm ở đây" />
            </Form.Item>
            <Form.Item className={styles.formItem}>
              <Button className={styles.button} htmlType="submit">
                <SearchOutlined />
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className={styles.table}>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </>
  );
};

export default PatientTable;
