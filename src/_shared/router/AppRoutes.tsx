import { lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../../home/screen/Home";
import Dashboard from "./../assets/svg/Dashboard";
import ErrorsRoutes from "./ErrorsRoutes";
import PublicRoutes from "./PublicRoutes";
import { SuspensedView } from "./SuspensedView";

const App = lazy(() => import("../../App"));
const Team = lazy(() => import("../../pages/team/screens/Team"));
const Clients = lazy(() => import("../../pages/clients/screens/Clients"));
const WorkWithUs = lazy(
  () => import("../../pages/availableJobs/screens/WorkWithUs")
);
const JobDetails = lazy(
  () => import("../../pages/availableJobs/screens/JobDetails")
);
const Apply = lazy(() => import("../../pages/availableJobs/screens/Apply"));
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <SuspensedView>
        <Routes>
          <Route element={<App />}>
            <Route path="/*" element={<Navigate to="/error/404" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route index element={<Home />} />
            <Route path="/error/404" element={<ErrorsRoutes />} />
            <Route path="*" element={<Navigate to="/error/404" />} />
            <Route
              path="work-with-us"
              element={
                <SuspensedView>
                  <WorkWithUs />
                </SuspensedView>
              }
            />
            <Route
              path="work-with-us/:id"
              element={
                <SuspensedView>
                  <JobDetails />
                </SuspensedView>
              }
            ></Route>
            <Route
              path="work-with-us/:id/apply"
              element={
                <SuspensedView>
                  <Apply />
                </SuspensedView>
              }
            ></Route>
            <Route path="error/*" element={<ErrorsRoutes />} />
            <Route
              path="/team"
              element={
                <SuspensedView>
                  <Team />{" "}
                </SuspensedView>
              }
            />

            <Route path="reviews" element={<>Reviews</>} />
            <Route
              path="/clients"
              element={
                <SuspensedView>
                  <Clients />
                </SuspensedView>
              }
            />
          </Route>
        </Routes>
      </SuspensedView>
    </BrowserRouter>
  );
};
