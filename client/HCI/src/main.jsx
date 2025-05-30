
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import MainLayout from './Layouts/MainLayout.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='' element={ <MainLayout /> }>
        <Route index element={<App />} />
      </Route>
    </Routes>
   
  </BrowserRouter>
  
)
