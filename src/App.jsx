import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/home';
import SignIn from './components/auth/SignIn';
import { ROUTES } from './routes/routePaths';
// import ProjectListing from './pages/project/projectListing';
// import BankListing from './pages/bank/bankListing';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={ROUTES.sign_in} element={<SignIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
