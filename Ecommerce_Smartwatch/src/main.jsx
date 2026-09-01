import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvide } from './Context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ThemeProvide>
    <App/>
   </ThemeProvide>
  </StrictMode>,
)
