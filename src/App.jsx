import React from "react";
import { useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage, getLocalStorage } from "./utils/localStorage";

const App = () => {
  useEffect(() => {
    // setLocalStorage()
    getLocalStorage()
  },)
  


  return (
    <>
    {/* <Login /> */}
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  );
};

export default App;
