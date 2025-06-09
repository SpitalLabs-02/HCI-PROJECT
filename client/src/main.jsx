import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import MainLayout from './Layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import HowItWorksPage from './pages/HowItWorksPage.jsx'
import Services from './pages/Services.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <App />} />
        <Route path='' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' />
          <Route path='/how-it-works' element={<HowItWorksPage />}/>
          <Route path='/contact' />
          <Route path='/services' element={<Services/>} />
          <Route path='/login' />
          <Route path='/singup' />
        </Route>
    </Routes>
   
  </BrowserRouter>
  
)
