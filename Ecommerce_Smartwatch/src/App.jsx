import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Homepage from "./page/Homepage";
import ProductDetail from "./components/Products/ProductDetail";
import Cartpage from "./page/Cartpage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          
          <Route index element={<Homepage />} /> 
          <Route path="Home" element={<Homepage />} /> 
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cartpage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
