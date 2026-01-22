import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "../components/layout/Sidebar";
import "../styles/dashboard-layout.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("aplica_token");
    const user = JSON.parse(localStorage.getItem("aplica_user"));

    // 🔒 Not logged in
    if (!token || !user) {
      navigate("/auth", { replace: true });
      return;
    }

    // 🆕 Logged in but profile not completed
    if (!user.profileComplete) {
      if (!location.pathname.startsWith("/dashboard/profile")) {
        navigate("/dashboard/profile/professional", { replace: true });
      }
      return;
    }

    // ✅ Profile completed, landing on /dashboard
    if (location.pathname === "/dashboard") {
      navigate("/dashboard/home", { replace: true });
    }
  }, [navigate, location.pathname]);

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
