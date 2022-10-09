import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Input,InputNumber, Button, Space, message } from "antd";
const { Item } = Form;

const UpdateOrg = () => {
  const [form] = Form.useForm();

  const params = useParams();
  const [existingOrg, setExistingOrg] = useState({
    OrganizationName: "",
    Email: "",
    Phone: "",
    City: "",
    State: "",
    Country: "",
  });
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/dev/api/getone-org/${params.id}`);
      setExistingOrg(data[0]);
    })();
  }, []);
  const changeHandler = (e, name) => {
    if (e.target.name === "Phone") {
      setExistingOrg({ ...existingOrg, [name]: e });
    } else {
      setExistingOrg({ ...existingOrg, [e.target.name]: e.target.value });
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post(`/dev/api/update-org/${params.id}`, existingOrg);
    message.success("Org updated successfully");
  };
  return (
    <>
      <h1>Edit Contact Info.</h1>
      <Form form={form} layout="vertical">
        <Space direction="vertical" size={12}>
          <Space direction="horizontal" size={100}>
            <Item
              label="OrganizationName"
              rules={[
                {
                  required: "true",
                  message: "please provide user OrganizationName!",
                },
              ]}
            >
              <Input
                placeholder="please write OrganizationName"
                name="OrganizationName"
                value={existingOrg.OrganizationName}
                onChange={(e) => {
                  changeHandler(e);
                }}
              />
            </Item>

            <Item
              label="Email"
              rules={[
                { required: "true", message: "please provide user Email!" },
              ]}
            >
              <Input
                placeholder="please write your Email"
                name="Email"
                value={existingOrg.Email}
                onChange={(e) => {
                  changeHandler(e);
                }}
              />
            </Item>

            <Item
              label="City"
              rules={[
                { required: "true", message: "please provide user City!" },
              ]}
            >
              <Input
                placeholder="please write your City"
                name="City"
                value={existingOrg.City}
                onChange={(e) => {
                  changeHandler(e);
                }}
              />
            </Item>
          </Space>
          <Space direction="horizontal" size={100}>
            <Item label="Phone" rules={[{ required: "true" }]}>
              <InputNumber
                style={{ width: 180 }}
                placeholder="please fill the phone Number"
                name="Phone"
                value={existingOrg.Phone}
                onChange={(e) => {
                  changeHandler(e, "Phone");
                }}
              />
            </Item>

            <Item
              label="State"
              rules={[
                { required: "true", message: "please provide user State!" },
              ]}
            >
              <Input
                placeholder="please write your State"
                name="State"
                value={existingOrg.State}
                onChange={(e) => {
                  changeHandler(e);
                }}
              />
            </Item>

            <Item
              label="Country"
              rules={[
                { required: "true", message: "please provide user Country!" },
              ]}
            >
              <Input
                placeholder="please write your Country"
                name="Country"
                value={existingOrg.Country}
                onChange={(e) => {
                  changeHandler(e);
                }}
              />
            </Item>
          </Space>

          <Space>
            <Button
              onClick={(e) => {
                submitHandler(e);
              }}
              type="primary"
            >
              Edit
            </Button>
          </Space>
        </Space>
      </Form>
    </>
  );
};

export default UpdateOrg;
