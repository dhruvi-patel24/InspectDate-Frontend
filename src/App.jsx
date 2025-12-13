import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/home';
import SignIn from './components/auth/SignIn';
import DashboardLayout from './components/dashboard/DashboardLayout';
import Calendar from './components/dashboard/Calendar';
import Projects from './components/projects/Projects';
import ProjectTransfers from './components/transfers/ProjectTransfers';
import { ROUTES } from './routes/routePaths';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={ROUTES.sign_in} element={<SignIn />} />

          {/* Dashboard Routes */}
          <Route element={<DashboardLayout />}>
            <Route path={ROUTES.dashboard} element={<div className="p-4"><h1>Welcome to Dashboard</h1></div>} />
            <Route path={ROUTES.calendar} element={ <Calendar /> } />
            <Route path={ROUTES.projects} element={ <Projects /> } />
            <Route path={ROUTES.project_transfers} element={ <ProjectTransfers /> } />
            {/* Add other routes as placeholders for now */}
            <Route path="*" element={<div>Page Under Construction</div>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
