import React from "react";
import { Button, Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";
const { Text } = Typography;

function RegisterComponent() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
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
      >
        <h3 className="text-black text-xl font-semibold mb-4">Register</h3>
        <Form.Item
          label="First Name"
          name="first_name"
          rules={[{ required: true, message: "This field is required." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="last_name"
          rules={[{ required: true, message: "This field is required." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="username"
          rules={[{ required: true, message: "This field is required." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "This field is required." }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item className="flex items-center justify-center">
          <Button type="primary" htmlType="submit" ghost>
            SignUp
          </Button>
        </Form.Item>
        <p className="flex text-black text-sm mb-4 items-center justify-center">
          Do you have already an account ?
          <Text underline className="ml-1 text-primary">
            <Link to="/login">Login</Link>
          </Text>
        </p>
      </Form>
    </div>
  );
}

export default RegisterComponent;
