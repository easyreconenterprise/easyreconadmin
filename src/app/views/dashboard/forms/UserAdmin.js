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

const initialState = {
  affiliateId: "",
  domainId: "",
  internalAccount: "",
  externalAccount: "",
  accountTitle: "",
  shortTitle: "",
  currency: "",
  internalRecord: "",
  externalRecord: "",
  balanceAsPerLedger: "",
  balanceAsPerStmt: "",
  balanceAsPerLedgerDate: "",
  balanceAsPerStatementDate: "",
  accountCode: "",
  accountClass: "",
};

const UserAdmin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [classData, setClassData] = useState([]);
  const { switchSession } = useContext(SessionContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [affiliates, setAffiliates] = useState([]);
  const [domains, setDomains] = useState([]);

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
  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  useEffect(() => {
    const fetchAffiliates = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/affiliates`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        });
        setAffiliates(response.data);
      } catch (err) {
        console.error("Error fetching affiliates:", err);
        toast.error("Error fetching affiliates");
      }
    };
    fetchAffiliates();
  }, [apiUrl]);

  useEffect(() => {
    const fetchDomains = async () => {
      if (formData.affiliateId) {
        try {
          const token = localStorage.getItem("jwtToken");
          const response = await axios.get(
            `${apiUrl}/api/domains/${formData.affiliateId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`, // Ensure this line includes the correct token
              },
            }
          );
          setDomains(response.data);
        } catch (err) {
          console.error("Error fetching domains:", err);
          toast.error("Error fetching domains");
        }
      }
    };
    fetchDomains();
  }, [formData.affiliateId, apiUrl]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const token = localStorage.getItem("jwtToken");

  //   try {
  //     const response = await axios.post(`${apiUrl}/api/account`, formData, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     const createdAccount = response.data; // Assuming the response contains the created account details

  //     toast.success("Account successfully created");

  //     // Switch to the newly created account as the current session
  //     const newSession = {
  //       affiliate: formData.affiliateId,
  //       domain: formData.domainId,
  //       account: createdAccount._id,
  //       month: formData.balanceAsPerLedgerDate, // Use the ledger date for the month
  //     };
  //     await switchSession(newSession); // Update the session in context

  //     navigate("/dashboard/upload-excel-led"); // Navigate after successful session switch
  //   } catch (err) {
  //     console.error("Error creating account:", err);
  //     toast.error("Unable to create account");
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwtToken");

    try {
      // Create the account
      const response = await axios.post(`${apiUrl}/api/account`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Account successfully created");

      // Navigate based on balances
      if (formData.balanceAsPerLedger && formData.balanceAsPerLedger !== "0") {
        navigate("/dashboard/upload-excel-led"); // Upload ledger file
      } else if (
        formData.balanceAsPerStmt &&
        formData.balanceAsPerStmt !== "0"
      ) {
        navigate("/dashboard/upload-excel-led"); // Upload statement file
      } else {
        toast.info("No balances detected. Please review account details.");
      }
    } catch (err) {
      console.error("Error creating account:", err);
      if (err.response && err.response.data && err.response.data.error) {
        toast.error(err.response.data.error); // Display backend error message
      } else {
        toast.error("Unable to create account");
      }
    }
  };

  const handleChanges = (name) => (event) => {
    setStates((prevState) => ({ ...prevState, [name]: event.target.checked }));
  };
  const isSuspenseAccount = states.checkedC; // Update according to your checkbox names

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
          <tr>
            <td className="statement-key">OlukemAy@gmail.com</td>
            <td className="statement-key">Olukemi Ayomide</td>
            <td className="statement-key">
              <FaEdit
                style={{
                  cursor: "pointer",
                  marginRight: "10px",
                  color: "blue",
                }}
                onClick={() =>
                  handleEdit({
                    username: "Olukemi Ayomide",
                    email: "OlukemAy@gmail.com",
                    // other user details
                  })
                }
              />
              <FaTrash style={{ cursor: "pointer", color: "red" }} />
            </td>

            <td></td>
          </tr>
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
