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
  const [openModal, setOpenModal] = useState(false);
  const [openWorkingMonthModal, setOpenWorkingMonthModal] = useState(false);
  const [openChooseMonthModal, setOpenChooseMonthModal] = useState(false);
  const [openRestoreDataModal, setOpenRestoreDataModal] = useState(false);
  const { sessions, currentSession, setCurrentSession, switchSession } =
    useContext(SessionContext);

  const [openSwitchAccountModal, setOpenSwitchAccountModal] = useState(false);

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

  const handleOpenSwitchAccountModal = (event) => {
    event.stopPropagation();
    setOpenSwitchAccountModal(true);
  };

  const handleCloseSwitchAccountModal = () => {
    setOpenSwitchAccountModal(false);
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

                  <StyledItem
                    onClick={(event) => handleOpenWorkingMonthModal(event)}
                  >
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

                  <StyledItem
                    onClick={(event) => handleOpenChooseMonthModal(event)}
                  >
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
