import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ToastContainer, toast } from "react-toastify";
import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Breadcrumb, SimpleCard } from "app/components";
import SimpleTable from "app/views/material-kit/tables/SimpleTable";
import { SessionContext } from "app/components/MatxLayout/SwitchContext";
import CreateUser from "./CreateUser";
import { FaEdit, FaTrash } from "react-icons/fa";
import EditUser from "./EditUser";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const UserAdmin = () => {
  const navigate = useNavigate();

  const [selectedUser, setSelectedUser] = useState(null);

  const [states, setStates] = useState({
    checkedA: false,
    checkedB: true,
    checkedC: false,
    checkedD: true,
    checkedE: true,
    checkedF: true,
    checkedG: false,
    checkedH: false,
    checkedI: false,
    checkedJ: false,
    checkedK: false,
    checkedL: true,
    checkedM: false,
    checkedN: false,
    checkedO: false,
    checkedP: false,
    checkedQ: false,
    checkedR: false,
    checkedS: false,
    checkedT: false,
    checkedU: false,
    checkedV: false,
    checkedW: false,
  });

  const apiUrl = process.env.REACT_APP_API_URL.trim();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/get-users`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming the JWT token is stored in localStorage
          },
        });
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Container>
      <Box>
        <h2>Application user</h2>
      </Box>

      <Box className="breadcrumb">
        <CreateUser />
      </Box>
      <table className="table">
        <thead>
          <tr style={{ textDecoration: "underline 2px" }}>
            <th style={{ fontSize: "15px" }}>Short Name</th>
            <th style={{ fontSize: "15px" }}>Full Name</th>
            <th style={{ fontSize: "15px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="statement-key">{user.email}</td>
              <td className="statement-key">{user.fullname}</td>
              <td className="statement-key">{/* Edit and Delete actions */}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <EditUser
          user={selectedUser}
          closeModal={() => setSelectedUser(null)}
        />
      )}
      <ToastContainer />
    </Container>
  );
};

export default UserAdmin;
