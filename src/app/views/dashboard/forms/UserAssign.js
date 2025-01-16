import React, { useState, useEffect, useContext } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { styled } from "@mui/material/styles";
import { ToastContainer, toast } from "react-toastify";
import { Box, Button } from "@mui/material";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import CreateAssign from "./CreateAssign";
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

const UserAssign = () => {
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState(null);
  const handleSelect = (user) => {
    setSelectedUser(user);
  };
  return (
    <>
      <Container>
        <Box>
          <h3>List of all account assignment</h3>
        </Box>
        <table className="table">
          <thead>
            <tr style={{ textDecoration: "underline 2px" }}>
              <th style={{ fontSize: "15px" }}>Short Name</th>
              <th style={{ fontSize: "15px" }}>Email</th>
              <th style={{ fontSize: "15px" }}>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="statement-key">OlukemAy@gmail.com</td>
              <td className="statement-key">Olukemi Ayomide</td>
              <td className="statement-key">
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() =>
                    handleSelect({
                      username: "Olukemi Ayomide",
                      email: "OlukemAy@gmail.com",
                      // other user details
                    })
                  }
                >
                  Select
                </Button>
                {/*}   <FaEdit
                  style={{
                    cursor: "pointer",
                    marginRight: "10px",
                    color: "blue",
                  }}
                />
                <FaTrash style={{ cursor: "pointer", color: "red" }} />*/}
              </td>

              <td></td>
            </tr>
            <tr>
              <td className="statement-key">OlukemAy@gmail.com</td>
              <td className="statement-key">Olukemi Ayomide</td>
              <td className="statement-key">
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() =>
                    handleSelect({
                      username: "Olukemi Ayomide",
                      email: "OlukemAy@gmail.com",
                      // other user details
                    })
                  }
                >
                  Select
                </Button>
                {/*}   <FaEdit
                  style={{
                    cursor: "pointer",
                    marginRight: "10px",
                    color: "blue",
                  }}
                />
                <FaTrash style={{ cursor: "pointer", color: "red" }} />*/}
              </td>

              <td></td>
            </tr>
          </tbody>
        </table>
        {selectedUser && (
          <CreateAssign
            user={selectedUser}
            closeModal={() => setSelectedUser(null)}
          />
        )}
        {/*}  <EditUser />*/}

        <ToastContainer />
      </Container>
    </>
  );
};

export default UserAssign;
