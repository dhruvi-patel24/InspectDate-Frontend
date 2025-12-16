import { useState } from 'react'
import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/home';
import SignIn from './components/auth/SignIn';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';
import PageUnderConstruction from './components/common/PageUnderConstruction';
import DashboardLayout from './components/dashboard/DashboardLayout';
import Calendar from './components/dashboard/Calendar';
import Projects from './components/projects/Projects';
import Banks from './components/banks/Banks';
import ProjectTransfers from './components/transfers/ProjectTransfers';
import ContactSupport from './components/contact/ContactSupport';
import { ROUTES } from './routes/routePaths';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={ROUTES.sign_in} element={<SignIn />} />
          <Route path={ROUTES.forgot_password} element={<ForgotPassword />} />
          <Route path={ROUTES.reset_password} element={<ResetPassword />} />

          {/* Dashboard Routes */}
          <Route element={<DashboardLayout />}>
            <Route path={ROUTES.dashboard} element={<div className="p-4"><h1>Welcome to Dashboard</h1></div>} />
            <Route path={ROUTES.calendar} element={ <Calendar /> } />
            <Route path={ROUTES.projects} element={ <Projects /> } />
            <Route path={ROUTES.project_transfers} element={ <ProjectTransfers /> } />
            <Route path={ROUTES.banks} element={ <Banks /> } />
            <Route path={ROUTES.contact_us} element={ <ContactSupport /> } />
            {/* Add other routes as placeholders for now */}
            <Route path="*" element={<PageUnderConstruction />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
