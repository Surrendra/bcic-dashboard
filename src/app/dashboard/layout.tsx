import React from "react"
import Header from "./components/header";
import Sidebar from "./components/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
        <Sidebar/>
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 flex-1">{children}</main>
      </div>
    </div>
  );
}