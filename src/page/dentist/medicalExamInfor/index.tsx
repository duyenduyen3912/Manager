import { Button, Row, Col, Input, Form, DatePicker } from "antd";
import styles from "./styles.module.scss";
import Teeth from "../../../components/teeth";
import { Link } from "react-router-dom";

interface ExamInforProps {}

const ExamInfor = () => {
  const [form] = Form.useForm<{}>();
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  return (
    <>
      <div className={styles.wrapTitle}>
        <div className={styles.title}>
          <h3>Thông tin khám bệnh</h3>
        </div>
        <div className={styles.btnGroup}>
          <div className={styles.btn}>
            {" "}
            <Link to={`/patient/reExamination`}>
              {" "}
              <Button className="btn">Đặt lịch tái khám </Button>
            </Link>
          </div>
          {/* <div className={styles.btn}>
            <Link to={`/surgeryCalendar`}>
              <Button className="btn">Đặt lịch phẫu thuật </Button>
            </Link>
          </div> */}
          <div className={styles.btn}>
            {" "}
            <Button className="sucess-btn">Khám thành công </Button>
          </div>
          <div className={styles.btn}>
            {" "}
            <Button className="warning-btn">Hủy lượt </Button>
          </div>
        </div>
      </div>
      <div className={styles.wrap}>
        <div className={styles.title2}>
          <h3>Thông tin bệnh nhân</h3>
          <span style={{ fontStyle: "italic" }}>(Khám lần đầu)</span>
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
                  <DatePicker />
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
                <Form.Item label="Ghi chú (nếu có)" name="note">
                  <Input.TextArea showCount maxLength={100} />
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

export default ExamInfor;
