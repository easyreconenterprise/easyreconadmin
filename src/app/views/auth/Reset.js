import { LoadingButton } from "@mui/lab";
import {
  Card,
  Checkbox,
  Grid,
  IconButton,
  MenuItem,
  InputAdornment,
  Select,
  TextField,
} from "@mui/material";
import { Box, styled, useTheme } from "@mui/system";
import { Paragraph } from "app/components/Typography";
import useAuth from "app/hooks/useAuth";
import { Formik } from "formik";
import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import * as Yup from "yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const FlexBox = styled(Box)(() => ({ display: "flex", alignItems: "center" }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: "center" }));

const ContentBox = styled(Box)(() => ({
  height: "100%",
  padding: "32px",
  position: "relative",
}));

const JWTRoot = styled(JustifyBox)(() => ({
  background: "#2d6ea6",
  minHeight: "100% !important",
  "& .card": {
    maxWidth: 800,
    minHeight: 400,
    margin: "1rem",
    display: "flex",
    borderRadius: 12,
    alignItems: "center",
  },
}));

// inital login credentials
const initialValues = {
  email: "",
  password: "",
  //   language: "en",
  language: "",
};

// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be 6 character length")
    .required("Password is required!"),
  email: Yup.string()
    .email("Invalid Email address")
    .required("Email is required!"),
  language: Yup.string().required("Language selection is required!"),
});

const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "French" },
  { code: "es", label: "Spanish" },
  // Add more languages as needed
];

const Reset = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Add state for language selection
  const token = new URLSearchParams(location.search).get("token");

  const apiUrl = process.env.REACT_APP_API_URL;

  const { login } = useAuth();

  const handleFormSubmit = async (values) => {
    setLoading(true);

    console.log("Password reset request initiated...");
    console.log("Token:", token);

    try {
      const response = await fetch(`${apiUrl}/api/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token,
          password: values.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Password reset successful:", data);

        // Redirect to login
        navigate("/session/signin");
      } else {
        const errorData = await response.json();
        console.error("Password reset failed:", errorData);
        alert(errorData.message || "Password reset failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during password reset:", error);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <JWTRoot>
      <Card className="card">
        <Grid container>
          <Grid item sm={6} xs={12} style={{ background: "#F9F9F9" }}>
            <JustifyBox p={4} height="100%" sx={{ minWidth: 320 }}>
              <img
                // src="/assets/images/illustrations/save.png"

                src="/assets/images/illustrations/er.png"
                width="100%"
                alt=""
              />
            </JustifyBox>
          </Grid>

          <Grid item sm={6} xs={12}>
            <ContentBox>
              <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <bold>
                      <h6
                        style={{
                          fontWeight: "700",
                          fontSize: "20px",
                          textAlign: "center",
                        }}
                      >
                        Reset your password for Easy Recon
                      </h6>
                    </bold>
                    <bold>
                      <h6
                        style={{
                          fontSize: "15px",
                          textAlign: "center",
                        }}
                      >
                        Take the easiest way to Reset your password
                      </h6>
                    </bold>

                    <br></br>

                    <TextField
                      fullWidth
                      size="small"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      label="New Password"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      helperText={touched.password && errors.password}
                      error={Boolean(errors.password && touched.password)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />

                    <LoadingButton
                      type="submit"
                      color="primary"
                      loading={loading}
                      variant="contained"
                      sx={{ my: 2 }}
                      style={{
                        width: "100%",
                        borderRadius: "50px",
                      }}
                    >
                      Reset Password
                    </LoadingButton>
                  </form>
                )}
              </Formik>
            </ContentBox>
          </Grid>
        </Grid>
      </Card>
    </JWTRoot>
  );
};

export default Reset;
