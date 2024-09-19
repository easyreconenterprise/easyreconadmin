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
import { NavLink, useNavigate } from "react-router-dom";
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

const JwtLogin = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Add state for language selection

  const { login } = useAuth();

  const handleFormSubmit = async (values) => {
    setLoading(true);
    try {
      await login(values.email, values.password);
      navigate("/");
    } catch (e) {
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
                        Sign In to Easy Recon
                      </h6>
                    </bold>
                    <bold>
                      <h6
                        style={{
                          fontSize: "15px",
                          textAlign: "center",
                        }}
                      >
                        Take the easiest way to Reconcile your accounts
                      </h6>
                    </bold>

                    <br></br>
                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      helperText={touched.email && errors.email}
                      error={Boolean(errors.email && touched.email)}
                      style={{ marginBottom: "20px" }}
                    />
                    <TextField
                      fullWidth
                      size="small"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      label="Password"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      helperText={touched.password && errors.password}
                      error={Boolean(errors.password && touched.password)}
                      sx={{ mb: 1.5 }}
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

                    <Select
                      labelId="language-label"
                      id="language"
                      fullWidth
                      name="language"
                      value={values.language}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      displayEmpty
                      label="Language"
                    >
                      {/* Placeholder option */}
                      <MenuItem value="" disabled>
                        Select Language
                      </MenuItem>
                      {languages.map((lang) => (
                        <MenuItem key={lang.code} value={lang.code}>
                          {lang.label}
                        </MenuItem>
                      ))}
                    </Select>

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
                      Login
                    </LoadingButton>

                    <FlexBox justifyContent="space-between">
                      <NavLink
                        to="/session/forgot-password"
                        style={{
                          color: theme.palette.primary.main,
                        }}
                      >
                        Forgot password?
                      </NavLink>
                    </FlexBox>
                    <div>
                      <div>
                        <span>Dont have an account?</span>
                        <a href="/session/signup">Register</a>
                      </div>
                    </div>
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

export default JwtLogin;
