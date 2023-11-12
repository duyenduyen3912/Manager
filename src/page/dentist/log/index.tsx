import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import styles from "./styles.module.scss";
interface LogInProps {}
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const LogIn = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className={styles.loginContainer}>
        <Form
          {...layout}
          form={form}
          name="login"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <h1>Dental Clinic</h1>
          <Form.Item
            label="só điện thoại"
            name="phone"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input placeholder="Phone Number" />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" style={{marginRight:"10px"}}>
              Đăng nhập
            </Button>
            <Button  htmlType="submit">
              Quên mật khẩu
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default LogIn;
