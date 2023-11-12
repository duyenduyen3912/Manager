import styles from "./styles.module.scss";
import { useState } from "react";
import { Form, Input, Table, Tag, Tooltip, Button } from "antd";

import type { ColumnsType } from "antd/es/table";
import Ex from "./example";
import AddMedicineModal from "../../../components/modal/addMedicineModal";
import EditMedicineModal from "../../../components/modal/editMedicineModal";
interface DataType {
  key: string;
  medicineName: string; //tên thuốc
  medicineForm: string; // dạng thuốc
  amount: number; //liều lượng
  using: string; //cách sử dụng
  idMedicine: string; //mã thuốc
  ingredient: string; //thành phần chính
  sideEffect?: string; //tác dụng phụ
  barcode: string; //mã code
  labeler_name?: string; // công ty sản xuất
  origin?: string; // xuất xứ
  price: number; //giá
}
interface MedicineProps {}

const Medicine = () => {
  //set modal add new medicine
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handlseModalOk = () => {
    setIsModalOpen(false);
  };
  const handleModalCancel = () => {
    setIsModalOpen(false);
  };
  //modal edit medcine
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const showModal2 = () => {
    setIsModalOpen2(true);
  };

  const handlseModalOk2 = () => {
    setIsModalOpen2(false);
  };

  const handleModalCancel2 = () => {
    setIsModalOpen2(false);
  };
  const columns: ColumnsType<DataType> = [
    {
      title: "Mã số",
      dataIndex: "idMedicine",
      key: "idMedicine",
      fixed: "left",
      width: 100,
    },
    {
      title: "Tên thuốc",
      dataIndex: "medicineName",
      key: "medicineName",
      fixed: "left",
      width: 170,
    },
    {
      title: "Phân loại",
      dataIndex: "medicineForm",
      key: "medicineForm",
      width: 100,
    },

    {
      title: "Liều lượng",
      key: "amount",
      dataIndex: "amount",
      width: 100,
    },
    {
      title: "Cách sử dụng",
      dataIndex: "using",
      key: "using",
      width: 100,
    },

    {
      title: "Thành phần hoạt chất chính",
      dataIndex: "ingredient",
      key: "ingredient",
      width: 220,
    },

    {
      title: "Tác dụng phụ",
      dataIndex: "sideEffect",
      key: "sideEffect",
      width: 190,
    },
    {
      title: "Mã vạch",
      dataIndex: "barcode",
      key: "barcode",
      width: 100,
    },
    {
      title: "Công ty sản xuất",
      dataIndex: "labeler_name",
      key: "labeler_name",
      width: 140,
    },
    { title: "Xuất xứ", dataIndex: "origin", key: "origin", width: 100 },
    {
      title: "giá tiền",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
      width: 100,
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 100,
      render: (_, record) => (
        <button
          className="btn"
          onClick={() => {
            showModal2();
          }}
        >
          Chi tiết
        </button>
      ),
    },
  ];
  const data: DataType[] = [
    {
      key: "1",
      medicineName: "Thuốc kháng sinh",
      medicineForm: "viên",
      amount: 1,
      using: "Sau ăn",
      idMedicine: "01023",
      ingredient: "ví dụ",
      price: 45000,
      sideEffect: "không có",
      origin: "Việt Nam",
      barcode: "0615-8252",
      labeler_name: "Công ty TNHH Trafaco",
    },
    {
      key: "2",
      medicineName: "Thuốc kháng sinh",
      medicineForm: "Chai",
      amount: 1,
      using: "Sau ăn",
      idMedicine: "01023",
      ingredient: "ví dụ",
      price: 450000,
      sideEffect: "không có",
      barcode: "0615-8252",
    },
    {
      key: "3",
      medicineName: "Thuốc kháng sinh",
      medicineForm: "Viên",
      amount: 2,
      using: "Sau ăn",
      idMedicine: "01023",
      ingredient: "ví dụ",
      price: 10000,
      origin: "Việt Nam",
      barcode: "0615-8252",
    },
  ];
  return (
    <>
      {" "}
      <div className={styles.wrap}>
        <div className={styles.btn}>
          {" "}
          <Button className="btn" onClick={showModal}>
            Thêm mới
          </Button>
        </div>
        <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
      </div>
      {/* <Ex /> */}
      <AddMedicineModal
        visible={isModalOpen}
        onCancel={handleModalCancel}
        onOk={handlseModalOk}
      />
      <EditMedicineModal
        visible={isModalOpen2}
        onCancel={handleModalCancel2}
        onOk={handlseModalOk2}
      />
    </>
  );
};

export default Medicine;
//HistoryMedicine
