import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../home/screen/Home";
import { SuspensedView } from "./SuspensedView";
import ErrorsRoutes from "./ErrorsRoutes";
import { MasterLayout } from "./MasterLayout";

const Dashboard = lazy(() => import("../../pages/dashboard/screens/Dashboard"));
export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route path="/*" element={<Navigate to="/error/404" />} />
        <Route path="dashboard" element={<Dashboard />} />
        {/* <Route index element={<Home />} /> */}
        <Route path="/error/404" element={<ErrorsRoutes />} />
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
};
