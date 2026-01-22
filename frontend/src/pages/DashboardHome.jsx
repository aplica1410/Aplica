import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

import "../styles/dashboard-home.css";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatCard from "../components/dashboard/StatCard";
import HistoryCard from "../components/dashboard/HistoryCard";
import PreviewCard from "../components/dashboard/PreviewCard";

const DashboardHome = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("aplica_token");

        const res = await fetch("http://localhost:5000/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (data.success) {
          setUser(data.user);
        }
      } catch (err) {
        console.error("Failed to fetch user", err);
      }
    };

    if (!user) fetchUser();
  }, [user, setUser]);

  const isProfileIncomplete = user && user.profileComplete === false;

  return (
    <div className="dashboard-home">
      <DashboardHeader user={user} />

      {/* Stats */}
      <div className="stats-grid">
        <StatCard title="Email Sent" value={user?.stats?.sent || 0} />
        <StatCard title="Email Remaining" value={user?.stats?.remaining || "0/100"} />
        <StatCard title="Left To Preview" value={user?.stats?.toPreview || 0} />
      </div>

      {/* Profile CTA for new users */}
      {isProfileIncomplete && (
        <div className="profile-warning">
          <p>Your profile is incomplete.</p>
          <button
            className="primary-btn"
            onClick={() => navigate("/dashboard/profile/professional")}
          >
            Update Your Profile
          </button>
        </div>
      )}

      {/* Bottom cards */}
      <div className="dashboard-bottom">
        <HistoryCard items={[]} />
        <PreviewCard items={[]} />
      </div>
    </div>
  );
};

export default DashboardHome;
