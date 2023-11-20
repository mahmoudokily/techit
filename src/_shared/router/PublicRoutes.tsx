import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Auth from "../../auth/screen/Auth";

const AuthLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default function PublicRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/*" element={<Navigate to="/auth" />} />
        <Route path="auth" element={<Auth />} />

        {/* 
        <Route path="forget-password" element={<ForgetPassword />} />
        <Route path="reset-password/:token" element={<ResetPassword />} /> */}
        <Route index element={<Auth />} />
      </Route>
    </Routes>
  );
}
