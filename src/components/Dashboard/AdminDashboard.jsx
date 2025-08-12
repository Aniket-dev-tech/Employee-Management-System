import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-screen p-10">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
