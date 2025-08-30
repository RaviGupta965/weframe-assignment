'use client'
import { useState } from "react";
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import Accounts from "./component/Accounts";
import Controller from "./component/Controller";
export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  return (
    <div className="flex flex-row">
      <div className="flex flex-row">
        <div
          className={`
          fixed top-0 left-0 h-full w-[max(22vw,240px)]
          lg:static lg:block
          z-50
          ${sidebarOpen ? "" : "hidden"}
        `}
        >
          <Sidebar toggleSidebar={toggleSidebar}/>
        </div>
        <div className="flex flex-col lg:w-[76vw] w-[100vw]">
          <Header toggleSidebar={toggleSidebar} />
          <Accounts />
          <Controller />
        </div>
      </div>
    </div>
  );
}
