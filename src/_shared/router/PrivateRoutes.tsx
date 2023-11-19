import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../home/screen/Home";
import { SuspensedView } from "./SuspensedView";

const Dashboard = lazy(() => import("../../pages/dashboard/screens/Dashboard"));
export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route index element={<Home />} />
    </Routes>
  );
};
