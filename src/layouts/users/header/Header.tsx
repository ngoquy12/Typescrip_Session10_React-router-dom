import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC<{}> = () => {
  return (
    <>
      <header className="bg-black  text-white flex justify-between items-center">
        <div className="flex gap-3">
          <NavLink className="p-4" to="/">
            Trang chủ
          </NavLink>
          <NavLink className="p-4" to="/about">
            Giới thiệu
          </NavLink>
          <NavLink className="p-4" to="/contact">
            Liên hệ
          </NavLink>
        </div>
        <div className="flex gap-4">
          <NavLink className="p-4" to="/cart">
            Giỏ hàng
          </NavLink>
          <NavLink className="p-4" to="/register">
            Đăng ký
          </NavLink>
          <NavLink className="p-4" to="/login">
            Đăng nhập
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;
