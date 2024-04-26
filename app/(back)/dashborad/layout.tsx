// import { ReactNode } from "react"
import NavBar from "@/components/Dashborad/NavBar";
import Sidebar from "@/components/Dashborad/SideBar";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <Sidebar />
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
