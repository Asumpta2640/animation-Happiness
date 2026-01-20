import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css' not important
//import App from './App.jsx'
//<App />not important

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> not important */}
    Hello World
    <div>This is cool</div>
    
  </StrictMode>,
)
