import React from "react";
import  { SidebarDemo } from "./_components/Header";

function DashboardLayout({ children }) {
  return (
    <div>
      <SidebarDemo>{children}</SidebarDemo>
    </div>
  );
}

export default DashboardLayout;
