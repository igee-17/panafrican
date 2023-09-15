import React from "react";
import { Navigate } from "react-router-dom";
import CreatePostStayUpdated from "../../components/admin/CreatePostStayUpdated";
import Dashboard from "../../components/admin/Dashboard";

const CreatePost = () => {
  const isAuthenticated = localStorage.getItem("isAuth");

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <Dashboard>
      <CreatePostStayUpdated />
    </Dashboard>
  );
};

export default CreatePost;
