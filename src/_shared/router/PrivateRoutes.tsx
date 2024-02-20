/** @format */

import { Suspense, lazy } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { SuspensedView } from "./SuspensedView"
import ErrorsRoutes from "./ErrorsRoutes"
import { MasterLayout } from "./MasterLayout"
import App from "../../App"
import RenderOnRole from "../UI/RenderOnRole"
const Team = lazy(() => import("../../pages/team/screens/Team"))
const Clients = lazy(() => import("../../pages/clients/screens/Clients"))
const WorkWithUs = lazy(
  () => import("../../pages/availableJobs/screens/WorkWithUs")
)
const JobDetails = lazy(
  () => import("../../pages/availableJobs/screens/JobDetails")
)
const Home = lazy(() => import("../../home/screen/Home"))

const Apply = lazy(() => import("../../pages/availableJobs/screens/Apply"))
const ContactDetails = lazy(
  () => import("../../pages/availableJobs/components/ContactDetails")
)
const WorkHistory = lazy(
  () => import("../../pages/availableJobs/components/WorkHistory")
)
const Education = lazy(
  () => import("../../pages/availableJobs/components/Education")
)
const PreviewCv = lazy(
  () => import("../../pages/availableJobs/components/PreviewCv")
)
const Start = lazy(() => import("../../pages/availableJobs/components/Start"))
const Skills = lazy(() => import("../../pages/availableJobs/components/Skills"))
const Preferences = lazy(
  () => import("../../pages/availableJobs/components/Preferences")
)

const SaveCv = lazy(() => import("../../pages/availableJobs/components/SaveCV"))
export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
        {/* <Route path="/*" element={<Navigate to="/error/404" />} /> */}

        {/* <Route path="/*" element={<Navigate to="/error/404" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route index element={<Home />} />
        <Route path="/error/404" element={<ErrorsRoutes />} />
        <Route path="*" element={<Navigate to="/error/404" />} /> */}
        <Route
          path="/"
          element={
            <SuspensedView>
              <Home />
            </SuspensedView>
          }
        />
        <Route
          path="/home"
          element={
            <SuspensedView>
              <Home />
            </SuspensedView>
          }
        />
        <Route
          path="/contact"
          element={
            <SuspensedView>
              <Home />
            </SuspensedView>
          }
        />
        <Route
          path="work-with-us"
          element={
            <RenderOnRole page roles={["workWithUs"]}>
              <SuspensedView>
                <WorkWithUs />
              </SuspensedView>
            </RenderOnRole>
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
        >
          <Route
            path="contact-details"
            element={
              <SuspensedView>
                <ContactDetails />
              </SuspensedView>
            }
          />
          <Route
            path="work-history"
            element={
              <SuspensedView>
                <WorkHistory />
              </SuspensedView>
            }
          />
          <Route
            path="education"
            element={
              <SuspensedView>
                <Education />
              </SuspensedView>
            }
          />
          <Route
            path="preview"
            element={
              <SuspensedView>
                <PreviewCv />
              </SuspensedView>
            }
          />
          <Route
            path="save"
            element={
              <SuspensedView>
                <SaveCv />
              </SuspensedView>
            }
          />
          <Route
            path="skills"
            element={
              <SuspensedView>
                <Skills />
              </SuspensedView>
            }
          />
          <Route
            path="preferences"
            element={
              <SuspensedView>
                <Preferences />
              </SuspensedView>
            }
          />
          <Route
            path="start"
            element={
              <SuspensedView>
                <Start />
              </SuspensedView>
            }
          />
        </Route>
      </Route>
    </Routes>
  )
}
