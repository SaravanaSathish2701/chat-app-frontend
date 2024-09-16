/* eslint-disable react/prop-types */
import { Navigate, Route } from "react-router-dom";
import { isAuthenticated } from "../../authUtils.js";

const PrivateRoute = ({ element: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isAuthenticated() ? Component : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
