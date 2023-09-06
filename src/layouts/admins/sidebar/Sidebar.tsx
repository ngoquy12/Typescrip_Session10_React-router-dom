import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

const Sidebar: React.FC<{}> = () => {
  return (
    <>
      <div className="flex flex-col bg-black min-h-screen text-white w-60">
        <NavLink className="router-link-item" to="/admin">
          Tổng quan
        </NavLink>
        <NavLink className="router-link-item" to="/manager-user">
          Quản lý tài khoản
        </NavLink>
        <NavLink className="router-link-item" to="/manager-product">
          Quản lý sản phẩm
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;
