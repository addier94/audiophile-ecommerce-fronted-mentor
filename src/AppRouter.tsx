import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./components/common/Footer/Footer";
import { Navbar } from "./components/common/Navbar/Navbar";
import { Home } from "./app/home/page";
import { CategoryId } from "./app/categoryId/page";
import { ProductSlug } from "./app/productSlug/page";
import { Provider } from "react-redux";
import store from "./features/store";
import NotFound from "./components/common/NotFound";
import WithLayout from "./components/common/Layout";

const HomeWithLayout = WithLayout(Home);

export default function AppRouter() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<HomeWithLayout />} />
          {/* <Route path="/products/:category" element={<CategoryId />} /> */}
          {/* <Route path="/product/:productSlug" element={<ProductSlug />} /> */}
          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Outlet /> */}
      </Provider>
    </Router>
  );
}
