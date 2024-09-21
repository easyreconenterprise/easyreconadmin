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

import useSettings from "app/hooks/useSettings";
import { topBarHeight } from "app/utils/constant";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Span } from "../../../components/Typography";
import NotificationBar from "app/components/NotificationBar/NotificationBar";
import { NotificationProvider } from "app/contexts/NotificationContext";
import SwitchAccount from "./SwitchAccount";
import KeyIn from "./KeyIn";
import WorkingMonth from "./WorkingMonth";
import ChooseMonth from "./ChooseMonth";
import { SessionContext } from "../SwitchContext";

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

const IconBox = styled("div")(({ theme }) => ({
  display: "inherit",
  [theme.breakpoints.down("md")]: { display: "none !important" },
}));

const Layout1Topbar = () => {
  const theme = useTheme();
  const { settings, updateSettings } = useSettings();
  const { logout, user } = useAuth();
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [editStudentData, setEditStudentData] = useState(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [openModal, setOpenModal] = useState(false);
  const { sessions, currentSession, setSessions, setCurrentSession } =
    useContext(SessionContext);

  const [openSwitchAccountModal, setOpenSwitchAccountModal] = useState(false);
  const [openWorkingMonthModal, setOpenWorkingMonthModal] = useState(false);
  const [openChooseMonthModal, setOpenChooseMonthModal] = useState(false);
  // State to track if account is switched
  const [accountSwitched, setAccountSwitched] = useState(false);

  useEffect(() => {
    // Check local storage on component mount
    const switched = localStorage.getItem("lastSession");
    if (switched) {
      setAccountSwitched(true);
    }
  }, []);

  const updateSidebarMode = (sidebarSettings) => {
    updateSettings({
      layout1Settings: { leftSidebar: { ...sidebarSettings } },
    });
  };
  const handleSwitchAccount = (newAccount) => {
    // Update the state to reflect the new account
    setAccountSwitched(newAccount);
  };

  useEffect(() => {
    // Effect that runs when accountSwitched changes
    // This could be a place where you make sure components update
  }, [accountSwitched]);

  const handleSidebarToggle = () => {
    let { layout1Settings } = settings;
    let mode;
    if (isMdScreen) {
      mode = layout1Settings.leftSidebar.mode === "close" ? "mobile" : "close";
    } else {
      mode = layout1Settings.leftSidebar.mode === "full" ? "close" : "full";
    }
    updateSidebarMode({ mode });
  };
  const handleOpenModal = (event) => {
    event.stopPropagation();
    setOpenModal(true);
  };
  const handleOpenChooseMonthModal = (event) => {
    event.stopPropagation();
    setOpenChooseMonthModal(true);
  };
  const handleOpenSwitchAccountModal = (event) => {
    event.stopPropagation();
    setOpenSwitchAccountModal(true);
  };

  const handleCloseSwitchAccountModal = () => {
    setOpenSwitchAccountModal(false);
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
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // const handleSubmitModal = (formData) => {
  //   // Add your logic for handling form submission here
  //   console.log(formData);
  //   setAccountSwitched(true);
  //   handleCloseModal();
  // };

  const handleSubmitModal = (formData) => {
    // Add your logic for handling form submission here
    console.log(formData);
    setAccountSwitched(true);
    localStorage.setItem("lastSession", "true");
    handleCloseModal();
  };
  return (
    <>
      <TopbarRoot>
        <TopbarContainer>
          <Box display="flex" alignItems="center">
            <StyledIconButton onClick={handleSidebarToggle}>
              <Icon>menu</Icon>
            </StyledIconButton>
            {!accountSwitched && (
              <StyledItem>
                <StyledItem
                  onClick={(event) => handleOpenSwitchAccountModal(event)}
                >
                  <Span> Reconcile Account </Span>
                </StyledItem>
                <SwitchAccount
                  open={openSwitchAccountModal}
                  onClose={handleCloseSwitchAccountModal}
                  onSubmit={handleSubmitModal}
                />
              </StyledItem>
            )}
            {accountSwitched && (
              <>
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
                            Home
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
                    <Link to="/dashboard/key-in"></Link>
                  </StyledItem>
                  <StyledItem onClick={(event) => handleOpenModal(event)}>
                    <Span> Key In </Span>
                  </StyledItem>
                  <KeyIn
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                    onSubmit={handleSubmitModal}
                  />
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
                  <StyledItem>
                    <Link to="/dashboard/key-in">
                      <Span> Key In </Span>
                    </Link>
                  </StyledItem>

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
                    <Link to="/dashboard/tb">
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
                            Adjustment
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
                    <Link to="/dashboard/trial-balance">
                      <Span> Trial Balance </Span>
                    </Link>
                  </StyledItem>

                  <StyledItem>
                    <Link to="/dashboard/tb">
                      <Span> Mapped Table </Span>
                    </Link>
                  </StyledItem>
                </MatxMenu>
              </>
            )}
          </Box>
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

            <StyledItem onClick={(event) => handleOpenWorkingMonthModal(event)}>
              <Span> Change working Month </Span>
            </StyledItem>

            {/* Conditionally render WorkingMonth */}
            {openWorkingMonthModal && (
              <WorkingMonth
                open={openWorkingMonthModal}
                onClose={handleCloseWorkingMonthModal}
                onSubmit={handleSubmitModal}
              />
            )}

            <StyledItem onClick={(event) => handleOpenChooseMonthModal(event)}>
              <Span> Choose working Month </Span>
            </StyledItem>

            {/* Conditionally render ChooseMonth */}
            {openChooseMonthModal && (
              <ChooseMonth
                open={openChooseMonthModal}
                onClose={handleCloseChooseMonthModal}
                onSubmit={handleSubmitModal}
              />
            )}
            <StyledItem>
              <Link to="/dashboard/tb">
                <Span> Restore Data </Span>
              </Link>
            </StyledItem>
          </MatxMenu>
          <div onClick={logout} style={{ padding: "0", cursor: "pointer" }}>
            <span> Logout </span>
          </div>

          <div style={{ padding: "0", cursor: "pointer" }}>
            <span> Help </span>
          </div>
        </TopbarContainer>
      </TopbarRoot>
    </>
  );
};

export default React.memo(Layout1Topbar);

// import {
//   Avatar,
//   Hidden,
//   Icon,
//   IconButton,
//   MenuItem,
//   useMediaQuery,
// } from "@mui/material";
// import { Box, styled, useTheme } from "@mui/system";
// import { MatxMenu, MatxSearchBox } from "app/components";
// import { themeShadows } from "app/components/MatxTheme/themeColors";
// import useAuth from "app/hooks/useAuth";

// import useSettings from "app/hooks/useSettings";
// import { topBarHeight } from "app/utils/constant";
// import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
// import { Span } from "../../../components/Typography";
// import NotificationBar from "app/components/NotificationBar/NotificationBar";
// import { NotificationProvider } from "app/contexts/NotificationContext";
// import SwitchAccount from "./SwitchAccount";
// import KeyIn from "./KeyIn";
// import WorkingMonth from "./WorkingMonth";
// import ChooseMonth from "./ChooseMonth";
// import { SessionContext } from "../SwitchContext";

// const StyledIconButton = styled(IconButton)(({ theme }) => ({
//   color: theme.palette.text.primary,
// }));

// const TopbarRoot = styled("div")(({ theme }) => ({
//   top: 0,
//   zIndex: 96,
//   transition: "all 0.3s ease",
//   boxShadow: themeShadows[8],
//   height: topBarHeight,
// }));

// const TopbarContainer = styled(Box)(({ theme }) => ({
//   padding: "8px",
//   paddingLeft: 18,
//   paddingRight: 20,
//   height: "100%",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-between",
//   background: theme.palette.primary.main,
//   [theme.breakpoints.down("sm")]: {
//     paddingLeft: 16,
//     paddingRight: 16,
//   },
//   [theme.breakpoints.down("xs")]: {
//     paddingLeft: 14,
//     paddingRight: 16,
//   },
// }));

// const UserMenu = styled(Box)(() => ({
//   display: "flex",
//   alignItems: "center",
//   cursor: "pointer",
//   borderRadius: 24,
//   padding: 4,
//   "& span": { margin: "0 8px" },
// }));

// const StyledItem = styled(MenuItem)(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   minWidth: 185,
//   "& a": {
//     width: "100%",
//     display: "flex",
//     alignItems: "center",
//     textDecoration: "none",
//   },
//   "& span": { marginRight: "10px", color: theme.palette.text.primary },
// }));

// const IconBox = styled("div")(({ theme }) => ({
//   display: "inherit",
//   [theme.breakpoints.down("md")]: { display: "none !important" },
// }));

// const Layout1Topbar = () => {
//   const theme = useTheme();
//   const { settings, updateSettings } = useSettings();
//   const { logout, user } = useAuth();
//   const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
//   const [editStudentData, setEditStudentData] = useState(null);
//   const [editDialogOpen, setEditDialogOpen] = useState(false);
//   const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
//   const [openModal, setOpenModal] = useState(false);
//   const { sessions, currentSession, setSessions, setCurrentSession } =
//     useContext(SessionContext);

//   const [openSwitchAccountModal, setOpenSwitchAccountModal] = useState(false);
//   const [openWorkingMonthModal, setOpenWorkingMonthModal] = useState(false);
//   const [openChooseMonthModal, setOpenChooseMonthModal] = useState(false);

//   // State to track if account is switched
//   const [accountSwitched, setAccountSwitched] = useState(false);

//   useEffect(() => {
//     // Check local storage on component mount for 'lastSession'
//     const switched = localStorage.getItem("lastSession");
//     if (switched) {
//       setAccountSwitched(true);
//       // Set the current session based on the last switched account
//       const parsedSession = JSON.parse(switched);
//       setCurrentSession(parsedSession); // Ensure current session is updated
//     } else {
//       setAccountSwitched(false);
//     }
//   }, [setCurrentSession]);

//   const updateSidebarMode = (sidebarSettings) => {
//     updateSettings({
//       layout1Settings: { leftSidebar: { ...sidebarSettings } },
//     });
//   };

//   const handleSwitchAccount = (newAccount) => {
//     // Update the session and localStorage with the new account
//     setCurrentSession(newAccount);
//     localStorage.setItem("lastSession", JSON.stringify(newAccount)); // Store new session
//     setAccountSwitched(true);
//   };

//   useEffect(() => {
//     // Effect that runs when accountSwitched changes
//     // You can perform additional actions here if needed
//   }, [accountSwitched]);

//   const handleSidebarToggle = () => {
//     let { layout1Settings } = settings;
//     let mode = layout1Settings.leftSidebar.mode === "full" ? "compact" : "full";
//     updateSidebarMode({ mode });
//   };

//   const handleOpenModal = (event) => {
//     event.stopPropagation();
//     setOpenModal(true);
//   };
//   const handleOpenChooseMonthModal = (event) => {
//     event.stopPropagation();
//     setOpenChooseMonthModal(true);
//   };
//   const handleOpenSwitchAccountModal = (event) => {
//     event.stopPropagation();
//     setOpenSwitchAccountModal(true);
//   };

//   const handleCloseSwitchAccountModal = () => {
//     setOpenSwitchAccountModal(false);
//   };

//   const handleOpenWorkingMonthModal = (event) => {
//     event.stopPropagation();
//     setOpenWorkingMonthModal(true);
//   };

//   const handleCloseWorkingMonthModal = () => {
//     setOpenWorkingMonthModal(false);
//   };
//   const handleCloseChooseMonthModal = () => {
//     setOpenChooseMonthModal(false);
//   };
//   const handleCloseModal = () => {
//     setOpenModal(false);
//   };

//   // const handleSubmitModal = (formData) => {
//   //   // Add your logic for handling form submission here
//   //   console.log(formData);
//   //   setAccountSwitched(true);
//   //   handleCloseModal();
//   // };

//   const handleSubmitModal = (formData) => {
//     // Add your logic for handling form submission here
//     console.log(formData);
//     setAccountSwitched(true);
//     localStorage.setItem("lastSession", "true");
//     handleCloseModal();
//   };
//   return (
//     <div>
//       {/* Render accountSwitched UI based on the state */}
//       {accountSwitched ? (
//         <MatxMenu
//           menuButton={
//             <UserMenu>
//               <Hidden xsDown>
//                 <Span>
//                   <strong style={{ display: "flex", alignItems: "center" }}>
//                     Home
//                     <Icon style={{ fontSize: "20px", marginLeft: "5px" }}>
//                       arrow_drop_down
//                     </Icon>
//                   </strong>
//                 </Span>
//               </Hidden>
//             </UserMenu>
//           }
//         >
//           <StyledItem>
//             <Link to="/dashboard/key-in"></Link>
//           </StyledItem>
//           <StyledItem onClick={(event) => handleOpenModal(event)}>
//             <Span> Key In </Span>
//           </StyledItem>
//           <KeyIn
//             open={openModal}
//             onClose={() => setOpenModal(false)}
//             onSubmit={handleSubmitModal}
//           />
//           <StyledItem>
//             <Link to="/dashboard/upload-excel">
//               <Span> Upload in Excel Format </Span>
//             </Link>
//           </StyledItem>
//           <StyledItem>
//             <Link to="/dashboard/upload-csv">
//               <Span> Upload in Predefined or CSV format </Span>
//             </Link>
//           </StyledItem>
//           <StyledItem>
//             <Link to="/dashboard/auto-capture">
//               <Span> Auto Capture </Span>
//             </Link>
//           </StyledItem>
//         </MatxMenu>
//       ) : (
//         <StyledItem>
//           <StyledItem onClick={handleOpenSwitchAccountModal}>
//             <Span> Reconcile Account </Span>
//           </StyledItem>
//           <SwitchAccount
//             open={openSwitchAccountModal}
//             onClose={handleCloseSwitchAccountModal}
//             onSubmit={handleSubmitModal}
//           />
//         </StyledItem>
//       )}
//       {/* Additional UI elements */}
//     </div>
//   );
// };

// export default Layout1Topbar;
