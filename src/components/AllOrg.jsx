import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Button,Table,message} from "antd"

const AllOrg = () => {
  const [orgData, setOrgData] = useState([]);
  const [updateData, setUpdateData] = useState(false)

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/dev/api/getAllOrg");
      setOrgData(data);
    })();
  }, [updateData]);
  const deleteOrg = async (id) => {
    axios.delete("/dev/api/deleteOrg/" + id).then(res=>{
        message.success(res.data.message)
      setUpdateData(!updateData)
    }).catch(err => {
        message.error("Contact is associated with this organization ID")
    })

  };
  console.log("orgData",orgData)
  const dataSource = orgData;
  const columns = [
    {
      title: "OrganizationId",
      dataIndex: "idOrganization",
    },
    {
      title: "Organization Name",
      dataIndex: "OrganizationName",
    },
    {
      title: "Phone",
      dataIndex: "Phone",
    },
    {
      title: "Email",
      dataIndex: "Email",
    },
    
    {
      title: "City",
      dataIndex: "City",
    }, {
      title: "Country",
      dataIndex: "Country",
    },
      {
        title: "Actions",
        dataIndex: "actions",
        render: (text, record) => (
          <>
            <Button
            type="primary"
            >
            <Link to={`/update-org/${record.idOrganization}`}>
            <i class="fa-solid fa-pen-to-square"></i>
              </Link>
            </Button>
            <Button
              type="danger"
              onClick={(e) => {
                console.log("record",record)
                deleteOrg(record.idOrganization);
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
      <h1>Organization Information</h1>
        <Table columns={columns} dataSource={dataSource} pagination={false} />

    </>
  );
};

export default AllOrg;
