import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { userRole, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isLoginPage =
    location.pathname === "/login" ||
    location.pathname === "/admin-login" ||
    location.pathname === "/doctor-login";

  if (isLoginPage || loading) {
    return null;
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const roleLabel =
    userRole === "admin"
      ? "Admin"
      : userRole === "doctor"
        ? "Doctor"
        : "User";

  const goToDashboard = () => {
    if (userRole === "admin") {
      navigate("/admin-dashboard");
    } else if (userRole === "doctor") {
      navigate("/doctor-dashboard");
    }
  };

  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-blue-200 bg-white sm:px-10">
      <div className="flex items-center gap-3">
        <button
          onClick={goToDashboard}
          className="cursor-pointer text-3xl font-bold tracking-tight text-[#2563EB] transition hover:text-[#1D4ED8]"
        >
          Healix
        </button>

        <p className="rounded-full border border-blue-300 bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-[#1D4ED8]">
          {roleLabel}
        </p>
      </div>

      <button
        onClick={handleLogout}
        className="rounded-full bg-[#2563EB] px-6 py-2 text-sm text-white transition hover:bg-[#1D4ED8]"
      >
        Logout
      </button>
    </header>
  );
};

export default Navbar;