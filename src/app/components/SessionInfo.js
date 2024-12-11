// import React, { useContext } from "react";
// import { SessionContext } from "./MatxLayout/SwitchContext";

// const SessionInfo = () => {
//   const { currentSession } = useContext(SessionContext);

//   if (!currentSession) {
//     return null; // Return nothing if there's no session
//   }

//   const { affiliateId, affiliateName, domainId, accountId, month } =
//     currentSession;

//   return (
//     <div
//       style={{
//         position: "fixed",
//         bottom: 0,
//         width: "100%",
//         backgroundColor: "#f8f9fa",
//         padding: "10px",
//         textAlign: "center",
//         borderTop: "1px solid #ddd",
//       }}
//     >
//       <span>Affiliate: {affiliateId}</span> | <span>Domain: {domainId}</span> |{" "}
//       <span>Account: {accountId}</span> | <span>Month: {month}</span>
//     </div>
//   );
// };

// export default SessionInfo;

// import React, { useContext, useState, useEffect } from "react";

// import axios from "axios";
// import { SessionContext } from "./MatxLayout/SwitchContext";
// import { useContext, useEffect, useState } from "react";

// const SessionInfo = () => {
//   const { currentSession } = useContext(SessionContext);
//   const [affiliateName, setAffiliateName] = useState("N/A");
//   const [domainName, setDomainName] = useState("N/A");
//   const [accountName, setAccountName] = useState("N/A");

//   useEffect(() => {
//     if (currentSession) {
//       fetchNames(currentSession);
//     }
//   }, [currentSession]);

//   const fetchNames = async (session) => {
//     try {
//       // Fetch affiliates and find the name for the affiliateId
//       const affiliateResponse = await axios.get(
//         "http://localhost:7000/api/affiliates"
//       );
//       const affiliate = affiliateResponse.data.find(
//         (item) => item._id === session.affiliateId
//       );
//       setAffiliateName(
//         affiliate ? affiliate.affiliateName : "Unknown Affiliate"
//       );

//       // Fetch domains for the affiliateId and find the domain name
//       const domainResponse = await axios.get(
//         `http://localhost:7000/api/domains/${session.affiliateId}`
//       );
//       const domain = domainResponse.data.find(
//         (item) => item._id === session.domainId
//       );
//       setDomainName(domain ? domain.domainName : "Unknown Domain");

//       // Fetch accounts for the domainId and find the account name
//       const accountResponse = await axios.get(
//         `http://localhost:7000/api/accounts/${session.domainId}`
//       );
//       const account = accountResponse.data.find(
//         (item) => item._id === session.accountId
//       );
//       setAccountName(account ? account.accountName : "Unknown Account");
//     } catch (error) {
//       console.error("Error fetching names:", error);
//     }
//   };

//   if (!currentSession) {
//     return null; // Return nothing if there's no session
//   }

//   const { month } = currentSession;

//   return (
//     <div
//       style={{
//         position: "fixed",
//         bottom: 0,
//         width: "100%",
//         backgroundColor: "#f8f9fa",
//         padding: "10px",
//         textAlign: "center",
//         borderTop: "1px solid #ddd",
//       }}
//     >
//       <span>Affiliate: {affiliateName || "N/A"}</span> |{" "}
//       <span>Domain: {domainName || "N/A"}</span> |{" "}
//       <span>Account: {accountName || "N/A"}</span> | <span>Month: {month}</span>
//     </div>
//   );
// };

// export default SessionInfo;

import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { SessionContext } from "./MatxLayout/SwitchContext";
import useAuth from "app/hooks/useAuth";

const SessionInfo = () => {
  const { currentSession } = useContext(SessionContext); // Get the current session from the context
  const [affiliateName, setAffiliateName] = useState("N/A");
  const { logout, user } = useAuth();
  const [domainName, setDomainName] = useState("N/A");
  const [accountTitle, setAccountTitle] = useState("N/A");
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    console.log("Current session:", currentSession); // Log the current session
    if (currentSession) {
      // Fetch the affiliate, domain, and account names
      fetchAffiliateName(currentSession.affiliate); // Change this line
      fetchDomainName(currentSession.affiliate, currentSession.domain);
      fetchAccountTitle(currentSession.domain, currentSession.account);
    }
  }, [currentSession]);

  const fetchAffiliateName = async (affiliateId) => {
    console.log("Fetching affiliate name for ID:", affiliateId); // Add this line for debugging
    try {
      const response = await axios.get(`${apiUrl}/api/affiliates`);
      console.log("Affiliate API response:", response.data); // Log the response
      const affiliate = response.data.find((item) => item._id === affiliateId);
      console.log("Found affiliate:", affiliate); // Add this line to check the found affiliate
      setAffiliateName(
        affiliate ? affiliate.affiliateName : "Unknown Affiliate"
      );
    } catch (error) {
      console.error("Error fetching affiliate name:", error);
    }
  };

  const fetchDomainName = async (affiliateId, domainId) => {
    console.log(
      "Fetching domain name for affiliate ID:",
      affiliateId,
      "and domain ID:",
      domainId
    ); // Debugging log
    try {
      const response = await axios.get(`${apiUrl}/api/domains/${affiliateId}`);
      console.log("Domain API response:", response.data); // Log the response
      const domain = response.data.find((item) => item._id === domainId);
      console.log("Found domain:", domain); // Check the found domain
      setDomainName(domain ? domain.domainName : "Unknown Domain");
    } catch (error) {
      console.error("Error fetching domain name:", error);
    }
  };

  const fetchAccountTitle = async (domainId, accountId) => {
    console.log(
      "Fetching account name for domain ID:",
      domainId,
      "and account ID:",
      accountId
    ); // Debugging log
    try {
      const response = await axios.get(`${apiUrl}/api/accounts/${domainId}`);
      console.log("Account API response:", response.data); // Log the response
      const account = response.data.find((item) => item._id === accountId);
      console.log("Found account:", account); // Check the found account
      setAccountTitle(account ? account.accountTitle : "Unknown Account");
    } catch (error) {
      console.error("Error fetching account name:", error);
    }
  };

  if (!currentSession) {
    return null; // If no session, return nothing
  }

  const { month } = currentSession;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#f8f9fa",
        padding: "10px",
        textAlign: "center",
        borderTop: "1px solid #ddd",
      }}
    >
      <span>User: {user.fullname}</span> |{" "}
      <span>Affiliate: {affiliateName}</span> |{" "}
      <span>Domain: {domainName}</span> | <span>Account: {accountTitle}</span> |{" "}
      <span>AS AT: {month}</span> Copyright © 2024.
    </div>
  );
};

export default SessionInfo;
