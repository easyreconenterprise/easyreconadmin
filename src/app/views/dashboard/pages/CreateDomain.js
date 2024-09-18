import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Button, Grid, DialogTitle, styled } from "@mui/material";
import { Span } from "app/components/Typography";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useNavigate } from "react-router-dom";
import SimpleTable from "app/views/material-kit/tables/SimpleTable";

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
  domainName: "",
  domainDescription: "",
  affiliateId: "",
  domainDate: new Date(),
};

const CreateDomain = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [affiliates, setAffiliates] = useState([]);
  const { domainName, domainDescription, affiliateId, domainDate } = formData;

  const apiUrl = process.env.REACT_APP_API_URL.trim(); // Ensure API URL is correctly set in .env

  // Fetch affiliates on component mount
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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwtToken"); // Adjust this based on where you store your token

    try {
      const response = await axios.post(`${apiUrl}/api/domain`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Domain successfully created");
      navigate("/dashboard/admin"); // Navigate after successful creation
    } catch (err) {
      console.error("Error creating domain:", err);
      toast.error("Error creating domain");
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle date change
  const handleDateChange = (date) => {
    setFormData({ ...formData, domainDate: date });
  };

  return (
    <div>
      <Container>
        <Stack spacing={3}>
          <SimpleCard>
            <DialogTitle>Create New Domain</DialogTitle>

            <ValidatorForm onSubmit={handleSubmit}>
              <Grid container spacing={6}>
                <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                  <TextField
                    label="Domain Name"
                    variant="outlined"
                    name="domainName"
                    value={domainName}
                    onChange={handleChange}
                    required
                  />

                  <TextField
                    label="Domain Description"
                    variant="outlined"
                    name="domainDescription"
                    value={domainDescription}
                    onChange={handleChange}
                    required
                  />

                  <TextField
                    select
                    label="Affiliate"
                    variant="outlined"
                    name="affiliateId"
                    value={affiliateId}
                    onChange={handleChange}
                    required
                    SelectProps={{ native: true }}
                  >
                    <option value="" disabled>
                      Select an Affiliate
                    </option>
                    {affiliates.map((affiliate) => (
                      <option key={affiliate._id} value={affiliate._id}>
                        {affiliate.affiliateName}{" "}
                        {/* Adjust according to the affiliate object structure */}
                      </option>
                    ))}
                  </TextField>

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Domain Date"
                      value={domainDate}
                      onChange={handleDateChange}
                      renderInput={(props) => (
                        <TextField {...props} fullWidth />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>

              <Button
                color="primary"
                variant="contained"
                type="submit"
                style={{ marginTop: "20px" }}
              >
                <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
              </Button>

              <Button
                color="secondary"
                variant="contained"
                style={{ marginLeft: "20px", marginTop: "20px" }}
                onClick={() => navigate("/dashboard/admin")}
              >
                <Span sx={{ pl: 1, textTransform: "capitalize" }}>Cancel</Span>
              </Button>
            </ValidatorForm>
          </SimpleCard>
        </Stack>
        <ToastContainer />
      </Container>
    </div>
  );
};

export default CreateDomain;
