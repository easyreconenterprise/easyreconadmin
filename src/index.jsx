import { CssBaseline } from "@mui/material";
import { StyledEngineProvider } from "@mui/styled-engine";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import * as serviceWorker from "./serviceWorker";
import { SessionProvider } from "./app//components/MatxLayout/SwitchContext"; // Adjust path as necessary
import { DataProvider } from "app/views/dashboard/DataContext";
import { MatchedItemsProvider } from "app/views/dashboard/MatchedItemsContext";
import { RuleProvider } from "app/views/dashboard/pages/RuleContext";

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <BrowserRouter>
      <CssBaseline />
      <SessionProvider>
        <DataProvider>
          <MatchedItemsProvider>
            <RuleProvider>
              <App />
            </RuleProvider>
          </MatchedItemsProvider>
        </DataProvider>
      </SessionProvider>
    </BrowserRouter>
  </StyledEngineProvider>,
  document.getElementById("root")
);

// for IE-11 support un-comment cssVars() and it's import in this file
// and in MatxTheme file

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
