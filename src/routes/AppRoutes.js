import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/Login/LoginPage';
import DesktopPage from '../pages/Desktop/DesktopPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/desktop" element={<DesktopPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
