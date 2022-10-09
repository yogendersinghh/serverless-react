import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import AllUser from "./components/AllUser";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";
import CreateOrg from "./components/CreateOrg";
import AllOrg from "./components/AllOrg";
import "antd/dist/antd.css";


function App() {
  return (
    <>
      <div>
        <nav style={{display:"flex",justifyContent:"space-between",width:"50%"}}>
          <Link to="/">All Contacts</Link>
          <Link to="/org">All Organization</Link>
          <Link to="/create-user">CreateUser</Link>
          <Link to="/create-org">Create Organization</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<AllUser />} />
        <Route path="/org" element={<AllOrg />} />

        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/create-org" element={<CreateOrg />} />
        <Route path="/update-user/:id" element={<UpdateUser />} />
      </Routes>
    </>
  );
}

export default App;
