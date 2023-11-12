import type { ColumnsType } from "antd/es/table";
import Table from "antd/es/table";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss"
import BreadCrumb from "../../../components/Breadcrumb";
interface PatientsProps {}
interface DataType {
  id: number;
  name: string;
  phone: number;
  date?: string; //ngày khấm gần nhất
  content?: string;
}
const collums: ColumnsType<DataType> = [
  { title: "Mẫ số", dataIndex: "id", key: "id" },
  { title: "Họ tên", dataIndex: "name", key: "name" },
  { title: "Số điện thoại", dataIndex: "phone", key: "phone" },
  { title: "Ngày khám gần nhất", dataIndex: "date", key: "date" },
  { title: "Nội dung", dataIndex: "content", key: "content" },
  {
    // title: "Action",
    key: "action",
    render: (_, record) => {return(<>
    <Link  to={"/patients/detail"}>  <button className="btn">Chi tiết</button></Link>
  </>) },
  },
];
const data: DataType[] = [
  {
    id: 1,
    name: "John Brown",
    date: "23/06/2023",
    phone: 123,
    content: "khám lại lợi",
  },
  {
    id: 1,
    name: "John Brown",
    // date:"23/06/2023",
    phone: 123,
    content: "Đau răng khôn",
  },
  {
    id: 1,
    name: "John Brown",
    date: "23/06/2023",
    phone: 123,
    content: "khám lại lợi",
  },
  {
    id: 1,
    name: "John Brown",
    date: "23/06/2023",
    phone: 123,
    content: "khám lại lợi",
  },
];
const Patients = () => {
  return <>
  <BreadCrumb/>
  <div className={styles.wrap}> <Table columns={collums} dataSource={data}/></div>
 
  </>;
};

export default Patients;
