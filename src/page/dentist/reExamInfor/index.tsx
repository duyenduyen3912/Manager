import { Button, Row, Col, Input, Form, DatePicker } from "antd";
import styles from "./styles.module.scss";
import Teeth from "../../../components/teeth";
interface ReExaminationProps {}

const ReExamination = () => {
  const [form] = Form.useForm<{}>();
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  return (
    <>
      <div className={styles.wrapTitle}>
        <div className={styles.title}>
          <h3>Đặt lịch tái khám</h3>
        </div>
        <div className={styles.btnGroup}>
          <div className={styles.btn}>
            {" "}
            <Button className="btn">Lưu</Button>
          </div>
          <div className={styles.btn}>
            {" "}
            <Button className="warning-btn">Hủy</Button>
          </div>
        </div>
      </div>
      <div className={styles.wrap}>
        <div className={styles.title2}>
          <h3>Thông tin bệnh nhân</h3>
        </div>
        <div className={styles.form}>
          <Form
            form={form}
            wrapperCol={{ span: 20 }}
            onFinish={onFinish}
            layout="vertical"
          >
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item label="STT" name="idPatient">
                  <Input defaultValue={"456"} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Họ và tên" name="username">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Số điện thoại" name="phone">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item label="Địa chỉ liên hệ" name="Address">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Giới tính" name="sex">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Ngày sinh" name="date">
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item label="CCCD" name="idPatient">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Nội dung khám" name="content">
                  <Input />
                </Form.Item>
              </Col>{" "}
              <Col span={8}>
                <Form.Item label="Ngày tái khám" name="reDate">
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
      <div>
        <Teeth />
      </div>
    </>
  );
};

export default ReExamination;
