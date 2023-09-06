import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "../../layouts/admins/sidebar/Sidebar";

const PrivateRouter: React.FC<{}> = () => {
  const isLogin = true;
  return isLogin ? (
    <div className="flex">
      <Sidebar />
      <>
        <Outlet />
      </>
    </div>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default PrivateRouter;
