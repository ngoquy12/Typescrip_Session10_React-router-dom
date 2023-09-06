import React from "react";
import Header from "../../../layouts/users/header/Header";
import Footer from "../../../layouts/users/footer/Footer";

const HomePage: React.FC<{}> = () => {
  return (
    <div>
      <Header />
      {/* Main */}
      <h1>Đây là trang chủ</h1>
      <Footer />
    </div>
  );
};

export default HomePage;
