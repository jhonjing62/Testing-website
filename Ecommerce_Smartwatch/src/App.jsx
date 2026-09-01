import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./components/Layout/MainLayout";
import Homepage from "./page/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="Home" element={<Homepage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
