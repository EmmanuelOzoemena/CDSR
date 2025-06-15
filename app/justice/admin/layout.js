// import AdminHeader from "@/app/components/admin/adminDashboardHeader";
// import AdminTabs from "@/app/components/admin/tabs";
import DashboardHeader from "../../components/dashboardHeader"
import Sidebar from "../../components/dashboardSideBar";
import React from "react";

const AdminLayout = ({ children }) => {
  
  return (
    <main className="admin">
      {/* <AdminHeader /> */}
      <DashboardHeader />
      <div className="admin__inner">
        <Sidebar />
        <div className="admin__inner__main">
         
          <AdminTabs />
          {children}
        </div>
      </div>
    </main>
  );
};

export default AdminLayout;
