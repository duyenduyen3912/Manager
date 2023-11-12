import { Avatar, Col, Row, Form, Input, DatePicker } from "antd";
import styles from "./styles.module.scss";
import HistoryMedicine from "./historypatient";
interface PatientDetailProps {}

const PatientDetail = () => {
  const [form] = Form.useForm<{}>();
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  return (
    <>
      <div className={styles.wrap}>
        <h3>Thông tin bệnh nhân</h3>
        <div className={styles.form}>
          <Form
            form={form}
            wrapperCol={{ span: 20 }}
            onFinish={onFinish}
            layout="vertical"
          >
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item label="Mã số" name="idPatient">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Họ và tên"
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
              <Col span={8}>
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
              <Col span={8}>
                <Form.Item
                  label="Gmail"
                  name="gmail"
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
              <Col span={8}>
                <Form.Item
                  label="Ngày sinh"
                  name="dateOfBirth"
                  rules={[
                    {
                      required: true,
                      message: "Please input your information!",
                    },
                  ]}
                >
                  <DatePicker />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Giới tính"
                  name="sex"
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
              <Col span={8}>
                <Form.Item label="Địa chỉ" name="Address">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Ngày khám gần nhất"
                  name="date"
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
              <Col span={24}>
                <Form.Item label="Ghi chú (nếu có)" name="note">
                  <Input.TextArea showCount maxLength={100} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>{" "}
      <HistoryMedicine />
    </>
  );
};

export default PatientDetail;
