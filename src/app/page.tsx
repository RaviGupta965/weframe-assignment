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
        <div className={`
    sticky h-full bg-white w-[max(22vw,240px)]
    lg:block hidden z-50
    transition-left duration-300
    left-[-max(22vw,240px)]
    lg:left-0
    ${sidebarOpen ? "left-0" : "-left-full"}
  `}>
          <Sidebar />
        </div>
        <div className="flex flex-col lg:w-[76vw] w-[100vw]">
          <Header />
          <Accounts />
          <Controller />
        </div>
      </div>
    </div>
  );
}
