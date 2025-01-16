import React, { createContext, useEffect, useReducer } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { MatxLoading } from "app/components";
import { SessionContext } from "app/components/MatxLayout/SwitchContext";

const initialState = {
  isAuthenticated: false,
  isInitialised: false,
  user: null,
};

const apiUrl = process.env.REACT_APP_API_URL;

const isValidToken = (jwtToken) => {
  if (!jwtToken) {
    console.log("No JWT token found");
    return false;
  }

  const decodedToken = jwtDecode(jwtToken);
  const currentTime = Date.now() / 1000;

  console.log("Decoded Token:", decodedToken);
  console.log("Current Time:", currentTime);

  return decodedToken.exp > currentTime;
};

const setSession = (jwtToken) => {
  if (jwtToken) {
    console.log("Setting session with JWT token");
    localStorage.setItem("jwtToken", jwtToken);
    axios.defaults.headers.common.Authorization = `Bearer ${jwtToken}`;
  } else {
    console.log("Removing session and clearing JWT token");
    localStorage.removeItem("jwtToken");
    delete axios.defaults.headers.common.Authorization;
  }
};

const reducer = (state, action) => {
  console.log("Dispatch action:", action);
  switch (action.type) {
    case "INIT":
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        isInitialised: true,
        user: action.payload.user,
      };
    case "LOGIN":
    case "REGISTER":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

const AuthContext = createContext({
  ...initialState,
  method: "JWT",
  login: () => Promise.resolve(),
  logout: () => {},
  register: () => Promise.resolve(),
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { setCurrentSession } = React.useContext(SessionContext); // Access the session context

  useEffect(() => {
    const initAuth = async () => {
      const jwtToken = localStorage.getItem("jwtToken");
      const storedUser = localStorage.getItem("user");

      console.log("Checking for stored token and user:");
      console.log("jwtToken:", jwtToken);

      if (jwtToken && isValidToken(jwtToken)) {
        console.log("Token is valid, setting session");
        setSession(jwtToken);

        try {
          const response = await axios.get(`${apiUrl}/api/auth/profile`);
          const { user } = response.data;
          dispatch({
            type: "INIT",
            payload: {
              isAuthenticated: true,
              user,
            },
          });

          const savedSession = localStorage.getItem("lastSession");
          if (savedSession) {
            setCurrentSession(JSON.parse(savedSession));
          }
        } catch (err) {
          console.error("Error fetching profile:", err);
          dispatch({
            type: "INIT",
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } else {
        dispatch({
          type: "INIT",
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initAuth();
  }, [setCurrentSession]);
  const login = async (email, password) => {
    console.log("Attempting to login with:", { email, password });
    try {
      const response = await axios.post(`${apiUrl}/api/auth/login`, {
        email,
        password,
      });
      console.log("Login response:", response);

      if (response.status === 200) {
        const { token, user } = response.data;
        console.log("Login successful, received token and user:", {
          token,
          user,
        });
        localStorage.setItem("user", JSON.stringify(user));
        setSession(token);

        dispatch({
          type: "LOGIN",
          payload: { user },
        });

        // Restore last session on login
        const savedSession = localStorage.getItem("lastSession");
        if (savedSession) {
          setCurrentSession(JSON.parse(savedSession));
        }

        return response;
      } else {
        console.error("Login failed with status:", response.status);
        return response;
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const register = async (
    fullname,
    company_name,
    email,
    phone,
    address,
    password
  ) => {
    console.log("Attempting to register with:", {
      fullname,
      company_name,
      email,
      phone,
      address,
      password,
    });
    try {
      const response = await axios.post(`${apiUrl}/api/auth/signup`, {
        fullname,
        company_name,
        email,
        phone,
        address,
        password,
      });
      console.log("Register response:", response);

      if (response.status === 200) {
        const { token, user } = response.data;
        console.log("Registration successful, received token and user:", {
          token,
          user,
        });
        setSession(token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: "REGISTER",
          payload: { user },
        });
        return response;
      } else {
        console.error("Registration failed with status:", response.status);
        return response;
      }
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };

  const logout = () => {
    console.log("Logging out...");
    setSession(null);
    localStorage.removeItem("user");
    localStorage.removeItem("lastSession");
    dispatch({ type: "LOGOUT" });
  };

  if (!state.isInitialised) {
    console.log("Authentication not yet initialized");
    return <MatxLoading />;
  }

  console.log("Rendering AuthContext Provider with state:", state);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "JWT",
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
