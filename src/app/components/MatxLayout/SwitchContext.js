// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const SessionContext = createContext();

// export const SessionProvider = ({ children }) => {
//   const [sessions, setSessions] = useState([]);
//   const [currentSession, setCurrentSession] = useState(null);
//   const apiUrl = process.env.REACT_APP_API_URL;
//   // Fetch sessions and restore the last session on mount
//   useEffect(() => {
//     axios
//       .get(`${apiUrl}/api/switch-session`)
//       .then((response) => {
//         setSessions(response.data);

//         // Restore last session from localStorage if available
//         const savedSession = localStorage.getItem("lastSession");
//         if (savedSession) {
//           setCurrentSession(JSON.parse(savedSession));
//         } else {
//           // Set the latest session from the response
//           const lastSession = response.data[response.data.length - 1];
//           if (lastSession) {
//             setCurrentSession(lastSession);
//           }
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching sessions:", error);
//       });
//   }, []);

//   // Function to switch session and save it to localStorage
//   const switchSession = async (newSessionData) => {
//     // Check if the new session is already the current session
//     if (
//       currentSession &&
//       currentSession.affiliate === newSessionData.affiliate &&
//       currentSession.domain === newSessionData.domain &&
//       currentSession.account === newSessionData.account &&
//       currentSession.month === newSessionData.month
//     ) {
//       // If it's the same session, no need to switch
//       console.log("Same session, no need to switch.");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `${apiUrl}/api/switch-session`,
//         newSessionData,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
//           },
//         }
//       );

//       // Update the current session and persist it in localStorage
//       setCurrentSession(response.data);
//       localStorage.setItem("lastSession", JSON.stringify(response.data));
//     } catch (error) {
//       console.error("Error switching session:", error);
//     }
//   };

//   return (
//     <SessionContext.Provider
//       value={{ sessions, currentSession, switchSession, setCurrentSession }}
//     >
//       {children}
//     </SessionContext.Provider>
//   );
// };
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [sessions, setSessions] = useState([]);
  const [currentSession, setCurrentSession] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  // Fetch sessions and restore the last session on mount
  useEffect(() => {
    axios
      .get(`${apiUrl}/api/switch-session`)
      .then((response) => {
        setSessions(response.data);

        // Restore last session from localStorage if available
        const savedSession = localStorage.getItem("lastSession");
        if (savedSession) {
          setCurrentSession(JSON.parse(savedSession));
        } else {
          // Set the latest session from the response
          const lastSession = response.data[response.data.length - 1];
          if (lastSession) {
            setCurrentSession(lastSession);
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching sessions:", error);
      });
  }, []);

  // Ensure currentSession stays updated with localStorage
  useEffect(() => {
    if (currentSession) {
      localStorage.setItem("lastSession", JSON.stringify(currentSession));
    }
  }, [currentSession]);

  // Function to switch session and save it to localStorage
  const switchSession = async (newSessionData) => {
    // Check if the new session is already the current session
    if (
      currentSession &&
      currentSession.affiliate === newSessionData.affiliate &&
      currentSession.domain === newSessionData.domain &&
      currentSession.account === newSessionData.account &&
      currentSession.month === newSessionData.month
    ) {
      console.log("Same session, no need to switch.");
      return;
    }

    try {
      const response = await axios.post(
        `${apiUrl}/api/switch-session`,
        newSessionData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      );

      // Optimistically update session list
      setSessions((prevSessions) => [...prevSessions, response.data]);

      // Update current session
      setCurrentSession(response.data);
    } catch (error) {
      console.error("Error switching session:", error);
    }
  };

  return (
    <SessionContext.Provider
      value={{ sessions, currentSession, switchSession, setCurrentSession }}
    >
      {children}
    </SessionContext.Provider>
  );
};
