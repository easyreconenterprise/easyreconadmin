import { MatxSuspense } from "app/components";
import useSettings from "app/hooks/useSettings";
import { MatxLayouts } from "./index";
import SessionInfo from "../SessionInfo";

const MatxLayout = (props) => {
  const { settings } = useSettings();
  const Layout = MatxLayouts[settings.activeLayout];

  return (
    <MatxSuspense>
      <Layout {...props} />
      <SessionInfo />
    </MatxSuspense>
  );
};

export default MatxLayout;
