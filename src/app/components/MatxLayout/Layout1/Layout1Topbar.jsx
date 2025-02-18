import {
  Avatar,
  Hidden,
  Icon,
  IconButton,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { Box, styled, useTheme } from "@mui/system";
import { MatxMenu, MatxSearchBox } from "app/components";
import { themeShadows } from "app/components/MatxTheme/themeColors";
import useAuth from "app/hooks/useAuth";
import moment from "moment";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSettings from "app/hooks/useSettings";
import { topBarHeight } from "app/utils/constant";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Span } from "../../../components/Typography";
import NotificationBar from "app/components/NotificationBar/NotificationBar";
import { NotificationProvider } from "app/contexts/NotificationContext";
import SwitchAccount from "./SwitchAccount";
import KeyIn from "./KeyIn";
import { SessionContext } from "../SwitchContext";
import WorkingMonth from "./WorkingMonth";
import ChooseMonth from "./ChooseMonth";
import RestoreData from "./RestoreData";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const TopbarRoot = styled("div")(({ theme }) => ({
  top: 0,
  zIndex: 96,
  transition: "all 0.3s ease",
  boxShadow: themeShadows[8],
  height: topBarHeight,
}));

const TopbarContainer = styled(Box)(({ theme }) => ({
  padding: "8px",
  paddingLeft: 18,
  paddingRight: 20,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: theme.palette.primary.main,
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  [theme.breakpoints.down("xs")]: {
    paddingLeft: 14,
    paddingRight: 16,
  },
}));

const UserMenu = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  borderRadius: 24,
  padding: 4,
  "& span": { margin: "0 8px" },
}));

const StyledItem = styled(MenuItem)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  minWidth: 185,
  "& a": {
    width: "100%",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  "& span": { marginRight: "10px", color: theme.palette.text.primary },
}));

