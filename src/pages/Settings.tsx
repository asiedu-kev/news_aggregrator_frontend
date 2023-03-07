import React, { useEffect, useState } from "react";
import axiosService from "../services/axios";
import { Button, Form, Input, message } from "antd";
import { store } from "../store";
import { UserOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import FilterComponent from "../components/FilterComponent";
import { useUserActions } from "../hooks/user.actions";

export const Settings = () => {
  const [countries, setCountries] = useState([]);
  const { account } = store.getState().auth;
  const [form] = useForm();
  const userActions = useUserActions();

  useEffect(() => {
    fetchCountries();
    if (account != null) {
      form.setFieldValue("email", account.owner.email);
      form.setFieldValue("first_name", account.owner.first_name);
      form.setFieldValue("last_name", account.owner.last_name);
      form.setFieldValue("country", account.country);
    }
  }, []);

  const fetchCountries = () => {
    axiosService
      .get("https://restcountries.com/v2/all")
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => {
        message.error(err.message);
      });
  };

  const onFinish = (values) => {
    if (values.country == undefined) {
      form.setFieldValue("country", account.country);
    }
    userActions
      .updateUser(
        account.id,
        values.first_name,
        values.last_name,
        values.email,
        values.country
      )
      .catch((error) => {
        message.error(error.response?.data?.data[0]);
      });
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-left py-12 sm:px-6 lg:px-0">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <Form
              onFinish={onFinish}
              name="basic"
              layout="vertical"
              autoComplete="off"
              form={form}
            >
              <Form.Item label="Email" name="email">
                <Input
                  size="large"
                  prefix={<UserOutlined />}
                  value={"hrr"}
                  disabled
                />
              </Form.Item>

              <Form.Item label="First Name" name="first_name">
                <Input size="large" prefix={<UserOutlined />} disabled />
              </Form.Item>
              <Form.Item label="Last Name" name="last_name">
                <Input size="large" prefix={<UserOutlined />} disabled />
              </Form.Item>

              <Form.Item label="Country" name="country">
                <FilterComponent
                  selectAction={(val) => form.setFieldValue("country", val)}
                  data={countries}
                  defaultValue={account.country}
                  placeholder={"Select a country"}
                />
              </Form.Item>

              <Form.Item className="items-center justify-center flex">
                <Button type="primary" htmlType="submit" ghost block>
                  Update
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
