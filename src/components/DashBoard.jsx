// src/components/Dashboard.tsx

import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  // Check if user is authenticated (this could come from local storage or context)
  const isAuthenticated = false; // Just a placeholder, you can replace it with actual logic.

  if (!isAuthenticated) {
    navigate("/"); // Redirect to login if not authenticated
  }

  return <div>Welcome to the Dashboard!</div>;
};

export default Dashboard;
