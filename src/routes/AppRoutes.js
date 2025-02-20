import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/Login/LoginPage';
import DesktopPage from '../pages/Desktop/DesktopPage';
import CreateAccountPage from '../pages/CreateAccount/CreateAccountPage';
import ResetPasswordPage from '../pages/Login/ResetPassword';
import SelectProductPage from '../pages/SelectProduct/SelectProductPage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/desktop" element={<DesktopPage />} />
                <Route path="/create-account" element={<CreateAccountPage />} />
                <Route path="/reset-password" element={<ResetPasswordPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/select-product" element={<SelectProductPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
