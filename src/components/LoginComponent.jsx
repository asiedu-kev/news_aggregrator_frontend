import React from "react";
import { Button, Form, Input, Row, Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Text } = Typography;

function LoginComponent() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };
  return (
    <div className="flex flex-col w-full bg-gradient-to-r from-indigo-700 to-indigo-500 items-center justify-center h-screen">
      <h2 className="text-white text-xl font-semibold mb-4">
        News Aggregrator
      </h2>
      <Form
        onFinish={onFinish}
        name="basic"
        className="bg-white shadow-md px-8 pt-6 pb-8 mb-4  rounded-lg w-1/3"
        layout="vertical"
        autoComplete="off"
      >
        <Row className="justify-between">
          <h3 className="text-black text-xl font-semibold mb-4">Login</h3>
          <Text underline className="ml-1 text-primary">
            <Link to="/register">Register</Link>
          </Text>
        </Row>

        <Form.Item
          label="Email"
          name="username"
          rules={[{ required: true, message: "This field is required." }]}
        >
          <Input size="large" prefix={<UserOutlined />} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "This field is required." }]}
        >
          <Input.Password size="large" prefix={<LockOutlined />} />
        </Form.Item>

        <Form.Item className="items-center justify-center flex">
          <Button type="primary" htmlType="submit" ghost="true" block="true">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginComponent;
