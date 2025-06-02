import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import MainLayout from './Layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <App />} />
        <Route path='' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' />
          <Route path='/service' />
          <Route path='/contact' />
          <Route path='/login' />
          <Route path='/singup' />
        </Route>
    </Routes>
   
  </BrowserRouter>
  
)
