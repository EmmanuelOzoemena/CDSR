
import DashboardHeader from "../../components/dashboardHeader";
import DashboardSideBar from "../../components/dashboardSideBar";
// import StaffTabs from "@/app/components/staff/tabs";

import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <main className="dashboard">
      <DashboardHeader />
      <div className="dashboard__inner">
        <DashboardSideBar />

        {/* <div className="admin__inner__main">
         
         <StaffTabs />
         {children}
       </div> */}

        {children}
      </div>
    </main>
  );
};

export default DashboardLayout;
