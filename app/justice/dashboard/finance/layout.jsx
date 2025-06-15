import FinanceNav from "../../../components/finance/nav";
import FinanceTabs from "../../../components/finance/tabs";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <main className="finance-layout">
      <FinanceNav />
      <FinanceTabs />
      {children}
    </main>
  );
};

export default AdminLayout;
