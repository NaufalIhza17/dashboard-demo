import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col md:ml-64">
        {" "}
        {/* hard-coded :) ml-64 is the width of the sidebar */}
        <Navbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 p-6 pt-28 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
