import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/Login/LoginPage';
import DesktopPage from '../pages/Desktop/DesktopPage';
import CreateAccountPage from '../pages/CreateAccount/CreateAccountPage';
import ResetPasswordPage from '../pages/Login/ResetPassword';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/desktop" element={<DesktopPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
