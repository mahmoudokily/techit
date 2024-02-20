/** @format */

import React from "react";
import { Center } from "./Center";
import { Navigate, redirect } from "react-router-dom";
import UserService from "../utils/services/AuthService";
type RenderOnRoleProps = {
  roles: string[];
  children: any;
  page?: boolean;
};

const RenderOnRole: React.FC<RenderOnRoleProps> = ({
  roles,
  children,
  page,
}) => {
  if (!roles.length) return children;
  if (!UserService.hasRealmRole(roles))
    return page ? <Navigate to="/home" replace /> : null;
  return children;
};

export default RenderOnRole;
