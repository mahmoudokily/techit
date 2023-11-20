import { Navigate, Route, Routes } from "react-router-dom";
import App from "../../App";
import { PrivateRoutes } from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import ErrorsRoutes from "./ErrorsRoutes";
import Home from "../../home/screen/Home";
import Dashboard from "./../assets/svg/Dashboard";

export const AppRoutes = () => {
  const isAuth = true;

  return (
    <Routes>
      <Route path="error/*" element={<ErrorsRoutes />} />
      {!!isAuth ? (
        <>
          <Route element={<App />}>
            <Route path="/*" element={<Navigate to="/error/404" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route index element={<Home />} />
            <Route path="/error/404" element={<ErrorsRoutes />} />
            <Route path="*" element={<Navigate to="/error/404" />} />
          </Route>
        </>
      ) : (
        <>
          <Route path="/*" element={<PublicRoutes />} />
          <Route index element={<Navigate to="/login" replace={true} />} />
        </>
      )}
    </Routes>
  );
};
