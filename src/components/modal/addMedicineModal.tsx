import React, { useState } from "react";
import { Form, Input, Button, Col, Row, Modal,Upload } from "antd";
import { PlusOutlined } from '@ant-design/icons';
interface AddMedicineModalProp {
  visible: boolean;
  onCancel: () => void;
  onOk: () => void;
}
const layout = {
  labelCol: { span: 16 },
  wrapperCol: { span: 20 },
};

const AddMedicineModal = ({ visible, onCancel, onOk }: AddMedicineModalProp) => {
  const [form] = Form.useForm<{}>();
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
//upload image
const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
  return (
    <>
      <Modal visible={visible} onCancel={onCancel} onOk={onOk} width={800} footer={null} title="Thêm sản phẩm mới">
        <Form {...layout} form={form} onFinish={onFinish} layout="vertical">
          <Row>
            <Col span={12}>
              <Form.Item label="Mã số" name="idMedicine">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Tên thuốc" name="medicineName">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                label="Dạng thuốc"
                name="medicineForm"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Liều lượng" name="amoumt">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="Cách sử dụng" name="using">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Tác dụng phụ" name="sideEffects">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="Thành phần hoạt chất chính" name="ingredient">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Giá tiền" name="price">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="Xuất xứ" name="origin">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Mã vạch" name="code">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 18 }}>
            <Button type="primary" htmlType="submit">
              Thêm mới
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddMedicineModal;
