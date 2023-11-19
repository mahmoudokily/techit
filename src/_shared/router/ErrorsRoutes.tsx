import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SuspensedView } from "./SuspensedView";
import Error from "./../../pages/errors/screens/Error";

const Error404 = React.lazy(
  () => import("../../pages/errors/screens/Error404")
);

const ErrorsRoutes = () => {
  return (
    <Routes>
      <Route element={<Error />}>
        <Route
          path="404"
          element={
            <SuspensedView>
              <Error404 />
            </SuspensedView>
          }
        />

        <Route
          index
          element={
            <SuspensedView>
              <Error404 />
            </SuspensedView>
          }
        />
        <Route path="/*" element={<Navigate to="/404" />} />
      </Route>
    </Routes>
  );
};

export default ErrorsRoutes;
