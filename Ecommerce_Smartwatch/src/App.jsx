import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./components/Layout/MainLayout";
import Homepage from "./page/Homepage";
import ProductDetail from "./components/Products/ProductDetail";

// 1. Import Context Provider ចេញពី ContextProducts.jsx
import { ProductProvider } from "./Context/ContextProducts"; 

function App() {
  return (
    // 2. រុំ ProductProvider នៅជុំវិញ BrowserRouter
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path="Home" element={<Homepage />} />
            <Route
              path="/product/:id"
              element={<ProductDetail />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;