import "./App.css";
import ProductList from "./Pages/ProductList/ProductsList";
import Product from "./Pages/Product/Product";
import Layout from "./components/Layout/Layout";
import NotFound from "./Pages/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index path={"/"} element={<ProductList />} />
          <Route path={"/product/:id"} element={<Product />} />
          <Route path={"/*"} element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
