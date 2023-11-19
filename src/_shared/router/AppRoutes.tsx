import { Navigate, Route, Routes } from "react-router-dom";
import App from "../../App";
import { PrivateRoutes } from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import ErrorsRoutes from "./ErrorsRoutes";

export const AppRoutes = () => {
  const isAuth = true;

  return (
    <Routes>
      <Route element={<App />}>
        <Route path="error/*" element={<ErrorsRoutes />} />
        {!!isAuth ? (
          <>
            <Route path="/*" element={<PrivateRoutes />} />
            <Route index element={<Navigate to="/" replace={true} />} />
          </>
        ) : (
          <>
            <Route path="/*" element={<PublicRoutes />} />
            <Route index element={<Navigate to="/login" replace={true} />} />
          </>
        )}
      </Route>
    </Routes>
  );
};
