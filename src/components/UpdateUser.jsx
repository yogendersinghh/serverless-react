import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Space,
  message,
} from "antd";
const { Item } = Form;

const UpdateUser = () => {
  const [form] = Form.useForm();

  const params = useParams();
  const [existingUser, setExistingUser] = useState({
    FirstName: "",
    "Middle Name": "",
    "Last Name": "",
    Country: "",
    Organizatin_idOrganization: 0,
  });
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/dev/api/getone/${params.id}`);
      console.log("🚀 ~ file: UpdateUser.jsx ~ line 18 ~ data", data[0]);
      setExistingUser(data[0]);
    })();
  }, []);
  const changeHandler = (e) => {
    setExistingUser({ ...existingUser, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
   await axios.post(
      `/dev/api/update-user/${params.id}`,
      existingUser
    );
  message.success("User updated successfully")
  };
  return (
    <>
    <h1>Edit Contact Info.</h1>
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
                value={existingUser.FirstName}
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
                value={existingUser["Middle Name"]}
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
                value={existingUser['Last Name']}
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
                value={existingUser['Organizatin_idOrganization']}
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
                value={existingUser.Country}
                onChange={(e) => {
                  changeHandler(e);
                }}
              />
            </Item>
          </Space>

         <Space>
         <Button
         onClick={(e)=>{submitHandler(e)}}
          >
            Edit
          </Button>
         </Space>
        </Space>  
      </Form>

    </>
  );
};

export default UpdateUser;
