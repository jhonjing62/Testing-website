import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Homepage from "./page/Homepage";
import ProductDetail from "./components/Products/ProductDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {" "}
          {/* Homepage */} <Route index element={<Homepage />} /> {/* Home */}{" "}
          <Route path="Home" element={<Homepage />} /> {/* Product Detail */}{" "}
          <Route path="products/:id" element={<ProductDetail />} />{" "}
        </Route>{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}
export default App;
