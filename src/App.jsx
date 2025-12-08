import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/home';
// import ProjectListing from './pages/project/projectListing';
// import BankListing from './pages/bank/bankListing';

function App() {
  return (
    <BrowserRouter>
        <Home />
    </BrowserRouter>
  )
}

export default App
