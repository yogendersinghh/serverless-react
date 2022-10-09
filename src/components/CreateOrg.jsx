import axios from "axios";
import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  InputNumber,
  Space,
  message
} from "antd";
const { Item } = Form;


const CreateOrg = () => {
  const [form] = Form.useForm();

  const [newUser, setNewUser] = useState({
    OrganizationName: "",
    Email: "",
    Phone: "",
    City: "",
    State: "",
    Country: "",
  });
  const changeHandler = (e,name) => {
    if(name === "Phone"){
    setNewUser({ ...newUser, [name]: e });
    }else{
      setNewUser({ ...newUser, [e.target.name]: e.target.value });
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    axios.post("/dev/api/org-create", newUser).then(res => {
      console.log("🚀 ~ file: CreateOrg.jsx ~ line 38 ~ axios.post ~ res", res)
         message.success(res.data.message)
      	setNewUser({
        	OrganizationName: "",
        	Email: "",
        	Phone: "",
        	City: "",
        	State: "",
        	Country: "",
      	})
    	}).catch(err=>{
      	message.error(err.response.data.message)
    	}
    )
    
  };
  return (
    <>
      <h1>Organization Detail</h1>
 <Form form={form} layout="vertical" >
        <Space direction="vertical" size={12}>
          <Space direction="horizontal" size={100}>
            <Item
              label="OrganizationName"
              rules={[
                { required: "true", message: "please provide user OrganizationName!" },
              ]}
            >
              <Input
                placeholder="please write OrganizationName"
                name="OrganizationName"
                value={newUser.OrganizationName}
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
                value={newUser.Email}
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
                value={newUser.City}
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
                value={newUser.Phone}
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
                value={newUser.State}
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

export default CreateOrg;
