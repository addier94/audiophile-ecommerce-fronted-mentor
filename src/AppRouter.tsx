import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./features/store";
import { Home } from "./app/home/page";
import NotFound from "./components/common/NotFound";
import WithLayout from "./components/common/Layout";
import { CategoryName } from "./app/categoryName/page";
import { ProductId } from "./app/productId/page";

const HomeWithLayout = WithLayout(Home);
const CategoryWithLayout = WithLayout(CategoryName);
const ProductWithLayout = WithLayout(ProductId);

export default function AppRouter() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<HomeWithLayout />} />
          <Route
            path="/products/:category_name"
            element={<CategoryWithLayout />}
          />
          <Route path="/product/:productId" element={<ProductWithLayout />} />
          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Outlet /> */}
      </Provider>
    </Router>
  );
}
