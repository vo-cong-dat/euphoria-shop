import Header from "@/components/header";
import { Toaster } from "@/components/sonner";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <div className="flex h-screen flex-col overflow-y-auto">
        <Header />
        <Outlet />
      </div>
      <Toaster />
    </>
  );
}
