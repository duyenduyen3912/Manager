import { Button, Select, Modal } from "antd";
import { setDayLength, setStatusDisplay } from "../../../action/dentist";
import type { SelectProps } from "antd";
import { CaretRightOutlined, CaretLeftOutlined } from "@ant-design/icons";

import styles from "./style.module.scss";
import { useDispatch } from "react-redux";
import { useState } from "react";
import moment from "moment";
import dayjs from "dayjs";
import { DAY } from "../../../util/constant";
import AddSurgery from "../../../components/modal";

interface TProps {
  filter?: any;
  setFilter?: Function;
  payload?: number;
  setPayload?: Function;
  setValue?: Function;
}
function Filter(props: TProps) {
  const { filter, setFilter, payload, setPayload, setValue } = props;
  //  console.log("filter: ", filter);

  const onChange = (value: string) => {
    //  console.log(`selected ${value}`);
  };
  const onSearch = (value: string) => {};
  const dispatch = useDispatch();
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
  return (
  
    <>
      <div className={styles.row1}>
        {" "}
        <span className={styles.col}>
          <button
            className="btn-none-boder "
            onClick={
              () => {
                //   setValue?.(() => dayjs());
                setFilter?.((prev: any) => ({
                  ...prev,
                  start: moment(prev.start, DAY).subtract(1, "days"),
                }));
              }
              //
            }
          >
            <CaretLeftOutlined />
          </button>
          <Button
            className={styles.btnFilter}
            onClick={() => {
              setValue?.(() => dayjs());
              setFilter?.((prev: any) => ({
                ...prev,
                start: moment(),
              }));
            }}
          >
            {" "}
            Hôm nay
          </Button>
          <button
            className="btn-none-boder "
            onClick={() =>
              setFilter?.((prev: any) => ({
                ...prev,
                start: moment(prev.start, DAY).add(1, "days"),
              }))
            }
          >
            <CaretRightOutlined />
          </button>
        </span>
        <span className={styles.col}>
          <Button className={styles.btnChoosen} onClick={showModal}>
            Đăng ký lịch 
          </Button>
        </span>
        <span className={styles.col}>
          {" "}
          <Button
            className={`${
              filter?.status_display == "many"
                ? styles.btnChoosen
                : styles.btnUsually
            }`}
            onClick={() => {
              setFilter?.((prev: any) => ({
                ...prev,
                status_display: "many",
                dayLength: 5,
              }));
              dispatch(setStatusDisplay("many"));
              dispatch(setDayLength(5));
            }}
          >
            Hiển thị bình thường
          </Button>
          <Button
            className={`${
              filter?.status_display == "one"
                ? styles.btnChoosen
                : styles.btnUsually
            }`}
            onClick={() => {
              setFilter?.((prev: any) => ({
                ...prev,
                status_display: "one",
                dayLength: 1,
              }));
              dispatch(setStatusDisplay("one"));
              dispatch(setDayLength(1));
            }}
          >
            Hiển thị một ngày
          </Button>
        </span>{" "}
      </div>

      <div className={styles.select}>
        <div className={styles.selectItem}>
          <label>Bệnh nhân:</label>
          <Select
            showSearch
            style={{ width: "40vh" }}
            placeholder="Chọn bệnh nhân"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "tom",
                label: "Tom",
              },
            ]}
          />
        </div>

        <div className={styles.selectItem}>
          <label>Nha sĩ:</label>
          <Select
            showSearch
            style={{ width: "40vh" }}
            placeholder="Chọn nha sĩ"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "tom",
                label: "Tom",
              },
            ]}
          />
        </div>
        <AddSurgery
          visible={isModalOpen}
          onCancel={handleModalCancel}
          onOk={handlseModalOk}
        />
          {/* <AddSurgery />
        </Modal> */}
      </div>
    </>
  );
}

export default Filter;
