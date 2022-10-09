import axios from "axios";
import React from "react";
import { useState } from "react";
import {
  Form,
  Input,
  Button,
  Space,
  message
} from "antd";
const { Item } = Form;

const CreateUser = () => {
  const [form] = Form.useForm();

  const [newUser, setNewUser] = useState({
    FirstName: "",
    "Middle Name": "",
    "Last Name": "",
    Country: "",
    Organizatin_idOrganization: 0,
  });
  const changeHandler = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    axios
      .post("/dev/api/contact-create", newUser)
      .then((res) => 
        {
          message.success(res.data.message)
        setNewUser({
          FirstName: "",
          "Middle Name": "",
          "Last Name": "",
          Country: "",
          Organizatin_idOrganization: 0,
        });}
      )
      .catch((err) => {
          message.error(err.response.data.message)
      });
  };
  return (
    <>
      <h1>Contacts Detail</h1>

<Form form={form} layout="vertical">
        <Space direction="vertical" size={12}>
          <Space direction="horizontal" size={100}>
            <Item
              label="FirstName"
              rules={[
                { required: "true", message: "please provide user FirstName!" },
              ]}
            >
              <Input
                placeholder="please write FirstName"
                name="FirstName"
                value={newUser.FirstName}
                onChange={(e) => {
                  changeHandler(e);
                }}
              />
            </Item>

            <Item
              label="Middle Name"
              rules={[
                { required: "true", message: "please provide user Middle Name!" },
              ]}
            >
              <Input
                placeholder="please write your Middle Name"
                name="Middle Name"
                value={newUser["Middle Name"]}
                onChange={(e) => {
                  changeHandler(e);
                }}
              />
            </Item>
           

            <Item
              label="Last Name"
              rules={[
                { required: "true", message: "please provide user Last Name!" },
              ]}
            >
              <Input
                placeholder="please write your Last Name"
                name="Last Name"
                value={newUser['Last Name']}
                onChange={(e) => {
                  changeHandler(e);
                }}
              />
            </Item>
          </Space>
          <Space size={100}>
            <Item
              label="Organizatin_idOrganization"
              rules={[
                { required: "true", message: "please provide user Organizatin_idOrganization!" },
              ]}
            >
              <Input
                placeholder="please write your Organizatin_idOrganization"
                name="Organizatin_idOrganization"
                value={newUser['Organizatin_idOrganization']}
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
                value={newUser.Country}
                onChange={(e) => {
                  changeHandler(e);
                }}
              />
            </Item>
          </Space>

         <Space>
         <Button
         onClick={(e)=>{submitHandler(e)}}
         type="primary"
          >
            Submit
          </Button>
         </Space>
        </Space>
      </Form>
    </>
  );
};

export default CreateUser;
