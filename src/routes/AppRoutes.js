import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/Login/LoginPage';
import DesktopPage from '../pages/Desktop/DesktopPage';
import CreateAccountPage from '../pages/CreateAccount/CreateAccountPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/desktop" element={<DesktopPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
