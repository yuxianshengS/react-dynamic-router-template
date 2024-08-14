import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export default function ProtectedRoute({ element }) {
  const { isAuthenticated, update } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    update(userInfo ? true : false);
  }, [location]);

  return isAuthenticated ? element : <Navigate to="/login" replace />;
}
