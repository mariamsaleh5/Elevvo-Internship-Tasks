// src/components/Layout.js
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        
        <Header />

        
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
