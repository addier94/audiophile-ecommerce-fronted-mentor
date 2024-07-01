import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/common/Footer/Footer";
import { Navbar } from "./components/common/Navbar/Navbar";
import { Home } from "./pages/home/page";
import { CategoryId } from "./pages/categoryId/page";

export default function AppRouter() {
  return (
    <div
      className="
        min-h-screen
        flex
        flex-col
      "
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<CategoryId />} />
      </Routes>
      {/* <Outlet /> */}
      <Footer />
    </div>
  );
}
