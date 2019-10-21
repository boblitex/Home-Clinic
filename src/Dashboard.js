import React from "react";
import Navbar from "./Nav";

const Dashboard = () => {
  return (
    <div className="dash">
      <Navbar navv={"Sign Out"} navvv={"Profile"} />
      <p className = "f2">
          Welcome User
      </p>
      
    </div>
  );
};

export default Dashboard;
