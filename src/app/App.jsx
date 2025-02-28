import "../fake-db";

import { useRoutes } from "react-router-dom";
import { MatxTheme } from "./components";
import { SubcategoryProvider } from "./SubcategoryContext";
import { SettingsProvider } from "./contexts/SettingsContext";

import routes from "./routes";
import { AuthProvider } from "./contexts/JWTAuthContext";

const App = () => {
  const content = useRoutes(routes);

  return (
    <>
      <SettingsProvider>
        <MatxTheme>
          <AuthProvider>{content}</AuthProvider>
        </MatxTheme>
      </SettingsProvider>
    </>
  );
};

export default App;
