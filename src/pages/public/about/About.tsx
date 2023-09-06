import React from "react";
import Header from "../../../layouts/users/header/Header";
import Footer from "../../../layouts/users/footer/Footer";

const About: React.FC<{}> = () => {
  return (
    <div>
      <Header />
      <h1>Đây là trang giới thiệu</h1>
      <Footer />
    </div>
  );
};

export default About;
