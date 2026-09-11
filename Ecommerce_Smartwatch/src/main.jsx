import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './Context/ThemeContext.jsx'
import { CartProvider } from './Context/ContextCarts.jsx'
import { ProductProvider } from './Context/ContextProducts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
       <CartProvider>
        <ThemeProvider>
          <App/>
        </ThemeProvider>
       </CartProvider>
    </ProductProvider>
  </StrictMode>,
)
