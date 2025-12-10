import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n';
// Asegúrate de que esta línea esté presente
import { BrowserRouter } from 'react-router-dom' 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* El Router debe envolver a App */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)