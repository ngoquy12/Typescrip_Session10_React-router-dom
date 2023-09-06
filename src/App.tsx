import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/public/home/HomePage";
import About from "./pages/public/about/About";
import Contact from "./pages/public/contact/Contact";
import Login from "./pages/public/login/Login";
import Register from "./pages/public/register/Register";
import PrivateRouter from "./pages/private/PrivateRouter";
import HomeAdmin from "./pages/private/HomeAdmin";
import ManagerUser from "./pages/private/ManagerUser";
import ManagerProduct from "./pages/private/ManagerProduct";

function App() {
  return (
    <>
      <Routes>
        {/* Những component public */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Những component private */}
        <Route element={<PrivateRouter />}>
          {/*   Danh sách các component cần được bảo vệ */}
          <Route path="/admin" element={<HomeAdmin />} />
          <Route path="manager-user" element={<ManagerUser />} />
          <Route path="manager-product" element={<ManagerProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
