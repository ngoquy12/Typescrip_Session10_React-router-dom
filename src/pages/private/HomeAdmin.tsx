import React from "react";
import Header from "../../layouts/admins/header/Header";
import Button from "./../../components/button/Button";

const HomeAdmin: React.FC<{}> = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <Header />
        <div className="bg-white flex-1 p-4">
          {/* tooltip chưa các button, xóa nhiều, lọc, tìm kiếm dữ liệu */}
          <div>
            <h3>Tổng quan</h3>
            <Button title="Thêm mới tài khoản" type="primary" />
            <Button title="Thêm mới sản phẩm" type="success" />
          </div>
          {/* Main chưa table... phân trang */}
        </div>
      </div>
    </>
  );
};

export default HomeAdmin;
