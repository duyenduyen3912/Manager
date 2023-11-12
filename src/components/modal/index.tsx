import React from "react";
import { useState } from "react";
import {
  TimePicker,
  Col,
  Row,
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  Checkbox,
  Modal,
} from "antd";

import styles from "./styles.module.scss";
//import { userName, ID } from "../../../util/constant";
const { Option } = Select;
interface AddSurgeryProps {
  visible: boolean;
  userName?: string;
  onCancel: () => void;
  onOk: () => void;
}

const AddSurgery = ({ visible, onCancel, onOk,userName }: AddSurgeryProps) => {
  console.log(userName);
  
  const [form1] = Form.useForm();
  const [form2] = Form.useForm();
  const [showForm2, setShowForm2] = useState(false); // Sử dụng state để quản lý hiển thị Form thứ 2
  const [formData, setFormData] = useState<any>({});
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const handleClassificationChange = (value: string) => {
    // Kiểm tra giá trị của trường "Phân loại lịch" và hiển thị/ẩn Form thứ 2
    if (value === "value1") {
      setShowForm2(true); // Hiển thị Form thứ 2 nếu giá trị là "Lịch phẫu thuật"
      form2.resetFields();
    } else {
      setShowForm2(false); // Ẩn Form thứ 2 nếu giá trị không phải "Lịch phẫu thuật"
    }
  };

  const handleSave = () => {
    const form1Values = form1.getFieldsValue();
    const form2Values = form2.getFieldsValue();
    console.log("form1Values", form1Values);
    console.log("form2Values", form2Values);

    setFormData({
      ...form1Values,
      ...form2Values,
    });
    // console.log("Data to be saved:", formData);
  };

  return (
    <>
      <Modal
        visible={visible}
        onCancel={onCancel}
        onOk={onOk}
        width={591}
        footer={null}
      >
        {" "}
        <div className={styles.wrap}>
          <div className={styles.wrapInfor}>
            <div className={styles.form}>
              <Form
                form={form1}
                wrapperCol={{ span: 24 }}
                onFinish={onFinish}
                layout="vertical"
              >
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      label="Phân loại lịch"
                      name="type"
                      rules={[
                        {
                          required: true,
                          message: "Please input your information!",
                        },
                      ]}
                    >
                      <Select
                        placeholder="Phân loại"
                        onChange={handleClassificationChange}
                      >
                        <Option value="value1">Lịch khám</Option>
                        <Option value="value2">Lịch họp</Option>
                        <Option value="value3">Nghỉ</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Họ và tên"
                      initialValue={userName || undefined}
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your information!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      label="Ngày"
                      name="day"
                      rules={[
                        {
                          required: true,
                          message: "Please input your information!",
                        },
                      ]}
                      style={{ width: "100%" }}
                    >
                      <DatePicker />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Thời gian"
                      name="time"
                      rules={[
                        {
                          required: true,
                          message: "Please input your information!",
                        },
                      ]}
                      style={{ width: "100" }}
                    >
                      <TimePicker.RangePicker format="HH:mm"/>
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item label="Nội dung" name="content">
                  <Input.TextArea showCount maxLength={100} />
                </Form.Item>
              </Form>
            </div>
            {showForm2 && (
              <div className={styles.form}>
                <Form
                  form={form2}
                  wrapperCol={{ span: 24 }}
                  onFinish={onFinish}
                  layout="vertical"
                >
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        label="Tên bệnh nhân"
                        name="usename"
                        rules={[
                          {
                            required: true,
                            message: "Please input your information!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        label="Số điện thoại"
                        name="phone"
                        rules={[
                          {
                            required: true,
                            message: "Please input your information!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        label="Ngày"
                        name="day"
                        rules={[
                          {
                            required: true,
                            message: "Please input your information!",
                          },
                        ]}
                        style={{ width: "100%" }}
                      >
                        <DatePicker />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        label="Thời gian"
                        name="time"
                        rules={[
                          {
                            required: true,
                            message: "Please input your information!",
                          },
                        ]}
                        style={{ width: "100" }}
                      >
                        <TimePicker.RangePicker />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item label="Nội dung" name="certificate">
                    <Input.TextArea showCount maxLength={100} />
                  </Form.Item>

                  <Row>
                    <Col span={24}></Col>
                  </Row>
                </Form>{" "}
              </div>
            )}{" "}
            <Button className="second-btn" onClick={handleSave}>
              Lưu
            </Button>
          </div>
        </div>
      </Modal>{" "}
    </>
  );
};

export default AddSurgery;
