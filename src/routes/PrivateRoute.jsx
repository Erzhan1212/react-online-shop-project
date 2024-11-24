import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ Component, fallBackPath, isAuthorized }) => {
  return isAuthorized ? Component : <Navigate to={fallBackPath} replace />;
};
