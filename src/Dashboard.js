import React from "react";
import Navbar from "./Nav";
import MaterialUIPickers from "./Datepick";
import Showdate from "./Showdate"

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("jwt"));
  const { success } = user;

  return (
    <div className="dash flex-column">
      <Navbar navv={"Sign Out"} navvv={"Profile"} />
      <div className = "date"> 
        <p className="f2 pa6">
          Welcome {success.name}, please book an appointment
        </p>
        <MaterialUIPickers />
      </div>
      <div className="dash pa6 tc flex-center">
           <Showdate/>
      </div>
   
    </div>
  );
};

export default Dashboard;
