import {
  Box,
  Card,
  Grid,
  Icon,
  IconButton,
  styled,
  Tooltip,
} from "@mui/material";
import { Breadcrumb } from "app/components";
import { Small, H3 } from "app/components/Typography";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import "./Style.css";
import useAuth from "app/hooks/useAuth";
import "./print.css";
import { useEffect, useState } from "react";

const Cover = () => {
  const { logout, user } = useAuth();
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Function to update the current date
    const updateDate = () => {
      setCurrentDate(new Date());
    };

    // Update the date when the component mounts
    updateDate();

    // Set up an interval to update the date every second (optional)
    const intervalId = setInterval(updateDate, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Format the date as "31st December 2023"
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="all print-cover page-break">
      <div style={{ textAlign: "center" }}>
        <b>
          {/*} <h1>{user.company_name}</h1>*/}
          <h2>EASY RECON</h2>
          <p>Account Reconcilation System</p>
        </b>
      </div>
      <div>
        {/*} <b>
                    <h3 style={{ fontSize: '30px' }}>{formattedDate}</h3>
                </b>*/}
      </div>
    </div>
  );
};

export default Cover;
