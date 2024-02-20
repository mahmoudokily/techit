/** @format */

import { lazy, useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Dashboard from "./../assets/svg/Dashboard";
import ErrorsRoutes from "./ErrorsRoutes";
import PublicRoutes from "./PublicRoutes";
import { SuspensedView } from "./SuspensedView";
import UserService from "../utils/services/AuthService";
import { PrivateRoutes } from "./PrivateRoutes";

const Home = lazy(() => import("../../home/screen/Home"));

export const AppRoutes = () => {
  const isAuth = UserService?.isLoggedIn();
  console.log(isAuth);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="error/*" element={<ErrorsRoutes />} />

        {!!isAuth ? (
          <>
            <Route path="/*" element={<PrivateRoutes />} />
            <Route index element={<Navigate to="/home" replace={true} />} />
          </>
        ) : (
          <>
            <Route path="/*" element={<PublicRoutes />} />
            <Route index element={<Navigate to="/login" replace={true} />} />
          </>
        )}
      </>
    )
  );
  return <RouterProvider router={router} />;
};