const Layout1Topbar = () => {
  const theme = useTheme();
  const { settings, updateSettings } = useSettings();
  const { logout, user } = useAuth();
  const [confirmMode, setConfirmMode] = useState(false);
  // const { currentSession } = useContext(SessionContext);
  const [isSessionLoaded, setIsSessionLoaded] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const [openWorkingMonthModal, setOpenWorkingMonthModal] = useState(false);
  const [openChooseMonthModal, setOpenChooseMonthModal] = useState(false);
  const [openRestoreDataModal, setOpenRestoreDataModal] = useState(false);
  const { sessions, currentSession, setCurrentSession, switchSession } =
    useContext(SessionContext);

  const [openSwitchAccountModal, setOpenSwitchAccountModal] = useState(false);
  const [openKeyInModal, setOpenKeyInModal] = useState(false);
  const [closeKeyInModal, setCloseKeyInModal] = useState(false);

  useEffect(() => {
    // Check local storage for 'lastSession' on component mount
    const savedSession = localStorage.getItem("lastSession");
    if (savedSession) {
      setCurrentSession(JSON.parse(savedSession));
    }
  }, [setCurrentSession]);

  const handleSwitchAccount = (newAccount) => {
    // Switch account and update UI
    switchSession(newAccount).then(() => {
      setOpenSwitchAccountModal(false);
    });
  };
  const handleKeyIn = () => {
    // Switch account and update UI
    switchSession().then(() => {
      setOpenKeyInModal(false);
    });
  };

  const handleOpenSwitchAccountModal = (event) => {
    event.stopPropagation();
    setOpenSwitchAccountModal(true);
  };
  const handleOpenKeyInModal = (event) => {
    event.stopPropagation();
    setOpenKeyInModal(true);
  };

  const handleCloseSwitchAccountModal = () => {
    setOpenSwitchAccountModal(false);
  };
  const handleCloseKeyInModal = (event) => {
    // Prevent closing if the click was inside the modal

    setOpenKeyInModal(false); // Close modal only if the click is outside
  };

  const handleOpenModal = (event) => {
    event.stopPropagation();
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleSubmitModal = (formData) => {
    // Add your logic for handling form submission here
    console.log(formData);

    handleCloseModal();
  };
  const apiUrl = process.env.REACT_APP_API_URL; // This should be set in your .env file

  // const handleSubmitWorkingModal = async (formData) => {
  //   const token = localStorage.getItem("jwtToken");
  //   try {
  //     const response = await axios.post(
  //       `${process.env.REACT_APP_API_URL.trim()}/api/account/working-month`,
  //       formData,
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );

  //     toast.success("Working month set successfully!");
  //     handleCloseWorkingMonthModal(); // Close the modal after success
  //     window.location.reload(); // Refresh to reflect the changes (optional)
  //   } catch (error) {
  //     console.error("Error:", error);
  //     toast.error("Unable to set working month.");
  //   }
  // };

  // const handleSubmitWorkingModal = async (formData) => {
  //   const token = localStorage.getItem("jwtToken");

  //   try {
  //     const response = await axios.post(
  //       `${process.env.REACT_APP_API_URL.trim()}/api/account/working-month`,
  //       formData,
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );

  //     // Display a success message with account details
  //     toast.success(
  //       `Working month set successfully for ${response.data.accountTitle}!`
  //     );

  //     // ✅ Remove the undefined onSubmit call
  //     // Just close the modal after success
  //     handleCloseWorkingMonthModal();
  //   } catch (error) {
  //     console.error("Error:", error);
  //     toast.error("Unable to set working month.");
  //   }
  // };

  // const handleSubmitWorkingModal = async (formData) => {
  //   const token = localStorage.getItem("jwtToken");

  //   // Ensure accountId from the session
  //   const accountId = currentSession?.account?._id || ""; // Adjust this line

  //   if (!accountId || !formData.month) {
  //     toast.error("Account ID or month is missing!");
  //     console.log("Error: Account ID or month is missing!");
  //     return;
  //   }

  //   console.log("Sending data to API:", { accountId, month: formData.month });

  //   try {
  //     const response = await axios.post(
  //       `${process.env.REACT_APP_API_URL.trim()}/api/account/working-month`,
  //       {
  //         accountId,
  //         month: formData.month, // Only the month name is needed
  //       },
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );

  //     console.log("API Response:", response.data);

  //     toast.success(
  //       `Working month set successfully for ${response.data.accountTitle}!`
  //     );

  //     handleCloseWorkingMonthModal();
  //   } catch (error) {
  //     console.error("Error:", error);
  //     toast.error("Unable to set working month.");
  //   }
  // };

  // useEffect(() => {
  //   const fetchAccountDetails = async () => {
  //     if (currentSession?.account) {
  //       console.log("Fetching account details for:", currentSession.account);
  //       try {
  //         const token = localStorage.getItem("jwtToken");

  //         // Assuming apiUrl is available in your environment variables or props
  //         const response = await axios.get(
  //           `${process.env.REACT_APP_API_URL}/api/account/${currentSession.account}`,
  //           {
  //             headers: {
  //               Authorization: `Bearer ${token}`,
  //             },
  //           }
  //         );

  //         // Just mark session as loaded
  //         setIsSessionLoaded(true);
  //       } catch (err) {
  //         console.error("Error fetching account details:", err);
  //         setIsSessionLoaded(true); // Ensure session is marked as loaded even on error
  //       }
  //     }
  //   };

  //   fetchAccountDetails();
  // }, [currentSession?.account]); // Just depend on the currentSession.account
  useEffect(() => {
    const fetchAccountDetails = async () => {
      if (currentSession?.account) {
        console.log("Fetching account details for:", currentSession.account);
        try {
          const token = localStorage.getItem("jwtToken");

          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/account/${currentSession.account}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          // Save the fetched data into your state
          setIsSessionLoaded(true);
        } catch (err) {
          console.error("Error fetching account details:", err);
          setIsSessionLoaded(true); // Ensure session is marked as loaded even on error
        }
      }
    };

    fetchAccountDetails();
  }, [currentSession?.account]); // Depend on the currentSession.account

  // const handleSubmitWorkingModal = async (formData) => {
  //   if (!isSessionLoaded) {
  //     toast.error("Please wait until the session data is fully loaded.");
  //     console.log("Session data not yet loaded.");
  //     return;
  //   }

  //   const token = localStorage.getItem("jwtToken");

  //   // Ensure accountId from the session
  //   const accountId = currentSession?.account || ""; // Directly use accountId from currentSession

  //   if (!accountId || !formData.month) {
  //     toast.error("Account ID or month is missing!");
  //     console.log("Error: Account ID or month is missing!");
  //     return;
  //   }

  //   console.log("Sending data to API:", { accountId, month: formData.month });

  //   try {
  //     const response = await axios.post(
  //       `${process.env.REACT_APP_API_URL.trim()}/api/account/working-month`,
  //       {
  //         accountId, // Use the accountId directly
  //         month: formData.month, // Only the month name is needed
  //       },
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );

  //     console.log("API Response:", response.data);

  //     toast.success(
  //       `Working month set successfully for ${response.data.accountTitle}!`
  //     );

  //     handleCloseWorkingMonthModal();
  //   } catch (error) {
  //     console.error("Error:", error);
  //     toast.error("Unable to set working month.");
  //   }
  // };
  // const handleSubmitWorkingModal = async (formData) => {
  //   if (!isSessionLoaded) {
  //     toast.error("Please wait until the session data is fully loaded.");
  //     return;
  //   }

  //   const token = localStorage.getItem("jwtToken");
  //   const accountId = currentSession?.account || "";

  //   if (!accountId || !formData.month) {
  //     toast.error("Account ID or month is missing!");
  //     return;
  //   }

  //   console.log("Sending data to API:", { accountId, month: formData.month });

  //   try {
  //     const response = await axios.post(
  //       `${process.env.REACT_APP_API_URL.trim()}/api/account/working-month`,
  //       {
  //         accountId,
  //         month: formData.month, // Send month as a string like "September"
  //       },
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );

  //     console.log("API Response:", response.data);
  //     toast.success(
  //       `Working month set successfully for ${response.data.accountTitle}!`
  //     );

  //     handleCloseWorkingMonthModal();
  //   } catch (error) {
  //     console.error("Error:", error);
  //     toast.error("Unable to set working month.");
  //   }
  // };
  // const handleSubmitWorkingModal = async (formData) => {
  //   if (!isSessionLoaded) {
  //     toast.error("Please wait until the session data is fully loaded.");
  //     return;
  //   }

  //   const token = localStorage.getItem("jwtToken");
  //   const accountId = currentSession?.account || ""; // Use the parentAccountId

  //   if (!accountId || !formData.month) {
  //     toast.error("Account ID or month is missing!");
  //     return;
  //   }

  //   try {
  //     const response = await axios.post(
  //       `${process.env.REACT_APP_API_URL}/api/account/working-month`,
  //       { accountId, month: formData.month },
  //       { headers: { Authorization: `Bearer ${token}` } }
  //     );

  //     toast.success(
  //       `Working month set for ${response.data.account.accountTitle}`
  //     );
  //     handleCloseWorkingMonthModal();
  //   } catch (error) {
  //     console.error("Error:", error);
  //     toast.error("Unable to set working month.");
  //   }
  // };
  const handleSubmitWorkingModal = async (formData) => {
    if (!isSessionLoaded) {
      toast.error("Please wait until the session data is fully loaded.");
      return;
    }

    const token = localStorage.getItem("jwtToken");
    const accountId = currentSession?.account || ""; // Use the account ID from the session

    if (!accountId || !formData.month) {
      toast.error("Account ID or month is missing!");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/account/working-month`,
        { accountId, month: formData.month },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(
        `Working month set for ${response.data.account.accountTitle}`
      );
      handleCloseWorkingMonthModal(); // Close modal after success
    } catch (error) {
      console.error("Error:", error);
      toast.error("Unable to set working month.");
    }
  };

  const handleOpenWorkingMonthModal = (event) => {
    event.stopPropagation();
    setOpenWorkingMonthModal(true);
  };

  const handleCloseWorkingMonthModal = () => {
    setOpenWorkingMonthModal(false);
  };

  const handleCloseChooseMonthModal = () => {
    setOpenChooseMonthModal(false);
  };
  const handleCloseRestoreDataModal = () => {
    setOpenRestoreDataModal(false);
  };
  const handleOpenChooseMonthModal = (event) => {
    event.stopPropagation();
    setOpenChooseMonthModal(true);
  };
  const handleOpenRestoreDataModal = (event) => {
    event.stopPropagation();
    setOpenRestoreDataModal(true);
  };
  return (
    <>
      <TopbarRoot>
        <TopbarContainer>
          <Box display="flex" alignItems="center">
            {/* Render UI based on the current session */}
            {currentSession ? (
              <>
                <div
                  style={{
                    padding: "0",
                    cursor: "pointer",
                  }}
                >
                  <span>
                    {" "}
                    <Link to="/dashboard/default" style={{ color: "black" }}>
                      Home
                    </Link>{" "}
                  </span>
                </div>
                <MatxMenu
                  menuButton={
                    <UserMenu>
                      <Hidden xsDown>
                        <Span>
                          <strong
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            Int Record
                            <Icon
                              style={{
                                fontSize: "20px",
                                marginLeft: "5px",
                              }}
                            >
                              arrow_drop_down
                            </Icon>
                          </strong>
                        </Span>
                      </Hidden>
                    </UserMenu>
                  }
                >
                  <StyledItem onClick={(event) => handleOpenKeyInModal(event)}>
                    <Span> Key In</Span>
                  </StyledItem>

                  {/* Render SwitchAccount conditionally */}
                  {openKeyInModal && (
                    <KeyIn
                      open={openKeyInModal}
                      onClose={handleCloseKeyInModal}
                      onSubmit={handleKeyIn}
                    />
                  )}
                  <StyledItem>
                    <Link to="/dashboard/upload-excel-led">
                      <Span> Upload in Excel Format </Span>
                    </Link>
                  </StyledItem>
                  <StyledItem>
                    <Link to="/dashboard/upload-csv">
                      <Span> Upload in Predefined or CSV format </Span>
                    </Link>
                  </StyledItem>
                  <StyledItem>
                    <Link to="/dashboard/auto-capture">
                      <Span> Auto Capture </Span>
                    </Link>
                  </StyledItem>
                </MatxMenu>
                <MatxMenu
                  menuButton={
                    <UserMenu>
                      <Hidden xsDown>
                        <Span>
                          <strong
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            Ext Record
                            <Icon
                              style={{
                                fontSize: "20px",
                                marginLeft: "5px",
                              }}
                            >
                              arrow_drop_down
                            </Icon>
                          </strong>
                        </Span>
                      </Hidden>
                    </UserMenu>
                  }
                >
                  <StyledItem>
                    <Link to="/dashboard/key-in">
                      <Span> Key In </Span>
                    </Link>
                  </StyledItem>

                  <StyledItem>
                    <Link to="/dashboard/upload-excel">
                      <Span> Upload in Excel Format </Span>
                    </Link>
                  </StyledItem>
                  <StyledItem>
                    <Link to="/dashboard/upload-csv">
                      <Span> Upload in Predefined or CSV format </Span>
                    </Link>
                  </StyledItem>
                  <StyledItem>
                    <Link to="/dashboard/auto-capture">
                      <Span> Auto Capture </Span>
                    </Link>
                  </StyledItem>
                </MatxMenu>
                <MatxMenu
                  menuButton={
                    <UserMenu>
                      <Hidden xsDown>
                        <Span>
                          <strong
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            Matching
                            <Icon
                              style={{
                                fontSize: "20px",
                                marginLeft: "5px",
                              }}
                            >
                              arrow_drop_down
                            </Icon>
                          </strong>
                        </Span>
                      </Hidden>
                    </UserMenu>
                  }
                >
                  <StyledItem>
                    <Link to="/dashboard/AtmMatching">
                      <Span> Automatic Matching </Span>
                    </Link>
                  </StyledItem>

                  <StyledItem>
                    <Link to="/dashboard/AssistedMatching">
                      <Span> Machine Assisted </Span>
                    </Link>
                  </StyledItem>
                </MatxMenu>
                <MatxMenu
                  menuButton={
                    <UserMenu>
                      <Hidden xsDown>
                        <Span>
                          <strong
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            Report
                            <Icon
                              style={{
                                fontSize: "20px",
                                marginLeft: "5px",
                              }}
                            >
                              arrow_drop_down
                            </Icon>
                          </strong>
                        </Span>
                      </Hidden>
                    </UserMenu>
                  }
                >
                  <StyledItem>
                    <Link to="/dashboard/AllMatchedItemReport">
                      <Span> Matching Item Reports </Span>
                    </Link>
                  </StyledItem>

                  <StyledItem>
                    <Link to="/dashboard/tb">
                      <Span> Control Reports</Span>
                    </Link>
                  </StyledItem>

                  <StyledItem>
                    <Link to="/dashboard/frmAuditReport">
                      <Span> Audit Trail</Span>
                    </Link>
                  </StyledItem>
                  <StyledItem>
                    <Link to="/dashboard/frmDowloadRpt">
                      <Span> Input Log Report</Span>
                    </Link>
                  </StyledItem>
                  <StyledItem>
                    <Link to="/dashboard/tb">
                      <Span> Analysis</Span>
                    </Link>
                  </StyledItem>
                  <StyledItem>
                    <Link to="/dashboard/frmOSReport">
                      <Span> outstanding item Reports</Span>
                    </Link>
                  </StyledItem>
                  <StyledItem>
                    <Link to="/dashboard/tb">
                      <Span> ATM Reports</Span>
                    </Link>
                  </StyledItem>
                  <StyledItem>
                    <Link to="/dashboard/tb">
                      <Span> Affliate Domains</Span>
                    </Link>
                  </StyledItem>
                  <StyledItem>
                    <Link to="/dashboard/tb">
                      <Span> Download Services Event Log Report</Span>
                    </Link>
                  </StyledItem>
                  <StyledItem>
                    <Link to="/dashboard/tb">
                      <Span> Domain Account Status</Span>
                    </Link>
                  </StyledItem>
                </MatxMenu>

                <MatxMenu
                  menuButton={
                    <UserMenu>
                      <Hidden xsDown>
                        <Span>
                          <strong
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            Tools
                            <Icon
                              style={{
                                fontSize: "20px",
                                marginLeft: "5px",
                              }}
                            >
                              arrow_drop_down
                            </Icon>
                          </strong>
                        </Span>
                      </Hidden>
                    </UserMenu>
                  }
                >
                  <StyledItem>
                    <Link to="/dashboard/change-password">
                      <Span> Change Password </Span>
                    </Link>
                  </StyledItem>
                  <StyledItem
                    onClick={(event) => handleOpenSwitchAccountModal(event)}
                  >
                    <Span> Switch Account </Span>
                  </StyledItem>

                  <StyledItem
                    onClick={(event) => handleOpenSwitchAccountModal(event)}
                  >
                    <Span> Reconcile Account </Span>
                  </StyledItem>

                  {/* Render SwitchAccount conditionally */}
                  {openSwitchAccountModal && (
                    <SwitchAccount
                      open={openSwitchAccountModal}
                      onClose={handleCloseSwitchAccountModal}
                      onSubmit={handleSubmitModal}
                    />
                  )}

                  <StyledItem>
                    {/*}  <Icon> power_settings_new </Icon>*/}
                    <Link to="/dashboard/create-domain">
                      <Span> Create Domain </Span>
                    </Link>
                  </StyledItem>
                  <StyledItem>
                    {/*}  <Icon> power_settings_new </Icon>*/}
                    <Link to="/dashboard/create-affliate">
                      <Span> Create Affliate </Span>
                    </Link>
                  </StyledItem>

                  {/*} <StyledItem
                    onClick={(event) => handleOpenWorkingMonthModal(event)}
                  >
                    <Span> Change working Month </Span>
                  </StyledItem>*/}
                  <StyledItem onClick={handleOpenWorkingMonthModal}>
                    <Span>Change Working Month</Span>
                  </StyledItem>

                  {openWorkingMonthModal && (
                    <WorkingMonth
                      open={openWorkingMonthModal}
                      onClose={handleCloseWorkingMonthModal}
                      onSubmit={handleSubmitWorkingModal}
                      accountId={currentSession?.account}
                      // confirmMode={confirmMode}
                    />
                  )}

                  {/*<StyledItem
                    onClick={(event) => handleOpenChooseMonthModal(event)}
                  >
                    <Span> Choose working Month </Span>
                  </StyledItem>*/}

                  {/* Conditionally render ChooseMonth */}

                  <StyledItem onClick={handleOpenRestoreDataModal}>
                    <Span>Restore Data</Span>
                  </StyledItem>

                  {openRestoreDataModal && (
                    <RestoreData
                      open={openRestoreDataModal}
                      onClose={handleCloseRestoreDataModal}
                      onSubmit={handleSubmitModal}
                    />
                  )}
                </MatxMenu>
                <div
                  onClick={logout}
                  style={{
                    padding: "0",
                    cursor: "pointer",
                  }}
                >
                  <span> Logout </span>
                </div>

                <div
                  style={{
                    padding: "0",
                    cursor: "pointer",
                    marginLeft: "20px",
                  }}
                >
                  <span> Help </span>
                </div>
              </>
            ) : (
              <StyledItem onClick={handleOpenSwitchAccountModal}>
                <Span> Reconcile Account </Span>
              </StyledItem>
            )}

            {/* Switch Account Modal */}
            <SwitchAccount
              open={openSwitchAccountModal}
              onClose={handleCloseSwitchAccountModal}
              onSubmit={handleSwitchAccount}
            />
          </Box>
        </TopbarContainer>
      </TopbarRoot>
    </>
  );
};

export default Layout1Topbar;
