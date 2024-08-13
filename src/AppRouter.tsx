import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/common/Footer/Footer";
import { Navbar } from "./components/common/Navbar/Navbar";
import { Home } from "./pages/home/page";
import { CategoryId } from "./pages/categoryId/page";
import { ProductSlug } from "./pages/productSlug/page";

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
        <Route path="/category/:categoryName" element={<CategoryId />} />
        <Route path="/product/:productSlug" element={<ProductSlug />} />
      </Routes>
      {/* <Outlet /> */}
      <Footer />
    </div>
  );
}
