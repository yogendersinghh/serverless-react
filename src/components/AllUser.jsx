import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Button,Table ,message} from "antd"


const AllUser = () => {
  const [userData, setUserData] = useState([]);
  const [updateData, setUpdateData] = useState(false)

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/dev/api/getAll");
      setUserData(data);
    })();
  }, [updateData]);
  const deleteUser = async (id) => {
    const del = await axios.delete("/dev/api/deleteUser/" + id);
    console.log("data is deleted", del);
    if (del.data.input.affectedRows > 0) {
      message.success("user deleted successfully");
      setUpdateData(!updateData)
    }
  };
  const dataSource = userData;
  const columns = [
    {
      title: "FirstName",
      dataIndex: "FirstName",
    },
    {
      title: "Last Name",
      dataIndex: "Last Name",
    },
    {
      title: "idContacts",
      dataIndex: "idContacts",
    },
    {
      title: "OrgnizationId",
      dataIndex: "Organizatin_idOrganization",
    },
    
      {
        title: "Actions",
        dataIndex: "actions",
        render: (text, record) => (
          <>
            <Button
            type="primary"
            >
            <Link to={`/update-user/${record.idContacts}`}>
            <i class="fa-solid fa-pen-to-square"></i>
              </Link>
            </Button>
            <Button
              type="danger"
              onClick={(e) => {
                console.log("record",record)
                deleteUser(record.idContacts);
              }}
            >
              <i className="fa-solid fa-trash-can"></i>
            </Button>
            
          </>
        ),
      },
    
  ]
  return (
    <>
      <h1>Contacts Information</h1>
        <Table columns={columns} dataSource={dataSource} pagination={false} />

    </>
  );
};

export default AllUser;
