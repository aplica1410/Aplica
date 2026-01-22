import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("aplica_token");
  const user = JSON.parse(localStorage.getItem("aplica_user"));

  // ❌ Not logged in
  if (!token || !user) {
    return <Navigate to="/auth" replace />;
  }

  // ⚠️ Logged in but profile not complete
  if (!user.profileComplete) {
    return <Navigate to="/dashboard/profile/professional" replace />;
  }

  // ✅ All good
  return <Outlet />;
};

export default ProtectedRoute;
